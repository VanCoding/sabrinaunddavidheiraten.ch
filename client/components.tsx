import React from "react"
import styled from "styled-components"

export const Paragraph = styled.p``
export const Title = ({name,children}:{name:string,children:React.ReactNode})=><h1 id={name}>{children}</h1>
export const SubTitle = styled.h2`
	font-size:16px;
	font-weight:bold;
	margin-bottom:0px;
`

const PageTag = styled.section`
	width:700px;
	margin:auto;
	background:#ccc;
	padding:20px;
	box-sizing:border-box;
	margin-top:10px;
`
export const Page = ({title,name,children}:{title:string,name:string,children:React.ReactNode})=><PageTag>
	<Title name={name}>{title}</Title>
	{children}
</PageTag>
