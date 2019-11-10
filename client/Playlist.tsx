import React,{useState} from "react"
import styled from "styled-components"
import {Page,Button,StringFormLine,Alert} from "./components"
import useBindState from "./useBindState"
import axios from "axios"

const VideoWrapper = styled.div`
	position: relative;
	padding-bottom: 56.25%;
	padding-top: 25px;
	height: 0;
`

const Video = styled.iframe`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`
interface PlaylistProps{
	playlistId: string
}

enum PlaylistPage{
	playlist,
	add_song
}

interface Song{
	id: string,
	title: string,
	description: string,
	thumbnail: string
}

const SongContainer = styled.div`
	display:flex;
	padding:5px;
	cursor:pointer;
	&:hover{
		background:#ddd;
	}
`
const SongThumbnail = styled.img`
	width:100px;
`
const SongDetails = styled.div`
	flex:1;
	padding-left:10px;
`
const SongTitle = styled.div`
	font-size:14px;
	font-weight:bold;
	padding-top:10px;
`
const SongDescription = styled.div``

function Song(props: {onClick:()=>void,song:Song} ){
	return (
		<SongContainer onClick={props.onClick}>
			<SongThumbnail src={props.song.thumbnail}/>
			<SongDetails>
				<SongTitle>{props.song.title}</SongTitle>
				<SongDescription>{props.song.description}</SongDescription>
			</SongDetails>
		</SongContainer>
	)
}

export default function(props:{playlistId:string}){
	let [addedSong,setAddedSong] = useState(false)
	let [songs,setSongs] = useState<Song[]>(null)
	let search = async ()=>{
		setSongs((await axios.get<Song[]>(`/api/songs?artist=${artist.value}&song=${song.value}`)).data)
	}
	let name = useBindState("")
	let artist = useBindState("")
	let song = useBindState("")

	let addSong = async (video:string)=>{
		await axios.post(`/api/songs`,{
			video,
			name:`Name: ${name.value}
Künstler: ${artist.value}
Lied: ${song.value}`
		})
		setSongs(null)
		setAddedSong(true)
	}

	let cancel = ()=>{
		setSongs(null)
	}

	return <Page title="Musik" name="musik">
		<VideoWrapper>
			//@ts-ignore
			<Video
				src={`https://www.youtube.com/embed/videoseries?list=${props.playlistId as string}`}
				gesture="media"
				allow="encrypted-media"
				allowfullscreen=""
				width="560"
				height="315"
				frameborder="0"
			/>
		</VideoWrapper>
		{!addedSong && <>
			<h2>Lied hinzufügen</h2>
			{!songs&&<>
				<StringFormLine label="Dein Name" type="text" {...name}/>
				<StringFormLine label="Künstlername" type="text" {...artist}/>
				<StringFormLine label="Liedname" type="text" {...song} />
				<Button onClick={search}>Suchen</Button>
			</>}
			{songs&&<>
				<h3>Lied auswählen</h3>
				{songs.map(song=><Song song={song} onClick={()=>addSong(song.id)} />)}
				<Button onClick={cancel}>Zurück</Button>
			</>}
		</>}
		<div style={{clear:"both"}}></div>
		{addedSong && <Alert type="success">Ihr Lied wurde hinzugefügt und wird in wenigen Minuten in der Playliste aufgenommen.</Alert>}
	</Page>
}
