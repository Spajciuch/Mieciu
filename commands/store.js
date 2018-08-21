const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
var firebase = require('firebase')
var database = firebase.database()
var db = firebase.firestore()
var moment = require("moment")
database.ref(`/economy/${message.guild.id}/${message.author.id}/bucks`).once("value")
// database.ref(`/items/${message.author.id}`)
.then(async snapshot => {
	database.ref(`/economy/${message.guild.id}/${message.author.id}/lastdaily`).once("value")
		.then(async daily => {
			database.ref(`/economy/${message.guild.id}/${message.author.id}/lastwork`).once("value")
		.then(async lastwork => {
			database.ref(`/economy/${message.guild.id}/${message.author.id}/inventory`).once("value")
					.then(async inventory => {
			database.ref(`/store/${message.guild.id}/items`).once("value")
			.then(async items => {
				database.ref(`/store/${message.guild.id}/price`).once("value")
			.then(async price => {

				
	var inv = inventory.val()
	
	var bucks = snapshot.val()
	var shop = items.val()
	var price = price.val()
	// var inv = inv.val()
	if(!args[0]){
		let embed = new Discord.RichEmbed()
	.setAuthor("Sklep serwera " + message.guild.name, message.guild.iconURL)
	// .addField(shop[0], price[0])
	// .addField(shop[1], price[1])
	for(i=0; i<shop.length; i++) {
		embed.addField(`${i+1}.` + shop[i].replace("role",""),price[i] + "M$")
	}
	embed.setColor(config.embed_color)
	embed.setFooter("Sklep z dnia: " + moment.utc(new Date()).format('DD.MM.YYYY-hh:mm'))
	message.channel.send({embed})
	} else if(args[0] == 'buy') {
				if(!args[1]) return message.reply("Podaj liczbę od 1 do " + shop.length)
				var pce = price[args[1]-1]
		if(pce > bucks) return message.reply("Nie masz wystarczjącej ilości M$")	
		if(inv == null) {
			inv= [shop[args[1] - 1]]
	database.ref(`/economy/${message.guild.id}/${message.author.id}`).set({
				bucks:bucks - pce,
				inventory:inv,
				lastwork:lastwork.val(),
				lastdaily: daily.val()
})
	message.reply(`Zakupiłeś **${shop[args[1] - 1]}**`)
	} else {
		
			inv[inv.length] = shop[args[1] - 1]
			database.ref(`/economy/${message.guild.id}/${message.author.id}`).set({
				bucks:bucks - pce,
				inventory:inv,
				lastwork:lastwork.val(),
				lastdaily: daily.val()
			})
			message.reply(`Zakupiłeś **${shop[args[1] - 1]}**`)
			}
			// console.log(inv)
		} else if(args[0] == 'init'){
			var tshp = args.join(" ").split(" | ")[0]
			var shp = [tshp.replace("init","")]
			var ipc = [args.join(" ").split(" | ")[1]]
			// c/onsole.log(pce)
			database.ref(`/store/${message.guild.id}/`).set({
				items:shp,
				price:ipc
			})
			message.channel.send(`Dodano **${tshp.replace("init","")}** do sklepu za cenę **${args.join(" ").split(" | ")[1]}M$**`)
		}
// })
})
})
})
})
})
	})
}
module.exports.help = {
	name: "store",
	category:"economy",
  description:"Pokazuje sklep serwerowy",
  use:"<prefix>store"
}