const Discord = require("discord.js");
const send = require("quick.hook")
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .addField("Kolor", `Kolor paska obok to kolor, który wpisałeś [${args.join(" ")}]`)
  .setColor(args.join(" "))
  message.channel.send({embed: embed})
//   const { createCanvas, loadImage } = require('canvas')
// const canvas = createCanvas(500, 500)
// const ctx = canvas.getContext('2d')
// var centerX = canvas.width / 2;
// var centerY = canvas.height / 2;
// var radius = 70;
//        ctx.beginPath();
//       ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
//       ctx.fillStyle = args[0];
//       ctx.fill();
//     const attachment = new Discord.Attachment(canvas.toBuffer(), 'meme.png');
//   message.channel.send(attachment);
 
//   // console.log(canvas.toDataURL())
}
module.exports.help = {
  name: "color",
  category:"util",
  description:"Podaje kolor jaki wpisałeś (hex)",
  use:"<prefix>color <hex>"
}
