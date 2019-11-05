import React, { Children } from "react"
import styled, {StyledFunction} from "styled-components"
import Menu from "./Menu"
import Infos from "./Infos"
import Signup from "./Signup"
import Ablauf from "./Ablauf"
import Location from "./Location"

const App = styled.div``

export default class Client extends React.Component{
	render(){
		return (<App>
			<Menu/>
			<Infos/>
			<Ablauf/>
			<Location/>
			<Signup/>
		</App>)
	}
}


