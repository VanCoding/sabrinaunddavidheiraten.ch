import React, { Children } from "react"
import styled, {StyledFunction} from "styled-components"
import {Container,Paragraph} from "./components"
import Menu from "./Menu"
import Infos from "./Infos"
import Signup from "./Signup"
import Ablauf from "./Ablauf"
import Location from "./Location"
import Kapelle from "./Kapelle"
import Playlist from "./Playlist"
import Fotos from "./Fotos"
import {Countdown,TargetDate} from "./Countdown"

//@ts-ignore
let config = window.config as {
	googleKey: string,
	playlistId: string
}

const App = styled.div``
const target = new Date(2020,4,16).getTime()

export default ()=>(
	<App>
		<Container>
			<div style={{display:"flex",flexDirection:"row",alignItems:"center",paddingBottom:"30px",paddingTop:"30px",justifyContent:"space-around"}}>
				<TargetDate target={target}/>
				<div style={{fontSize:"40px",color:"white"}}>❤</div>
				<Countdown target={target}/>
			</div>
			<Menu/>
			<Infos/>
			<Ablauf/>
			<Location googleKey={config.googleKey}/>
			<Kapelle googleKey={config.googleKey}/>
			<Signup/>
			<Playlist playlistId={config.playlistId}/>
			<Fotos/>
		</Container>
	</App>
)


