import React from "react"
import {Page, Paragraph,LinkButton} from "./components"
import Map,{Maps} from "google-map-react"

let Marker = (props:{lat:number,lng:number,text:string})=><div>{props.text}</div>

function getMapOptions(maps: Maps){
	return {
		mapTypeId: maps.MapTypeId.SATELLITE,
	}
}

export default (props:{height:String,lat:number,lng:number,googleKey:string})=>(
	<div style={{height:"400px",width:"100%"}}>
		<Map
			options={getMapOptions}
			bootstrapURLKeys={{key:props.googleKey}}
			defaultCenter={{lat:props.lat,lng:props.lng}}
			defaultZoom={18}
			yesIWantToUseGoogleMapApiInternals
		>
			
			<Marker 
				lat={props.lat}
				lng={props.lng}
				text=""
			/>
		</Map>
	</div>
)
