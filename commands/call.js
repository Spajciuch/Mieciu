const Discord = require("discord.js");
const config = require(`../config.json`)
const superagent = require('superagent')
const snekfetch = require('snekfetch')
module.exports.run = async (client, message, args) => {
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(500, 336)
const ctx = canvas.getContext('2d')
const bkg = await loadImage("./photos/call.jpg");
ctx.drawImage(bkg, 0, 0, canvas.width, canvas.height);
ctx.font = "20px Arial"
if(args.join(" ").length > 45) return message.reply("Za długi tekst (do 45 znaków)")
ctx.fillText(args.join(" "),1,20)
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'meme.png');
 	message.channel.send(attachment);
}
module.exports.help = {
  name: "call",
  category:"photo"
}