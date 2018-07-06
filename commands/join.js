const Discord = require("discord.js");
const config = require('../config.json')
const snekfetch = require('snekfetch')
module.exports.run = async (client, message, args) => {
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(700, 250)
const ctx = canvas.getContext('2d')
const { body: avatar } = await snekfetch.get(message.author.avatarURL);
const { body: bkg } = await snekfetch.get("https://cdn.discordapp.com/attachments/460167148883410964/464822278522404865/1df83606c3037c2cb1568f02594b9512.png");

	/**/

loadImage(bkg).then((image) => {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  	ctx.font = `70px "DK Grumpy Tiger"`
	ctx.fillStyle="#ff009c";
	ctx.textAlign="center";
	ctx.fillText(message.author.username, 500, 150)
})

	loadImage(avatar).then((image)=> {
		ctx.beginPath();
	ctx.arc(50, (canvas.height-150)/2, 150, 150, 1 * Math.PI);
	ctx.closePath();
	ctx.clip();
	ctx.drawImage(image, 50,(canvas.height-150)/2, 150, 150);


	const attachment = new Discord.Attachment(canvas.toBuffer(), 'meme.png');
	message.channel.send(attachment);
})

}
module.exports.help = {
  name: "join",
  category:"info"
}
/*ctx.drawImage(image, 10 ,20, canvas.width, canvas.height)

*/