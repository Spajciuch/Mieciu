const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	var firebase = require('firebase')
	var database = firebase.database()
database.ref(`/economy/${message.guild.id}/${message.author.id}/inventory`).once("value")
    .then(async  inventory=>  {
        database.ref(`/economy/${message.guild.id}/${message.author.id}/bucks`).once("value")
    .then(async  bucks=>  {
		var dol = bucks.val()
		if(dol == null) dol = 0
        let embed = new Discord.RichEmbed()
        .setColor(config.embed_color)
        .setAuthor(`Konto ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
        .addField("Stan konta", dol + "M$")
        message.channel.send({embed})
    })
})
}
module.exports.help = {
	name: "account",
	category:"economy"
}
