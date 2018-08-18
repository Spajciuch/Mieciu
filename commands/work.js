const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	var firebase = require('firebase')
	var database = firebase.database()
	var ms = require('parse-ms')
	var cooldown = 1.08e+7
   	database.ref(`/economy/${message.guild.id}/${message.author.id}/lastdaily`).once("value")
    .then(async  lastdaily=>  {
    	database.ref(`/economy/${message.guild.id}/${message.author.id}/bucks`).once("value")
    .then(async  bucks=>  {
      database.ref(`/economy/${message.guild.id}/${message.author.id}/inventory`).once("value")
          .then(async inventory => {
            database.ref(`/economy/${message.guild.id}/${message.author.id}/lastwork`).once("value")
          .then(async lastwork => {
    var lastWork = lastwork.val() 
    if (lastWork !== null && cooldown - (Date.now() - lastWork) > 0) {
	let timeObj = ms(cooldown - (Date.now() - lastWork))
	let embed = new Discord.RichEmbed()
	.setAuthor("Work", message.author.displayAvatarURL)
	.setDescription(`Nie możesz teraz pracować\nPraca będzie możliwa za: **${timeObj.hours}h ${timeObj.minutes}m**!`)
	.setColor(config.embed_color)
	return message.channel.send({embed})
}
	var jobs = require('../config/jobs.json')
	var job = jobs.jobs
	var payment = jobs.payment
	var which = Math.floor(Math.random() * 7);
	// console.log(job[which]+"\n"+payment[which])
	database.ref(`/economy/${message.guild.id}/${message.author.id}`).set({
				inventory:inventory.val(),
				lastwork:Date.now(),
				lastdaily: lastdaily.val(),
				bucks:bucks.val() + Number(payment[which])
	})
	let embed = new Discord.RichEmbed()
	.setAuthor("Work", message.author.displayAvatarURL)
	.addField("Jako " + job[which] + " zarobiłeś", payment[which] + "M$")
	.addField("Stan konta: ", bucks.val() + Number(payment[which]) + "M$")
	.setColor(config.embed_color)
	message.channel.send({embed})
})
})
})
})
}
module.exports.help = {
	name: "work",
	category:"economy"
}