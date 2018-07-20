const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>{
  if(message.author.id !== '367390191721381890') return message.reply("Nie masz uprawnień")
  client.destroy()
  client.login(config.token)
  message.channel.send("Zresetowano")
}
module.exports.help = {
  name: "reset"
}
