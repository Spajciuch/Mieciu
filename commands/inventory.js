const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	var owner = client.users.get(message.guild.owner.id)
	var firebase = require('firebase')
	var database = firebase.database()
 database.ref(`/economy/${message.guild.id}/${message.author.id}/bucks`).once("value")
// database.ref(`/items/${message.author.id}`)
.then(async bucks => {
  database.ref(`/economy/${message.guild.id}/${message.author.id}/lastdaily`).once("value")
    .then(async daily => {
      database.ref(`/economy/${message.guild.id}/${message.author.id}/lastwork`).once("value")
    .then(async lastwork => {
      database.ref(`/economy/${message.guild.id}/${message.author.id}/inventory`).once("value")
          .then(async inventory => {
    	var inv = inventory.val()
    	if(!args[0]) {
    		if(inv == null ){
    		let embed = new Discord.RichEmbed()
    		.setColor(config.embed_color)
    		.setAuthor("Przedmioty użytkownika " + message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
    		.setDescription("Nie posiadasz żadnych przedmiotów")
    		message.channel.send({embed})
    	} else {
    		let embed = new Discord.RichEmbed()
    		.setColor(config.embed_color)
    		.setAuthor("Przedmioty użytkownika " + message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
    		for(i=0; i<inv.length; i++) {
			 embed.addField(`${i+1}.` , inv[i])
			
	} message.channel.send({embed})
	 } }else if(args[0] == 'use'){
	 	if(inv[args[1] - 1] == "**Użyte**") return message.reply("nie możesz użyć tego itemu")
		message.reply(`Użyłeś: **${inv[args[1]-1]}**`)
		owner.send(`${message.author.username}#${message.author.discriminator} użył **${inv[args[1] - 1]}**`)
		if(inv.length == 1) inv = null
		else inv[args[1] - 1] = "**Użyte**"
		database.ref(`/economy/${message.guild.id}/${message.author.id}`).set({
			bucks:bucks.val(),
			lastdaily:daily.val(),
			lastwork:lastwork.val(),
			inventory:inv
		})

	} else  if(args[0] == 'clear'){
		if(inv == null) return message.reply("Twoje inventory jest puste")
		database.ref(`/economy/${message.guild.id}/${message.author.id}`).set({
			bucks:bucks.val(),
			lastdaily:daily.val(),
			lastwork:lastwork.val(),
		})
		message.reply("Wyczyściłeś swoje inventory")
	}
	})})})})
}
module.exports.help = {
	name: "inventory",
	category:"economy",
  description:"Pokazuje twoje inventory",
  use:"<prefix>inventory"
}