import React from "react"
import styled from "styled-components"
import { number } from "prop-types"

interface Point{
	x: Number,
	y: Number
}

enum Side {
	Top = 0,
	Right = 90,
	Bottom = 180,
	Left = 270
}

export enum SideType {
	Male,
	Female,
	Straight
}
let plugCommands = [
	{
		command:"c",
		points:[
			{x:0,y:0},
			{x:16.483,y:5.083},
			{x:21.566,y:0},
		]
	},
	{
		command:"c",
		points:[
			{x:4.448,y:-4.449},
			{x:-4.447,y:-14.423},
			{x:0,y:-18.871}
		]
	},
	{
		command:"c",
		points:[
			{x:4.449,y:-4.448},
			{x:14.424,y:-4.448},
			{x:18.871,y:0}
		]
	},
	{
		command:"c",
		points:[
			{x:4.449,y:4.447},
			{x:-4.447,y:14.423},
			{x:0,y:18.871}
		]
	},
	{
		command:"c",
		points:[
			{x:5.083,y:5.083},
			{x:21.567,y:0},
			{x:21.567,y:0}
		]
	}
]

let newPlugCommands = [
	{
		command:"c",
		points:[
			{x:5.9105192,y:-0.15927},
			{x:13.577315,y:-2.05463},
			{x:12.120133,y:0.0334}
		]
	},
	{
		command:"c",
		points:[
			{x:-1.650296,y:3.10407},
			{x:1.53142,y:3.09666},
			{x:1.716937,y:3.10013}
		]
	},
	{
		command:"c",
		points:[
			{x:0.1897,y:-0.003},
			{x:3.22129,y:-0.0428},
			{x:1.804069,y:-2.9999}
		]
	},
	{
		command:"c",
		points:[
			{x:0.805185,y:-1.54326},
			{x:2.208872,y:-0.7508},
			{x:10.817194,y:-0.13362}
		]
	}
]

let straightCommands = [
	{
		command:"l",
		points:[
			{x:62.004,y:0}
		]
	}
]

function buildSidePath(side: Side, type: SideType, width: number){
	let commands;
	switch(type){
		case SideType.Straight:
			commands = straightCommands;
			break;
		case SideType.Male:
			commands = plugCommands;
			break;
		case SideType.Female:
			commands = plugCommands.slice().map(c=>({...c,points:c.points.map(p=>({x:p.x,y:-p.y}))}))
			break;
	}
	return commands
	.map(command=>{
		let x = Math.cos(side*Math.PI/180)
		let y = Math.sin(side*Math.PI/180)
		return command.command+command.points
			.map(p=>({x:p.x/62.004*width,y:p.y/62.004*width}))
			.map(p=>`${x*p.x-y*p.y},${x*p.y+y*p.x}`)
			.join(" ")
	}).join("")
}

let TilePath = styled.path`
	fill:transparent;
	&.clickable:hover{
		fill:rgba(200,200,200,0.5);
		cursor:pointer;
	}
`

interface TileProps{
	width:number,
	top:SideType,
	right:SideType,
	bottom:SideType,
	left:SideType,
	link?: string,
	translateX?: number,
	translateY?: number
}

let TileContainer = styled.div`
	display:inline-block;
	position:relative;
`
let TileTextContainer = styled.div`
	position:absolute;
	top:0px;
	left:0px;
	bottom:0px;
	right:0px;
	display:flex;
	pointer-events:none;
`
let TileText = styled.div<{translateX?:number,translateY?:number}>`
	margin:auto;
	color:black;
	text-align:center;
	font-size:13px;
	font-style:italic;
	margin-top: ${p=>p.translateY?p.translateY+"px":'auto'};
	margin-left: ${p=>p.translateX?p.translateX+"px":"auto"};
`

export default class Tile extends React.Component<TileProps>{
	constructor(props: TileProps){
		super(props)
	}
	render(){
		let {width,top,right,bottom,left,link,children} = this.props;
		return <TileContainer style={{width:width+"px",height:width+"px" }}>
			<svg width={width} height={width} viewBox={`0 0 ${width} ${width}`} overflow="visible">
				<TilePath
					className={link?"clickable":""}
					stroke="grey"
					stroke-width="2"
					d={
						"M0,0"+
						buildSidePath(Side.Top,top, width)+
						buildSidePath(Side.Right,right,width)+
						buildSidePath(Side.Bottom,bottom,width)+
						buildSidePath(Side.Left,left,width)+"Z"
					}
					onClick={link?()=>location.href="#"+link:undefined}
				/>
			</svg>
			{children&&<TileTextContainer>
				<TileText translateY={this.props.translateY} translateX={this.props.translateX}>{children}</TileText>
			</TileTextContainer>}
		</TileContainer>
	}
}

