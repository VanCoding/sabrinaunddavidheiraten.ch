import React from "react"
import {Page, Paragraph} from "./components"
import Map,{Maps} from "google-map-react"

let location = {lat:47.0808781,lng:8.3796056}

let Marker = (props:{lat:number,lng:number,text:string})=><div>{props.text}</div>

function getMapOptions(maps: Maps){
	return {
		mapTypeId: maps.MapTypeId.SATELLITE,
	}
}

function handleApiLoaded(map: any, maps: Maps){

}

export default (props:{googleKey: string})=>(
	<Page title="Kapelle" name="kapelle">
		<Paragraph>
			<img src="/public/kapelle.jpg"/>
		</Paragraph>
		<Paragraph>
			Kapelle St. Jost im Dottenberg, Adligenswil
		</Paragraph>
		<Paragraph>
			<div style={{height:"400px",width:"100%"}}>
				<Map
					options={getMapOptions}
					bootstrapURLKeys={{key:props.googleKey}}
					defaultCenter={location}
					defaultZoom={18}
					yesIWantToUseGoogleMapApiInternals
					onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
				>
					
					<Marker 
						lat={location.lat}
						lng={location.lng}
						text=""
					/>
				</Map>
			</div>
		</Paragraph>
		<Paragraph>
			Bereits unsere beiden Elternpaare haben sich hier das Ja-Wort gegeben. Aus diesem emotionalen
			Grund möchten auch wir in dieser kleinen, aber wunderschönen Kapelle die Ringe tauschen. Der Ort
			bietet dazu einen grossartigen Ausblick auf die Rigi, wo wir beschlossen haben zu heiraten.
		</Paragraph>
	</Page>
)
