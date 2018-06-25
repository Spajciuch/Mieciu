const Discord = require('discord.js')
const config = require(`../config.json`)
module.exports.run = (client, message, args) => {
    // Lets define our array of guilds
    const guildArray = client.guilds.map((guild) => {
    return `${guild.name}`
    })
let embed = new Discord.RichEmbed()
.setColor(config.embed_color)
.addField("Spis Serwerów, na których jest bot", guildArray.join("\n"))
    // And send it
    message.channel.send({embed: embed})
  }

module.exports.help = {
    name: "guilds"
}
