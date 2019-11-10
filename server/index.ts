import Koa from "koa"
import Static from "koa-static"
import mount from "koa-mount"
import * as fs from "fs"
import path from "path"
import Router from "koa-router"
import makeIndexPage from "./index_page"
import makeSignup from "./signup"
import makeFindSongs from "./find_songs"
import makeAddSong from "./add_song"

class Configuration{
	private c = JSON.parse(fs.readFileSync("./config.json")+"") as {
		port?: number,
		email: string,
		youtubeKey: string,
		playlistId: string,
		client_id: string,
		client_secret: string,
		refresh_token: string
	}
	get port(){
		return this.c.port || 80
	}
	get email(){
		return this.c.email
	}
	get youtubeKey() {
		return this.c.youtubeKey
	}
	get playlistId(){
		return this.c.playlistId
	}
	get client_id(){
		return this.c.client_id;
	}
	get client_secret(){
		return this.c.client_secret;
	}
	get refresh_token(){
		return this.c.refresh_token;
	}
}

let config = new Configuration()

let app = new Koa()
app.use(mount("/public",Static(path.resolve(__dirname,"./public"))))
let router = new Router()
	.get("/",makeIndexPage(config.youtubeKey,config.playlistId))
	.post("/api/signup",makeSignup(config.email))
	.get("/api/songs",makeFindSongs(config.youtubeKey))
	.post("/api/songs",makeAddSong({
		playlistId: config.playlistId,
		client_id: config.client_id,
		client_secret: config.client_secret,
		refresh_token: config.refresh_token
	}))

app.use(router.middleware())
app.listen(config.port)

console.log("listening on port",config.port)
