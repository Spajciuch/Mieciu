const Discord = require("discord.js");
const config = require(`../config.json`)
const superagent = require('superagent')
module.exports.run = async (client, message, args) => {
  let {body} = await superagent
  .get(`https://random.dog/woof.json`)
  let embed = new Discord.RichEmbed()
  .setTitle("Piesek :3")
  .setImage(body.url)
  .setColor(config.embed_color)
  message.channel.send({embed})
}
module.exports.help = {
  name: "dog",
  category:"fun"
}
