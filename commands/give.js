const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	var firebase = require('firebase')
	var database = firebase.database()
	database.ref(`/economy/${message.guild.id}/${message.author.id}/lastdaily`).once("value")
    .then(async  lastdaily=>  {
    	database.ref(`/economy/${message.guild.id}/${message.author.id}/bucks`).once("value")
    .then(async  data=>  {
      database.ref(`/economy/${message.guild.id}/${message.author.id}/inventory`).once("value")
          .then(async inventory => {
            database.ref(`/economy/${message.guild.id}/${message.author.id}/lastwork`).once("value")
          .then(async lastwork => {
	var bucks = data.val()
	let member = message.mentions.members.first();
	if(args[1] > bucks) return message.reply("Nie masz tyle M$")
	bucks = bucks - args[1]
	database.ref(`/economy/${message.guild.id}/${message.author.id}`).set({
		lastdaily:lastdaily.val(),
		bucks:bucks,
		inventory:inventory.val(),
		lastwork:lastwork.val()
	})
	database.ref(`/economy/${message.guild.id}/${member.id}/lastdaily`).once("value")
    .then(async  dly=>  {
    	database.ref(`/economy/${message.guild.id}/${member.id}/bucks`).once("value")
    .then(async  dta=>  {
      database.ref(`/economy/${message.guild.id}/${member.id}/inventory`).once("value")
          .then(async inv => {
            database.ref(`/economy/${message.guild.id}/${member.id}/lastwork`).once("value")
          .then(async lwk => {
          	database.ref(`/economy/${message.guild.id}/${member.id}`).set({
          		lastdaily:dly.val(),
				bucks:dta.val() + Number(args[1]),
				inventory:inv.val(),
				lastwork:lwk.val()
          	})
          	message.reply(`Przelałeś ${args[1]}M$ na konto " ${member}`)
})
})
})
})
})
})
})
})
}
module.exports.help = {
	name: "give",
	category:"economy"
}