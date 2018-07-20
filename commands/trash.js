const Discord = require("discord.js");
const config = require(`../config.json`)
const snekfetch = require('snekfetch')
module.exports.run = async (client, message, args) => {
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(680, 659)
const ctx = canvas.getContext('2d')
const bkg = await loadImage("./photos/trash.jpg");
	ctx.drawImage(bkg, 0, 0, canvas.width, canvas.height);
	ctx.filter = 'blur(450px)'
	if(message.mentions.members.first()) {
			const { body: buffer } = await snekfetch.get(message.mentions.members.first().user.displayAvatarURL);
  	const avt = await loadImage(buffer);
  	ctx.drawImage(avt, 340, 0, 380, 350);
    const attachment = new Discord.Attachment(canvas.toBuffer(), 'meme.png');
  	message.channel.send(attachment);
  }else{
  		const { body: buffer } = await snekfetch.get(message.author.displayAvatarURL);
  	const avt = await loadImage(buffer);
  	ctx.drawImage(avt, 340, 0, 380, 350);
    const attachment = new Discord.Attachment(canvas.toBuffer(), 'meme.png');
  	message.channel.send(attachment);
  	
  }
}
module.exports.help = {
	name: "trash",
	category:"photo"
}