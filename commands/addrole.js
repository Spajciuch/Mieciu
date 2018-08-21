const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	var firebase = require('firebase')
  var database = firebase.database()
  await database.ref(`/config/${message.guild.id}/util`).once('value')
  .then(async pingi => {
    if(pingi.val() == false) return message.reply('Komenda jest wyłączona');
	let member = message.mentions.members.first();
	if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Nie masz uprawnień");
	var name =  args.join(" ").slice(22)
	var role = message.guild.roles.find('name',name)
	if(!role) return message.reply("Nie ma takiej roli")
	member.addRole(role).then(rola => {
		message.channel.send(`Dodano rolę ${role} dla ${member}`)
	})
})
}
module.exports.help = {
	name: "addrole",
	category:"admin",
  description:"Dodaje role oznaczonej osobie",
  use:"<prefix>addrole /oznacz/ /nazwa roli/"
}