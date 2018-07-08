
const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>{
	var firebase = require('firebase')
  var database = firebase.database()
  await database.ref(`/config/${message.guild.id}/util`).once('value')
  .then(async pingi => {
    if(pingi.val() == false) return message.reply('Komenda jest wyłączona');
  if(!message.member.hasPermission("MANAGE_CHANNELS"))
  return message.reply("Nie masz uprawnień")
  message.channel.setName(args.join(" "))
 .catch(console.error);
})
}
module.exports.help = {
  name: "set.channel.name",
  category:"admin"
}
