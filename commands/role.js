const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	var firebase = require('firebase')
	var database = firebase.database()
	database.ref(`/roles/${message.guild.id}/roles`)
	message.channel.send("Test").then(msg => {
		msg.react('⏪').then( r => {
      	msg.react('⏩')
      	 	const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      		const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
      	  	const backwards = msg.createReactionCollector(backwardsFilter);
	      	const forwards = msg.createReactionCollector(forwardsFilter);
	      	backwards.on('collect', r => {
	      		  var role = message.guild.roles.get("475251598365425674")
	      		  message.member.addRole("435831457991098388")
	      		  console.log(role)
	      	})
	})
	})
}
module.exports.help = {
	name: "role",
	category:"test"
}