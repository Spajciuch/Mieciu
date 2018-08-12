const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	var firebase =  require('firebase')
	var database = firebase.database()
	database.ref(`/roles/${message.guild.id}/roles`).once("value")
	.then(async roles => {
		var rbr = ["435830796033589269","459717515338055680"]
		database.ref(`/roles/${message.guild.id}`).set({
			roles:rbr
		})
	})
}
module.exports.help = {
	name: "rbr",
	category:"test"
}