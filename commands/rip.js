//
const Discord = require("discord.js");
const config = require(`../config.json`)
const superagent = require('superagent')
module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setTitle("RIP")
  .setFooter("tombstonebuilder.com")
  .setColor(config.embed_color)
  .setImage(`http://www.tombstonebuilder.com/generate.php?top1=RIP&top2=${args.join("+").split("+|+")[0]}&top3=${args.join("+").split("+|+")[1]}&top4=${args.join("+").split("+|+")[2]}&sp=1`)
  message.channel.send({embed})
}
module.exports.help = {
  name: "rip",
  category:"fun"
}
