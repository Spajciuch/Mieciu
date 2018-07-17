const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>{
  if(message.author.id !== '367390191721381890') return message.reply("Nie masz uprawnień")
  client.destroy(process.env.TOKEN)
  client.login(process.env.TOKEN)
  message.channel.send("Zresetowano")
}
module.exports.help = {
  name: "reset"
}
