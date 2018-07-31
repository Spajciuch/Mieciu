const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
var snekfetch = require('snekfetch')
	const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(681, 150)
const ctx = canvas.getContext('2d')
const bkg = await loadImage("./photos/scard.png");
ctx.drawImage(bkg, 0, 0, canvas.width, canvas.height);


  const { body: buffer } = await snekfetch.get(message.author.displayAvatarURL);
  const avt = await loadImage(buffer);
  ctx.drawImage(avt, 23, 45, 91, 88);
  ctx.fillStyle = 'white';
    ctx.strokeStyle = 'white'; //b4c0ee
    ctx.lineWidth = 3
    ctx.textBaseline = "top"
    ctx.font=`20px "Autour One"`
    var user = `${message.author.username}#${message.author.discriminator}`
    if(user.length > 10) ctx.font = `20px "Autour One"`
    //NICK
 	ctx.fillText(`${message.author.username}#${message.author.discriminator}`, 23,0)
    ctx.strokeText(`${message.author.username}#${message.author.discriminator}`, 23,0)
    //LEVEL
    ctx.font=`50px "Autour One"`
    ctx.fillText(`10 Poziom`, 211,50)
    ctx.strokeText(`10 Poziom`, 211,50)
   
    const attachment = new Discord.Attachment(canvas.toBuffer(), 'card.png');
  message.channel.send(attachment)
}
module.exports.help = {
	name: "test",
	category:"test"
}