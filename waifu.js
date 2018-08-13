const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	let result = Math.floor((Math.random() * 100) + 0);
	if(message.mentions.members.first()) {
		let awesome = new Discord.RichEmbed()
		.setTitle("Waifu")
		.setDescription(`Oceniam ${message.mentions.members.first().user.username} na ${result}/100 <:rip:452759223697145856>`)
		.setColor(config.embed_color)

		//
		let  nice = new Discord.RichEmbed()
		.setTitle("Waifu")
		.setDescription(`Oceniam ${message.mentions.members.first().user.username} na ${result}/100 👀`)
		.setColor(config.embed_color)

		//
		let good = new Discord.RichEmbed()
		.setTitle("Waifu")
		.setDescription(`Oceniam ${message.mentions.members.first().user.username} na ${result}/100 👍`)
		.setColor(config.embed_color)

		//
		let ok = new Discord.RichEmbed()
		.setTitle("Waifu")
		.setDescription(`Oceniam ${message.mentions.members.first().user.username} na ${result}/100 👌`)
		.setColor(config.embed_color)

		//
		let idk = new Discord.RichEmbed()
		.setTitle("Waifu")
		.setDescription(`Oceniam ${message.mentions.members.first().user.username} na ${result}/100 🤷`)
		.setColor(config.embed_color)

		//
		let thumbup = new Discord.RichEmbed()
		.setTitle("Waifu")
		.setDescription(`Oceniam ${message.mentions.members.first().user.username} na ${result}/100 😭`)
		.setColor(config.embed_color)

		//
		let worse = new Discord.RichEmbed()
		.setTitle("Waifu")
		.setDescription(`Oceniam ${message.mentions.members.first().user.username} na ${result}/100 <:xd:478513341556326401>`)
		.setColor(config.embed_color)

		if(result >= 90 ) return message.channel.send({embed:awesome})
		if(result >= 80 ) return message.channel.send({embed:nice})
		if(result >= 70 ) return message.channel.send({embed:good})
		if(result >= 60 ) return message.channel.send({embed:ok})
		if(result >= 50 ) return message.channel.send({embed:idk})
		if(result >= 40 ) return message.channel.send({embed:thumbup})
		if(result <= 30 ) return message.channel.send({embed:worse})
		if(result >= 30 ) return message.channel.send({embed:worse})
	} else {
		let awesome = new Discord.RichEmbed()
		.setTitle("Waifu")
		.setDescription(`Oceniam ${message.author.username} na ${result}/100 <:rip:452759223697145856>`)
		.setColor(config.embed_color)

		//
		let  nice = new Discord.RichEmbed()
		.setTitle("Waifu")
		.setDescription(`Oceniam ${message.author.username} na ${result}/100 👀`)
		.setColor(config.embed_color)

		//
		let good = new Discord.RichEmbed()
		.setTitle("Waifu")
		.setDescription(`Oceniam ${message.author.username} na ${result}/100 👍`)
		.setColor(config.embed_color)

		//
		let ok = new Discord.RichEmbed()
		.setTitle("Waifu")
		.setDescription(`Oceniam ${message.author.username} na ${result}/100 👌`)
		.setColor(config.embed_color)

		// 
		let idk = new Discord.RichEmbed()
		.setTitle("Waifu")
		.setDescription(`Oceniam ${message.author.username} na ${result}/100 🤷`)
		.setColor(config.embed_color)

		//
		let thumbup = new Discord.RichEmbed()
		.setTitle("Waifu")
		.setDescription(`Oceniam ${message.author.username} na ${result}/100 😭`)
		.setColor(config.embed_color)

		//
		let worse = new Discord.RichEmbed()
		.setTitle("Waifu")
		.setDescription(`Oceniam ${message.author.username} na ${result}/100 <:xd:478513341556326401>`)
		.setColor(config.embed_color)

		if(result >= 90 ) return message.channel.send({embed:awesome})
		if(result >= 80 ) return message.channel.send({embed:nice})
		if(result >= 70 ) return message.channel.send({embed:good})
		if(result >= 60 ) return message.channel.send({embed:ok})
		if(result >= 50 ) return message.channel.send({embed:idk})
		if(result >= 40 ) return message.channel.send({embed:thumbup})
		if(result <= 30 ) return message.channel.send({embed:worse})
		if(result >= 30 ) return message.channel.send({embed:worse})
	}
	

}
module.exports.help = {
	name: "waifu",
	category:"fun"
}