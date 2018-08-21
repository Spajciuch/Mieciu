const Discord = require("discord.js");
const config = require(`../config.json`)
const superagent = require('superagent')
const moment = require('moment')
const snekfetch = require('snekfetch')
module.exports.run = async (client, message, args) => {
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(400, 313)
const ctx = canvas.getContext('2d')
  if(message.mentions.members.first()) {
const { body: buffer } = await snekfetch.get(message.mentions.members.first().user.displayAvatarURL);
const avt = await loadImage(buffer);
const { body: bg } = await snekfetch.get(`http://www.tombstonebuilder.com/generate.php?top1=RIP&top2=${message.mentions.members.first().user.username}&top3=${moment.utc(message.mentions.members.first().user.createdAt).format('DD.MM.YYYY')}-${moment.utc(new Date()).format('DD.MM.YYYY')}&sp=1`);
const background = await loadImage(bg);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	// ctx.beginPath();
 //  	ctx.arc(150, 168, 93, 0, Math.PI * 2, false);
 //  	ctx.closePath();
 //  	ctx.clip();
	ctx.drawImage(avt, 275, 70, 50, 50);
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'meme.png');
  	message.channel.send(attachment);
  } else {
    const { body: buffer } = await snekfetch.get(message.author.displayAvatarURL);
const avt = await loadImage(buffer);
const { body: bg } = await snekfetch.get(`http://www.tombstonebuilder.com/generate.php?top1=RIP&top2=${message.author.username}&top3=${moment.utc(message.author.createdAt).format('DD.MM.YYYY')}-${moment.utc(new Date()).format('DD.MM.YYYY')}&sp=1`);
const background = await loadImage(bg);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  // ctx.beginPath();
 //   ctx.arc(150, 168, 93, 0, Math.PI * 2, false);
 //   ctx.closePath();
 //   ctx.clip();
  ctx.drawImage(avt, 275, 70, 50, 50);
  const attachment = new Discord.Attachment(canvas.toBuffer(), 'meme.png');
    message.channel.send(attachment);
  }
}
module.exports.help = {
  name: "rip",
  category:"photo",
  description:"Wysyła nagrobek",
  use:"<prefix>rip <osoba>"
}
