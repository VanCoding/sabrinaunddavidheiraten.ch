import React from "react"
import styled,{css} from "styled-components"

export const grey = "#eee"

export const Paragraph = styled.p`
&>img{
	width:100%;
}`
export const Title = ({name,children}:{name:string,children:React.ReactNode})=><h1 id={name}>{children}</h1>
export const SubTitle = styled.h2`
	font-size:16px;
	font-weight:bold;
	margin-bottom:0px;
`

const PageTag = styled.section`
	width:700px;
	margin:auto;
	background:${grey};
	padding:20px;
	box-sizing:border-box;
	margin-top:10px;
`
export const Page = ({title,name,children}:{title:string,name:string,children:React.ReactNode})=><PageTag>
	<Title name={name}>{title}</Title>
	{children}
</PageTag>

const buttonStyle = css`
	background-color: #a60000;
	padding:10px;
	border-radius:10px;
	border:none;
	color: white;
	font-family: font;
	cursor:pointer;
	float:right;

	&:hover{
		background-color: #c70202;
	}
`

export const Button = styled.button`
	${buttonStyle}
`
export const LinkButton = styled.a`
	${buttonStyle}
	text-decoration:none;
`

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

export function FormLine(props:{label:string,type:string,value: string|boolean, onChange:(value:string|boolean)=>void}){
	let {label,type,value,onChange} = props;
	return (
		<FormLineContainer>
			<label>{label}</label>
			<input
				type={type}
				value={type=="checkbox"?undefined:value as string}
				checked={type=="checkbox"?value as boolean:undefined}
				onChange={e=>{
					onChange(type=="checkbox"?e.target.checked:e.target.value)
				}}
			/>
		</FormLineContainer>
	)
}
export function StringFormLine(props:{label:string,type:string,value:string,onChange:(value:string)=>void}){
	return <FormLine {...props}/>
}

export function BoolFormLine(props:{label:string,type:string,value:boolean,onChange:(value:boolean)=>void}){
	return <FormLine {...props}/>
}

export const Alert = styled.div<{type:string}>`
	color:white;
	background: ${props=>props.type=="danger"?"#c94508":props.type=="warning"?"#dbac1d":"#9bb832"}
	padding:10px;
	border-radius:10px;
	margin-top:10px;
`
