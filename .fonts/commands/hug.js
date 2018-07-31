const Discord = require("discord.js");
const config = require(`../config.json`)
const hugg = require ('../Giphy/hug.json')
module.exports.run = async (client, message, args) => {
  var odp = Math.floor(Math.random() *7) + 1
    let person = args.join(" ")
    if(message.mentions.members.first()) {
   let hug = new Discord.RichEmbed()
    .setColor(config.embed_color)
   .setTitle(message.author.username.toString() + " przytulił " + message.mentions.members.first().user.username )
  .setImage(hugg[odp-1]);
     message.channel.send({
      embed: hug
    });
  } else {
  var odp = Math.floor(Math.random() *7) + 1
  let person = args.join(" ")
  let hug = new Discord.RichEmbed()
   .setColor(config.embed_color)
  .setTitle(message.author.username.toString() + " przytulił " + person)
  .setImage(hugg[odp-1]);
    message.channel.send({embed: hug});
}
}
module.exports.help = {
	name: "hug",
  category:"fun"
}