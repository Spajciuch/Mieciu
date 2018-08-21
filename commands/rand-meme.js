const Discord = require("discord.js");
const config = require(`../config.json`)
const superagent = require('superagent')
module.exports.run = async (client, message, args) => {
  let {body} = await superagent
  .get(`https://api-to.get-a.life/meme`)
  let embed = new Discord.RichEmbed()
  .setTitle("Jakieś meme")
  .setImage(body.url)
  .setColor(config.embed_color)
  message.channel.send({embed})
}
module.exports.help = {
  name: "meme",
  category:"fun",
  description:"Wysyła randomowego mema",
  use:"<prefix>meme"
}
