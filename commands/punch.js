const Discord = require("discord.js");
const config = require(`../config.json`)
const punchg = require('../Giphy/punch.json')
module.exports.run = async (client, message, args) => {
var odp = Math.floor(Math.random() *7) + 1
    if(message.mentions.members.first()) {
    let person = args.join(" ")
   let punch = new Discord.RichEmbed()
    .setColor(config.embed_color)
   .setTitle(message.author.username.toString() + " przypierdolił " + message.mentions.members.first().user.username)
   .setImage(punchg[odp-1]);
     message.channel.send({
      embed: punch
    });
  }
else {
  var odp = Math.floor(Math.random() *7) + 1
    let person = args.join(" ")
   let punch = new Discord.RichEmbed()
    .setColor(config.embed_color)
   .setTitle(message.author.username.toString() + " przypierdolił " + person)
   .setImage(punchg[odp-1]);
     message.channel.send({
      embed: punch
    });
  }
}
module.exports.help = {
	name: "punch",
  category:"fun"
}