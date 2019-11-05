import {Context} from "koa"
import {json} from "co-body"
import nodemailer from "nodemailer"
import directTransport from "nodemailer-direct-transport"

let transport = nodemailer.createTransport(directTransport({
	name: "sabrinaunddavidheiraten.ch"
}))

export default async (ctx: Context)=>{
	let {firstname,lastname,fest,allergien,vegetarier,zimmer} = await json(ctx)

	await transport.sendMail({
		from: "webseite@sabrinaunddavidheiraten.ch",
		to: "david.mieschbuehler@gmail.com",
		subject: "Hochzeitsanmeldung",
		text: 
`Die folgende Person hat sich soeben für die Hochzeit angemeldet:

Vorname: ${firstname}
Nachname: ${lastname}

Nimmt am Fest teil: ${fest?"Ja":"Nein"}
Allergien: ${allergien}
Vegetarier: ${vegetarier?"Ja":"Nein"}
Zimmer buchen: ${zimmer?"Ja":"Nein"}`
	})

	ctx.status = 200;
}
