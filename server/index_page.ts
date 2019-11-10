import {Context} from "koa"
export default (playlistId: string)=>async (ctx:Context)=>{
	ctx.body = 
`<!doctype html>
<html>
	<head>
		<title>Sabrina und David heiraten</title>
		<meta name="viewport" content="width=700, initial-scale=1, maximum-scale=1">
		<style>
			@font-face {
				font-family: "font";
				src: url("/public/font.woff") format('woff');
			}
			body,html{
				margin:0px;
				padding:0px;
				background:grey;
				font-family:font;
			}
		</style>
	</head>
	<body>
		<div id="container"></div>
		<script>
			window.config = ${JSON.stringify({playlistId:playlistId})}
		</script>
		<script src="/public/client.js"></script>
	</body>
</html>
`
}
