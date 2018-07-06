const Discord = require("discord.js");
const config = require(`../config.json`)
const slapg  = require('../Giphy/slap.json')
module.exports.run = async (client, message, args) => {
    var odp = Math.floor(Math.random() *7) + 1
  if(message.mentions.members.first()) {
  {
    let person = args.join(" ")
   let slap = new Discord.RichEmbed()
    .setColor(config.embed_color)
   .setTitle(message.author.username.toString() + " slapnął " + message.mentions.members.first().user.username)
   .setImage(slapg[odp-1]);
     message.channel.send({
      embed: slap
    });
  }
}
else {
  var odp = Math.floor(Math.random() *7) + 1
  let person = args.join(" ")
let slap = new Discord.RichEmbed()
 .setColor(config.embed_color)
.setTitle(message.author.username.toString() + " slapnął " + person)
.setImage(slapg[odp-1]);
  message.channel.send({
   embed: slap
 });
}
}
module.exports.help = {
	name: "slap",
  category:"fun"
}