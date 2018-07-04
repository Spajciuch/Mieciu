/**/
  const Discord = require("discord.js");
  const config = require(`../config.json`)
  module.exports.run = async (client, message, args) => {
    if(args[0] == '') return message.reply("Użycie: `m!getmsg <ID>`")

    .setColor(config.embed_color)
    message.channel.fetchMessage(args[0])
      .then(msg => {
        let embed = new Discord.RichEmbed()
        .setColor(config.embed_color)
        .setAuthor(msg.author.tag, msg.author.avatarURL)
        .setDescription(msg.content)
        .setFooter(msg.createdAt)
        message.channel.send({embed})
      })
  }
  module.exports.help = {
      name: "getmsg"
  }

