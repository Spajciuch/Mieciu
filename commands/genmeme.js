const Discord = require("discord.js");
const config = require(`../config.json`)
const snekfetch = require('snekfetch')
module.exports.run = async (client, message, args) => {
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(500, 500)
const ctx = canvas.getContext('2d')
	if(message.mentions.members.first()) {
const { body: bg } = await snekfetch.get(message.mentions.members.first().user.avatarURL);
function applyText(canvas, text) {
        const ctx = canvas.getContext('2d');
      
        // Declare a base size of the font
        let fontSize = 900;
      
        do {
            // Assign the font to the context and decrement it so it can be measured again
            ctx.font = `${fontSize -= 10}px Impact`;
            // Compare pixel width of the text to the canvas minus the approximate avatar size
        } while(ctx.measureText(text).width > canvas.width - 10 || ctx.measureText("█").width * 2 > canvas.height / 4)
      
        // Return the result to use in the actual canvas
        return ctx.font;
      };
loadImage(bg).then((image) => {

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
	ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
	ctx.textAlign = 'center';
	ctx.lineWidth = 3
	ctx.textBaseline = "top"
	ctx.font = applyText(canvas, args.join(" ").split(" | ")[0].slice(21))
	ctx.fillText(args.join(" ").split(" | ")[0].slice(21).toUpperCase(),250,10)
	ctx.strokeText(args.join(" ").split(" | ")[0].slice(21).toUpperCase(), 250, 10)
	ctx.textBaseline = "bottom"
	ctx.font = applyText(canvas, args.join(" ").split(" | ")[1])
	ctx.fillText(args.join(" ").split(" | ")[1].toUpperCase(),250,canvas.height - 10)
	ctx.strokeText(args.join(" ").split(" | ")[1].toUpperCase(), 250, canvas.height - 10)

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'meme.png');
	message.channel.send(attachment);
})
} else {
	const { body: bg } = await snekfetch.get(message.author.avatarURL);
function applyText(canvas, text) {
        const ctx = canvas.getContext('2d');
      
        // Declare a base size of the font
        let fontSize = 900;
      
        do {
            // Assign the font to the context and decrement it so it can be measured again
            ctx.font = `${fontSize -= 10}px Impact`;
            // Compare pixel width of the text to the canvas minus the approximate avatar size
        } while(ctx.measureText(text).width > canvas.width - 10 || ctx.measureText("█").width * 2 > canvas.height / 4)
      
        // Return the result to use in the actual canvas
        return ctx.font;
      };
loadImage(bg).then((image) => {

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
	ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
	ctx.textAlign = 'center';
	ctx.lineWidth = 3
	ctx.textBaseline = "top"
	ctx.font = applyText(canvas, args.join(" ").split(" | ")[0])
	ctx.fillText(args.join(" ").split(" | ")[0].toUpperCase(),250,10)
	ctx.strokeText(args.join(" ").split(" | ")[0].toUpperCase(), 250, 10)
	ctx.textBaseline = "bottom"
	ctx.font = applyText(canvas, args.join(" ").split(" | ")[1])
	ctx.fillText(args.join(" ").split(" | ")[1].toUpperCase(),250,canvas.height - 10)
	ctx.strokeText(args.join(" ").split(" | ")[1].toUpperCase(), 250, canvas.height - 10)

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'meme.png');
	message.channel.send(attachment);
})
}
}
module.exports.help = {
	name: "genmeme",
	category:"photo"
}