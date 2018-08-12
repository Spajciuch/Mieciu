const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Nie masz uprawnień");
	var firebase = require('firebase')
	var database = firebase.database()
	database.ref(`/store/${message.guild.id}/items`).once("value")
		.then(async items => {
				database.ref(`/store/${message.guild.id}/price`).once("value")
					.then(async price => {
			var shop = items.val()
			var pce = price.val()
			if(args[0] == 'role'){
				str = args.join(" ").split(" | ")[0]
				shop[shop.length] = str
			pce[pce.length]  = args.join(" ").split(" | ")[1]
			// console.log(pce)
			database.ref(`/store/${message.guild.id}/`).set({
				items:shop,
				price:pce
			})
			message.channel.send(`Dodano **${str.replace("role","")}** do sklepu za cenę **${args.join(" ").split(" | ")[1]}M$**`)
			} else {
			shop[shop.length] = args.join(" ").split(" | ")[0]
			pce[pce.length]  = args.join(" ").split(" | ")[1]
			// console.log(pce)
			database.ref(`/store/${message.guild.id}/`).set({
				items:shop,
				price:pce
			})
			message.channel.send(`Dodano **${args.join(" ").split(" | ")[0]}** do sklepu za cenę **${args.join(" ").split(" | ")[1]}M$**`)
}
})
})
}
module.exports.help = {
	name: "storeadd",
	category:"economy"
}