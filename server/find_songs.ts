import {Context} from "koa"
import axios from "axios"
import qs from "querystring"

interface Response{
	items:Array<{
		id:{
			kind: string,
			videoId: string
		},
		snippet:{
			title:string,
			description: string,
			thumbnails?:{
				default:{
					url:string
				}
			}
		}
	}>
}

export default (youtubeKey: string)=>{
	return async (ctx: Context)=>{
		var response = await axios.get<Response>("https://www.googleapis.com/youtube/v3/search?"+qs.stringify({
			part:"snippet",
			regionCode:"CH",
			type:"video",
			q:ctx.query.song+" "+ctx.query.artist,
			key:youtubeKey
		}));
		ctx.body = JSON.stringify(response.data.items.map((video)=>({
				id: video.id.videoId,
				title: video.snippet.title,
				description: video.snippet.description,
				thumbnail: video.snippet.thumbnails.default.url
			}))
		);
	}
}
