
const Discord = require("discord.js");
const config = require('../config.json')
module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setAuthor("Embed dla " + message.author.username, message.author.avatarURL)
  .setColor(args.join(" ").split(" | ")[1] || config.embed_color)
  .addField("Zawartość:", args.join(" ").split(" | ")[0] )
  .setThumbnail(args.join(" ").split(" | ")[2])
  .setFooter(args.join(" ").split(" | ")[3])
  message.channel.send({embed})

}
module.exports.help = {
  name: "embed",
  category:"util"
}
