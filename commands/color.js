const Discord = require("discord.js");
const send = require("quick.hook")
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .addField("Kolor", `Kolor paska obok to kolor, który wpisałeś [${args.join(" ")}]`)
  .setColor(args.join(" "))
  message.channel.send({embed: embed})
}
module.exports.help = {
  name: "color"
}
