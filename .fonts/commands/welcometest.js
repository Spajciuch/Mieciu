const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	var firebase = require('firebase')
  	var database = firebase.database()
  	await database.ref(`/config/${message.guild.id}/wmsg`).once('value')
  	.then(async msg=> { 
  		eval(msg.val())
  	})
}
module.exports.help = {
	name: "welcometest",
	category:"spyte"
}
