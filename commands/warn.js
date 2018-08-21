const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Nie masz uprawnień");
	var firebase = require('firebase')
	var database = firebase.database()
	let member = message.mentions.members.first();
	if(args[1] == 'clear') {
			database.ref(`warns/${message.guild.id}/${member.id}`).set({
				warns:0
			})
	} else { database.ref(`warns/${message.guild.id}/${member.id}/warns`).once("value")
		.then(async warns => {
			var warn = warns.val()
			if(warn == null) warn = 0
			database.ref(`warns/${message.guild.id}/${member.id}`).set({
				warns:warn+1
			})
			message.reply(member + "został zgłoszony " + `${warn+1}/5`)
			if(warn == 4){
				 if(!member.bannable) return message.guild.owner.send(`${member} dostał 5 ostrzeżeń, ale nie mogę go zbanować`)
				member.ban("Dostał 5 ostrzeżeń")
			}
		})
	}
}
module.exports.help = {
	name: "warn",
	category:"admin",
  description:"Zgłasza użytkownika <5 ostrzeżeń ban>",
  use:"<prefix>supportet.languages"
}