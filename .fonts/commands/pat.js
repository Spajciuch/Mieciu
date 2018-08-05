const Discord = require("discord.js");
const config = require(`../config.json`)
const patg = require ('../Giphy/pat.json')
module.exports.run = async (client, message, args) => {
 var odp = Math.floor(Math.random() *13) + 1
    if(message.mentions.members.first()) {
    let person = args.join(" ")
   let pat = new Discord.RichEmbed()
    .setColor(config.embed_color)
   .setTitle(message.author.username.toString() + " patnął " + message.mentions.members.first().user.username )
   .setImage(patg[odp-1]);
     message.channel.send({
      embed: pat
    });
  }
else {
  var odp = Math.floor(Math.random() *13) + 1
  let person = args.join(" ")
  let pat = new Discord.RichEmbed()
   .setColor(config.embed_color)
  .setTitle(message.author.username.toString() + " patnął "  + person)
  .setImage(patg[odp-1]);
    message.channel.send({
     embed: pat
   });
}
}
module.exports.help = {
	name: "pat",
  category:"fun"
}