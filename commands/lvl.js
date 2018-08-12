const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
var snekfetch = require('snekfetch')
	const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(1024, 284)
const ctx = canvas.getContext('2d')
const bkg = await loadImage("./photos/scard.png");
ctx.drawImage(bkg, 0, 0, canvas.width, canvas.height);


  const { body: buffer } = await snekfetch.get(message.author.displayAvatarURL);
  const avt = await loadImage(buffer);
  ctx.drawImage(avt, 72, 58, 132, 132);
  ctx.fillStyle = 'white';
    ctx.textBaseline = "top"
    ctx.font=`40px "Autour One"`
    var user = `${message.author.username}#${message.author.discriminator}`
    //NICK
 	ctx.fillText(`${message.author.username}#${message.author.discriminator}`, 228,38)
    //LEVEL 
    ctx.fillStyle = '#7289da';
    ctx.font=`100px "Autour One"`
    ctx.fillText(`10`, 840,100)

   
    const attachment = new Discord.Attachment(canvas.toBuffer(), 'card.png');
  message.channel.send(attachment)
}
module.exports.help = {
	name: "test",
	category:"test"
}