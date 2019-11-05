import React, { Children } from "react"
import styled, {StyledFunction} from "styled-components"
import Menu from "./Menu"
import Signup from "./Signup"
import {Page,Paragraph,SubTitle} from "./components"

const App = styled.div``

export default class Client extends React.Component{
	render(){
		return (<App>
			<Menu/>
			<Page title="Wichtige Infos" name="infos">
				<Paragraph>
					<SubTitle>Dresscode</SubTitle>
					Festliche Kleidung ist erwünscht. Wir bitten euch, bei der Wahl der Kleider, auf die Farben Weiss und Rot zu verzichten.
				</Paragraph>
				<Paragraph>
					<SubTitle>Musik</SubTitle>
					Um all euren Musikgeschmäcker gerecht zu
					werden, würden wir uns sehr freuen, wenn
					jeder von euch ein bis zwei Wunsch-Lieder
					auf unserer Homepage aussucht.
				</Paragraph>
				<Paragraph>
					<SubTitle>Geschenke</SubTitle>
					Wir besitzen bereits einen kompletten
					Haushalt und haben keine materiellen
					Wünsche. Wer uns etwas schenken möchte,
					darf uns gerne einen Zustupf für unsere
					Hochzeitsreise überreichen.
				</Paragraph>
				<Paragraph>
					<SubTitle>Beiträge zum Fest</SubTitle>
					Wenn ihr einen kleinen Beitrag zum Fest
					machen wollt oder noch Fragen habt, dürft
					ihr euch gerne bei unserem Tätschmeister
					melden.
				</Paragraph>
				<Paragraph>
					<SubTitle>Kinder</SubTitle>
					Kinder sind bis zum Abendprogramm
					herzlich willkommen. Danach bitten wir
					euch, jemand zu organisieren, der eure
					Kinder hütet.
				</Paragraph>
				<Paragraph>
					<SubTitle>Tätschmeister</SubTitle>
					Marco Rast, 079 409 52 30
				</Paragraph>
			</Page>
			<Page title="Location" name="location">
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
					Weitere Informationen zur Location erfährt
					ihr entweder auf der Hompage vom Hotel
					Swiss-Chalet Lodge oder auf unserer eigenen
					Homepage.
				</Paragraph>
			</Page>
			<Signup/>
		</App>)
	}
}


