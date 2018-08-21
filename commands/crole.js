
const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>{
	var firebase = require('firebase')
  var database = firebase.database()
  await database.ref(`/config/${message.guild.id}/util`).once('value')
  .then(async pingi => {
    if(pingi.val() == false) return message.reply('Komenda jest wyłączona');
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Nie masz uprawnień");
  message.guild.createRole({
    name: args.join(" "),
    permissions: 0
  })
})
}
module.exports.help = {
  name: "create.role",
  category:"admin",
  description:"Tworzy rolę",
  use:"<prefix>create.role <nazwa>"
}
