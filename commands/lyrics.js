const Discord = require("discord.js");
const config = require(`../config.json`)
const superagent = require('superagent')
module.exports.run = async (client, message, args) => {
  let {body} = await superagent
  .get(`https://some-random-api.glitch.me/lyrics/?title=${args.join("+")}`)
  let embed = new Discord.RichEmbed()
  .setTitle("Tekst")
  .addField("Tytuł", body.title)
  .addField("Autor", body.author)
  .addField("Tekst", body.lyrics)
  .setColor(config.embed_color)
  message.channel.send({embed})
}
module.exports.help = {
  name: "lyrics",
  category:"info"
}
