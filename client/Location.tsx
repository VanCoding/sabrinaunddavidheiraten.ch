import React from "react"
import {Page,Paragraph,LinkButton} from "./components"
import Map from "./Map"

export default (props:{googleKey:string})=><Page title="Location" name="location">
	<Paragraph>
		Wir feiern im Swiss-Chalet in Merlischachen.
	</Paragraph>
	<Paragraph>
		<b>Swiss-Chalet Lodge<br/>
		Luzernerstrasse 204<br/>
		6402 Merlischachen</b>
	</Paragraph>
	<Paragraph>
		Vor Ort sind genügend Parkplätze
		vorhanden, um mit dem Auto anzureisen.
		Nach der Feier besteht die Möglichkeit, auf
		eigene Kosten im Swiss-Chalet selbst oder im
		zugehörigen Schlosshotel zu übernachten.
		Um ein Hotelzimmer zu reservieren,
		empfehlen wir, dass ihr euch direkt beim
		Swiss-Chalet meldet. Dabei erwähnt bitte,
		dass ihr zu unserer Hochzeitsgesellschaft
		gehört.
	</Paragraph>
	<Paragraph>
		<img src="/public/swisschalet.jpg"/>
	</Paragraph>
	<Paragraph>
		<br/>
		<LinkButton href="https://www.google.com/maps/dir//Swiss-Chalet+Lodge,+Luzernerstrasse+204,+6402+Merlischachen/@47.0657465,8.407174,18z/data=!4m9!4m8!1m0!1m5!1m1!1s0x478fff2c77758729:0x98d5e2c97ced4334!2m2!1d8.4077587!2d47.0656789!3e0">Navigieren</LinkButton>
		<div style={{clear:"both"}}/>
	</Paragraph>
</Page>
