import React from "react"
import {Page, Paragraph,LinkButton} from "./components"
import Map from "./Map"


export default (props:{googleKey: string})=>(
	<Page title="Kapelle" name="kapelle">
		<Paragraph>
			<img src="/public/kapelle.jpg"/>
		</Paragraph>
		<Paragraph>
			Kapelle St. Jost im Dottenberg, Adligenswil
		</Paragraph>
		<Paragraph>
			<Map lat={47.0808781} lng={8.3796056} googleKey={props.googleKey} height="400px" />
			<br/>
			<LinkButton href="https://www.google.ch/maps/dir//Kapelle+St.+Jost,+Dottenbergstrasse+2,+6043+Adligenswil/@47.0801322,8.3728085,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x478ffebf02397115:0xa32837d4d816a5fc!2m2!1d8.3796927!2d47.0808734!3e0">Navigieren</LinkButton>
			<div style={{clear:"both"}}/>
		</Paragraph>
		<Paragraph>
			Bereits unsere beiden Elternpaare haben sich hier das Ja-Wort gegeben. Aus diesem emotionalen
			Grund möchten auch wir in dieser kleinen, aber wunderschönen Kapelle die Ringe tauschen. Der Ort
			bietet dazu einen grossartigen Ausblick auf die Rigi, wo wir beschlossen haben zu heiraten.
		</Paragraph>
	</Page>
)
