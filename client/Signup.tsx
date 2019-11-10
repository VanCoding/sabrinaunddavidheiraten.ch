import React,{createRef,Ref,useState} from "react"
import styled from "styled-components"
import {Page,Paragraph,StringFormLine,BoolFormLine,Alert,Button} from "./components"
import useBindState from "./useBindState"

export default function signup(){
	let firstname = useBindState("")
	let lastname = useBindState("")
	let fest = useBindState(false)
	let allergien = useBindState("")
	let vegetarier = useBindState(false)
	let zimmer = useBindState(false)
	let [status,setStatus] = useState("start")

	let submit = async()=>{
		setStatus("sending")
		let body = JSON.stringify({
			firstname: firstname.value,
			lastname: lastname.value,
			fest: fest.value,
			allergien: allergien.value,
			vegetarier: vegetarier.value,
			zimmer: zimmer.value
		})
	
		try{
			await fetch("/api/signup",{
				method:"POST",
				body
			})
			setStatus("sent")
		}catch(e){
			setStatus("error")
		}
	}

	return <Page title="Anmeldung" name="anmeldung">
		{status == "start" && (<>
			<Paragraph>
				Damit wir die Übersicht behalten können, bitten wir euch, bis zum 06.01.20 diese Anmeldung an uns zurück zu senden.
			</Paragraph>
			<StringFormLine label="Vorname" type="text" {...firstname}/>
			<StringFormLine label="Nachname" type="text" {...lastname}/>
			<BoolFormLine label="Ich nehme am Fest teil" type="checkbox" {...fest} />
			<StringFormLine label="Allergien" type="text" {...allergien}/>
			<BoolFormLine label="Vegetarier" type="checkbox" {...vegetarier}/>
			<BoolFormLine label="Ich buche mir ein Zimmer" type="checkbox" {...zimmer}/>
			<Button onClick={submit.bind(this)}>Absenden</Button>
			<div style={{clear:"both"}}></div>
		</>)}
		{status == "sending" && <Alert type="warning">Wird gesendet...</Alert>}
		{status == "sent" && <Alert type="success">Vielen Dank für deine Anmeldung!</Alert>}
		{status == "error" && <Alert type="danger">Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.</Alert>}

	</Page>
}
