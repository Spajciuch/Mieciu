const Discord = require('discord.js')
const fs = require('fs')
const Jimp = require('jimp')
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setTitle("Achievement")
  .setColor(config.embed_color)
  .setImage(`https://www.minecraftskinstealer.com/achievement/a.php?i=2&h=Achievement+Get%21&t=${args.join("+")}`)
message.channel.send({embed: embed})
}
module.exports.help ={
  name: "achievement",
  category: "photo"
}
//`https://www.minecraftskinstealer.com/achievement/a.php?i=2&h=Achievement+Get%21&t=dwa+wyrazy`
