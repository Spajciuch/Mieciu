const Discord = require("discord.js");
const config = require(`../config.json`)
const snekfetch = require('snekfetch')
module.exports.run = async (client, message, args) => {
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(681, 356)
const ctx = canvas.getContext('2d')
const bkg = await loadImage("./photos/menel.jpg");

	/**/

if(message.mentions.members.first()) {
  	ctx.drawImage(bkg, 0, 0, canvas.width, canvas.height);
	ctx.beginPath();
  	ctx.arc(150, 168, 93, 0, Math.PI * 2, false);
  	ctx.closePath();
  	ctx.clip();

  const { body: buffer } = await snekfetch.get(message.mentions.members.first().user.displayAvatarURL);
  const avt = await loadImage(buffer);
  ctx.drawImage(avt, 52, 70, 194, 194);
    const attachment = new Discord.Attachment(canvas.toBuffer(), 'meme.png');
  message.channel.send(attachment);
} else {
	ctx.drawImage(bkg, 0, 0, canvas.width, canvas.height);
	ctx.beginPath();
  	ctx.arc(150, 168, 150, 0, Math.PI * 2, false);
  	ctx.closePath();
  	ctx.clip();

  const { body: buffer } = await snekfetch.get(message.author.displayAvatarURL);
  const avt = await loadImage(buffer);
  ctx.drawImage(avt, 52, 70, 194, 194);
    const attachment = new Discord.Attachment(canvas.toBuffer(), 'meme.png');
  message.channel.send(attachment)
}

}
module.exports.help = {
	name: "drunkard",
	category:"photo"
}