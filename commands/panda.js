const Discord = require("discord.js");
const config = require(`../config.json`)
const superagent = require('superagent')
module.exports.run = async (client, message, args) => {
  let {body} = await superagent
  .get(`https://api-to.get-a.life/pandaimg`)
  let embed = new Discord.RichEmbed()
  .setTitle("Panda :3")
  .setImage(body.link)
  .setColor(config.embed_color)
  message.channel.send({embed})
}
module.exports.help = {
  name: "panda"
}
