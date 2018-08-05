const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
  if(message.author.id !== '367390191721381890') return message.reply("Nie masz uprawnień")
  client.user.setUsername(args.join(" "))
  message.author.send(`Zmieniono mój nick`)
  message.channel.send("Wykonano")
}
module.exports.help = {
	name: "username"
}