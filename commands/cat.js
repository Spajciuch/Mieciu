const Discord = require("discord.js");
const config = require(`../config.json`)
const superagent = require('superagent')
module.exports.run = async (client, message, args) => {
  let {body} = await superagent
  .get(`http://aws.random.cat/meow`);
  let embed = new Discord.RichEmbed()
  .setTitle("Kotek :3")
  .setImage(body.file)
  .setColor(config.embed_color)
  message.channel.send({embed})
}
module.exports.help = {
  name: "cat"
}
