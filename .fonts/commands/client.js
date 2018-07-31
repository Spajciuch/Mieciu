let ascii_text_generator = require('ascii-text-generator');
const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
message.channel.send(client.user.email)
}
module.exports.help = {
  name: "client"
}
