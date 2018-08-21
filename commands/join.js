const Discord = require("discord.js");
const config = require('../config.json')
const snekfetch = require('snekfetch')
module.exports.run = async (client, message, args) => {
client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));

}
module.exports.help = {
  name: "join",
  category:"inssfo"
}
/*ctx.drawImage(image, 10 ,20, canvas.width, canvas.height)

*/