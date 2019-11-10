import React from "react"
import styled from "styled-components"
import {Page, Paragraph} from "./components"

let EntryContainer = styled.div`
	display: flex;
	height: 60px;
	line-height: 60px;
`
let EntryTime = styled.div`
`
let EntryIcon = styled.div`
	width: 100px;
	height: 100%;
	background-position:center;
	background-repeat: no-repeat;
	background-size: 40%;
`
let EntryText = styled.div``
let Entry = ({time,icon,text}:{time:string,icon:string,text:string})=><EntryContainer>
	<EntryTime>{time}</EntryTime>
	<EntryIcon style={{backgroundImage:"url(/public/"+icon+")"}}></EntryIcon>
	<EntryText>{text}</EntryText>
</EntryContainer>

export default ()=><Page title="Ablauf" name="ablauf">
	<Entry time="12:15" icon="swisschalet.svg" text="Treffpunkt Swiss-Chalet in Merlischachen"/>
	<Entry time="12:45" icon="bus.svg" text="Gemeinsame Reise zur Kapelle St. Jost"/>
	<Entry time="13:30" icon="chapel.svg" text="Hochzeitszeremonie"/>
	<Entry time="14:30" icon="sandwich.svg" text="Apèro bei der Kapelle St. Jost"/>
	<Entry time="17:00" icon="bus2.svg" text="Gemeinsame Reise nach Merlischachen"/>
	<Entry time="17:30" icon="glasses.svg" text="Get together"/>
	<Entry time="18:30" icon="cake.svg" text="Abendunterhaltung"/>
	<Entry time="00:00" icon="beer.svg" text="Barbetrieb in der Chalet-Bar"/>
	<Entry time="04:00" icon="bed.svg" text="Nachtruhe"/>
</Page>
