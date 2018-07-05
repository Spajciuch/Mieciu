const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
   if (message.content.includes('@everyone')) return message.reply("Mnie nie wrobisz")
    if (message.content.includes('@here')) return message.reply("Mnie nie wrobisz")
    let text = args.join(" ")
    message.channel.send(text);
}
module.exports.help = {
	name: "say"
}