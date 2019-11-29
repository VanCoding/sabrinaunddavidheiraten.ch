import React from "react"
import styled from "styled-components"
import Tile, {SideType} from "./Tile"
import {grey} from "./components"

const Menu = styled.div`
	margin-top: 10px;
	margin: auto;
	background-color:${grey};
	background-image: url(public/logo.svg);
	background-position:center;
	background-size:contain;
	background-repeat:no-repeat;
`
const TileLine = styled.div`
	height: 100px;
`

function TileGrid({width,height,tileWidth,children}:{width:number,height:number,tileWidth:number,children:TileGridEntry[]}){
	var childrenByXy = children.reduce((index,child)=>{
		index.set(child.x+"/"+child.y,child);
		return index;
	},new Map<string,TileGridEntry>())

	return <Menu style={{width:width*tileWidth}}>
		{new Array(height).fill(1).map((yVal,y)=>
			<TileLine>
				{new Array(width).fill(1).map((xVal,x)=>{
					let yType = (y%2||x%2) && (y%2!=x%2)?SideType.Female:SideType.Male
					let xType = yType==SideType.Male?SideType.Female:SideType.Male;
					let child = childrenByXy.get(x+"/"+y)||undefined
					return <Tile
						top= {y===0?SideType.Straight:yType}
						left = {x===0?SideType.Straight:xType}
						bottom= {y==height-1?SideType.Straight:yType}
						right = {x==width-1?SideType.Straight:xType}
						width = {tileWidth}
						link = {child&&child.link}
						translateX = {child&&child.translateX}
						translateY = {child&&child.translateY}
					>{child&&child.text}</Tile>
				})}
			</TileLine>
		)}
	</Menu>
}

interface TileGridEntry{
	x:number,
	y:number,
	text: string,
	link: string,
	translateY?: number,
	translateX?: number
}

export default ()=><TileGrid width={7} height={5} tileWidth={100}>{[
	{x:0,y:1,text:"Location",link:"location"},
	{x:0,y:3,text:"Musik",link:"musik"},
	{x:1,y:0,text:"Wichtige Infos",link:"infos",translateY:20},
	{x:1,y:2,text:"Fotos",link:"photos"},
	{x:5,y:0,text:"Anmeldung",link:"anmeldung"},
	{x:6,y:1,text:"Kapelle",link:"kapelle"},
	{x:5,y:2,text:"Ablauf",link:"ablauf"},
	{x:6,y:3,text:"Tätschmeister",link:"infos",translateX:-10},
]}</TileGrid>
