/**/
  const Discord = require("discord.js");
  const config = require(`../config.json`)
  module.exports.run = async (client, message, args) => {
    if(args[0] == '') return message.reply("Użycie: `m!getmsg <ID>`")
    let embed = new Discord.RichEmbed()
    .setColor(config.embed_color)
    message.channel.fetchMessage(args[0])
      .then(msg => {
        embed.setAthor(msg.author.tag, msg.author.avatarURL))
        embed.setDescription(msg.content)
        embed.setFooter(msg.createdTimestamp)
        message.channel.send({embed})
      }
  }
  module.exports.help = {
      name: "getmsg"
  }
