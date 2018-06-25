const Discord = require("discord.js");
const config = require(`../config.json`)
const superagent = require('superagent')
const { get } = require('request-promise-native')
module.exports.run = async (client, message, args) => {
  if(!message.channel.nsfw) return message.reply("Tylko na kanałach nsfw")
  let {body} = await superagent
  .get(`http://api.oboobs.ru/boobs/0/1/random`);
  const options = { // You dont have to make an object, you could do it directly in the get() method if you want, this just looks cleaner
     url: 'http://api.oboobs.ru/boobs/0/1/random',
     json: true
 }
  get(options).then(boobs => {
    let embed = new Discord.RichEmbed()
    .setTitle(":eyes: Boobs")
    .setImage(`http://media.oboobs.ru/`+boobs[0].preview)
    .setColor(config.embed_color)
    message.channel.send({embed})

  })

}
module.exports.help = {
  name: "boobs"
}
