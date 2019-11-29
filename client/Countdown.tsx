import React from "react"
import styled from "styled-components"
import useInterval from "use-interval"
import {normalize,toDays} from "duration-fns"
import {format} from "date-fns"

const CountdownContainer = styled.div`
	color:white;
	display:flex;
	flex-direction:horizontal;
	justify-content: space-between;
	width:40%;
`
const CountdownElementContainer = styled.div`
	text-align:center;
`
const CountdownSectionValue = styled.div`
	font-size: 30px;
`
const CountdownSectionLabel = styled.div`
	font-size: 10px;
`

const formatNumber = (value: number)=>(value<10?"0":"")+value

const CountdownElement = (props: {value: number, label: string})=>(
	<CountdownElementContainer>
		<CountdownSectionValue>{formatNumber(props.value)}</CountdownSectionValue>
		<CountdownSectionLabel>{props.label}</CountdownSectionLabel>
	</CountdownElementContainer>
)

export const Countdown = (props: {target: number})=>{
	const [start,setStart] = React.useState(new Date().getTime())
	const difference = props.target-start;
	const duration = normalize({milliseconds:difference})

	useInterval(()=>setStart(new Date().getTime()),1000)

	return(
		<CountdownContainer>
			<CountdownElement label="Tage" value={Math.floor(toDays(difference))}/>
			<CountdownElement label="Stunden" value={duration.hours}/>
			<CountdownElement label="Minuten" value={duration.minutes}/>
			<CountdownElement label="Sekunden" value={duration.seconds}/>
		</CountdownContainer>
	)
}

const TargetDateContainer = styled.div`
	color:white;
	font-size: 40px;
	text-align: center;
`

export const TargetDate = (props: {target: number})=>(
	<TargetDateContainer>{format(props.target,"dd.MM.yyyy")}</TargetDateContainer>
)

