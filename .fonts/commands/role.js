const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	message.channel.send("Test").then(msg => {
		msg.react('⏪').then( r => {
      	msg.react('⏩')
      	 	const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      		const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
      	  	const backwards = msg.createReactionCollector(backwardsFilter);
	      	const forwards = msg.createReactionCollector(forwardsFilter);
	      	backwards.on('collect', r => {
	      		  var role = message.guild.roles.find('name', 'testxd')
	      		  message.member.addRoles(role)
	      		  console.log(r.user.username)
	      	})
	})
	})
}
module.exports.help = {
	name: "role",
	category:"test"
}