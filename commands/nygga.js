const Discord = require("discord.js");
const config = require(`../config.json`)
const snekfetch = require('snekfetch')
module.exports.run = async (client, message, args) => {
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(500, 492)
const ctx = canvas.getContext('2d')
const bkg = await loadImage("./photos/nygga.jpg");
if(message.mentions.members.first()) {
	ctx.drawImage(bkg, 0, 0, canvas.width, canvas.height);
	ctx.beginPath();
  	ctx.arc(220, 138, 40, 0, Math.PI * 2, false);
  	ctx.closePath();
  	ctx.clip();
 const { body: buffer } = await snekfetch.get(message.mentions.members.first().user.displayAvatarURL);
 const avt = await loadImage(buffer);
 ctx.drawImage(avt, 180, 100, 80, 80);
 const attachment = new Discord.Attachment(canvas.toBuffer(), 'meme.png');
  message.channel.send(attachment)
} else {
		ctx.drawImage(bkg, 0, 0, canvas.width, canvas.height);
	ctx.beginPath();
  	ctx.arc(220, 138, 40, 0, Math.PI * 2, false);
  	ctx.closePath();
  	ctx.clip();
 const { body: buffer } = await snekfetch.get(message.author.displayAvatarURL);
 const avt = await loadImage(buffer);
 ctx.drawImage(avt, 180, 100, 80, 80);
 const attachment = new Discord.Attachment(canvas.toBuffer(), 'meme.png');
  message.channel.send(attachment)
}
}
module.exports.help = {
	name: "nygga",
	category:"photo"
}