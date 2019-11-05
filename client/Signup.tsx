import React,{createRef,Ref} from "react"
import styled from "styled-components"
import {Page,Paragraph} from "./components"

const FormLineContainer = styled.div`
	display:flex;
	margin-bottom:20px;
	&>label{
		width:300px;
	}
	&>input[type="text"]{
		background:grey;
		color:white;
		border-radius: 0px;
		padding:5px;
		border: none;
		flex: 1;
	}
`

class FormLine extends React.Component<{label:string,type:string,}>{
	public input = createRef<HTMLInputElement>()
	render(){
		let {label,type} = this.props;
		return <FormLineContainer>
			<label>{label}</label>
			<input type={type} ref={this.input}/>
		</FormLineContainer>
	}
}



export default class Signup extends React.Component<{},{status: string}>{
	private firstname = createRef<FormLine>()
	private lastname = createRef<FormLine>()
	private fest = createRef<FormLine>()
	private allergien = createRef<FormLine>()
	private vegetarier = createRef<FormLine>()
	private zimmer = createRef<FormLine>()

	constructor(props:{}){
		super(props)
		this.state = {status:"start"}
	}

	render(){
		return <Page title="Anmeldung" name="anmeldung">

			{this.state.status == "start" && (<>
				<Paragraph>
					Damit wir die Übersicht behalten können, bitten wir euch, bis zum 06.01.20 diese Anmeldung an uns zurück zu senden.
				</Paragraph>
				<FormLine label="Vorname" ref={this.firstname} type="text"/>
				<FormLine label="Nachname" ref={this.lastname} type="text"/>
				<FormLine label="Ich nehme am Fest teil" ref={this.fest} type="checkbox"/>
				<FormLine label="Allergien" ref={this.allergien} type="text"/>
				<FormLine label="Vegetarier" ref={this.vegetarier} type="checkbox"/>
				<FormLine label="Ich buche mir ein Zimmer" ref={this.zimmer} type="checkbox"/>
				<button style={{float:"right"}} onClick={this.submit.bind(this)}>Absenden</button>
				<div style={{clear:"both"}}></div>
			</>)}
			{this.state.status == "sending" && <Paragraph><div style={{color:"orange",textAlign:"center"}}>Wird gesendet...</div></Paragraph>}
			{this.state.status == "sent" && <Paragraph><span style={{color:"green"}}>Vielen Dank für deine Anmeldung!</span></Paragraph>}
			{this.state.status == "error" && <Paragraph><span style={{color:"red"}}>Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.</span></Paragraph>}

		</Page>
	}
	async submit(){
		this.setState({status:"sending"})
		let body = JSON.stringify({
			firstname: this.firstname.current.input.current.value,
			lastname: this.lastname.current.input.current.value,
			fest: this.fest.current.input.current.checked,
			allergien: this.allergien.current.input.current.value,
			vegetarier: this.vegetarier.current.input.current.checked,
			zimmer: this.zimmer.current.input.current.checked
		})

		try{
			await fetch("/api/signup",{
				method:"POST",
				body
			})
			this.setState({status:"sent"})
		}catch(e){
			this.setState({status:"error"})
		}
		
	}
}
