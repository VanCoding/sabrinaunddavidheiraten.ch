import React, { Children } from "react"
import styled, {StyledFunction} from "styled-components"
import Menu from "./Menu"
import Infos from "./Infos"
import Signup from "./Signup"
import Ablauf from "./Ablauf"
import Location from "./Location"
import Kapelle from "./Kapelle"
import Playlist from "./Playlist"
import Fotos from "./Fotos"

//@ts-ignore
let config = window.config as {
	googleKey: string,
	playlistId: string
}

const App = styled.div``

export default class Client extends React.Component{
	render(){
		return (<App>
			<Menu/>
			<Infos/>
			<Ablauf/>
			<Location googleKey={config.googleKey}/>
			<Kapelle googleKey={config.googleKey}/>
			<Signup/>
			<Playlist playlistId={config.playlistId}/>
			<Fotos/>
		</App>)
	}
}


