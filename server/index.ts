import Koa from "koa"
import Static from "koa-static"
import mount from "koa-mount"
import * as fs from "fs"
import path from "path"
import Router from "koa-router"
import signup from "./signup"
import { sign } from "crypto"

class Configuration{
	c = JSON.parse(fs.readFileSync("./config.json")+"") as {
		port?: Number
	}
	get port(){
		return this.c.port || 80
	}
}

let config = new Configuration()

let app = new Koa()
app.use(mount("/public",Static(path.resolve(__dirname,"./public"))))
let router = new Router()
	.post("/api/signup",signup)
	.get("/",async ctx=>{
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
			<script src="/public/client.js"></script>
		</body>
	</html>
	`
	})

app.use(router.middleware())
app.listen(config.port)

console.log("listening on port",config.port)
