const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {

if (message.content.includes('@everyone')) return message.reply("Mnie nie wrobisz")
if (message.content.includes('@here')) return message.reply("Mnie nie wrobisz")
   message.delete().catch(O_o => {});
  let text = args.join(" ")
  message.delete().catch(O_o => {});
  message.channel.send(text);
}
module.exports.help = {
	name: "sayd",
	category:"fun"
}