const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
const rand = require('../Losowanie/8ball.json')
  var odp = Math.floor(Math.random() *11) + 1
  let ball = new Discord.RichEmbed()
  .setTitle("8ball")
  .setThumbnail(`http://icons.iconarchive.com/icons/barkerbaggies/pool-ball/256/Ball-8-icon.png`)
  .setColor(config.embed_color)
  .addField("Pytanie", args.join(" "))
  .addField("Odpowiedź",rand[odp-1])
  .setFooter("8ball")
  if(message.author.bot) return;
message.channel.send({embed: ball})
}
module.exports.help = {
	name: "8ball",
  category:"fun"
}