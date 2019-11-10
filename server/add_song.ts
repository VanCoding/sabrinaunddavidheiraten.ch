import {Context} from "koa"
import axios from "axios";
import qs from "querystring"
import parse from "co-body"

export default (config: {
	refresh_token: string,
	client_id: string,
	client_secret: string,
	playlistId: string
})=>{
	return async (ctx: Context)=>{
		let {video,name} = await parse.json(ctx) as {video:string,name:string}

		var accessToken = (await axios({
			url:"https://accounts.google.com/o/oauth2/token",
			method:"POST",
			data:qs.stringify({
				grant_type:'refresh_token',
				refresh_token:config.refresh_token,
				client_id:config.client_id,
				client_secret:config.client_secret
			}),
			headers:{
				'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
			}
		})).data.access_token as string;

		await axios({
			url:"https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&alt=json&access_token="+accessToken,
			method:"POST",
			data:{	
				snippet:{
					playlistId:config.playlistId,
					position:0,
					resourceId:{
						kind:"youtube#video",
						videoId:video
					}
				},
				contentDetails:{
					note:name.toLowerCase().trim()
				}
			}
		});

		ctx.status = 200
	}
}
