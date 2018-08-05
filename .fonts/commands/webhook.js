const Discord = require("discord.js");
const send = require("quick.hook")
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
  if(!message.author.id == '367390191721381890') return message.reply("Nie masz uprawnień")
var channel = client.channels.get('459317058090303489')
var name =/*args.join(" ").split(" | ")[1]*/ "Changelog Miecia"
var icon = client.user.avatarURL
var text = args.join(" ")
let embed = new Discord.RichEmbed()
.setColor(config.embed_color)
.addField("Changelog", args.join(" "))
.setFooter("Changelog Miecia")
send(channel, embed, {
  name: name,
  icon: icon
})
message.delete()
}
module.exports.help = {
  name: "changelog"
}
