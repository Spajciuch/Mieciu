const Discord = require("discord.js");
const config = require('../config.json')
const snekfetch = require('snekfetch')
module.exports.run = async (client, message, args) => {
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(700, 250)
const ctx = canvas.getContext('2d')
const { body: bg } = await snekfetch.get(message.author.avatarURL);
const { body: bkg } = await snekfetch.get("https://cdn.discordapp.com/attachments/415958930523553794/464715735973888000/bkg.png");

	/**/

loadImage(bkg).then((image) => {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  	ctx.font = `70px "DK Grumpy Tiger"`
	ctx.fillStyle="#ff009c";
	ctx.fillText(message.author.username, 500, 150)
})

	loadImage(bg).then((image)=> {
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
  name: "join"
}
/*ctx.drawImage(image, 10 ,20, canvas.width, canvas.height)

*/