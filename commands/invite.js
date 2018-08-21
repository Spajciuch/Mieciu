const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	message.react('👌')
  message.author.send('https://discordapp.com/api/oauth2/authorize?client_id=423196130508275716&permissions=8&scope=bot')
  console.log(`${message.author.username.toString()} użył komendy m!invite`)
  message.channel.send("Sprawdź DMy")
}
module.exports.help = {
	name: "invite",
	category:"info",
  description:"Podaje ci link do  zaproszenia bota",
  use:"<prefix>invite"
}