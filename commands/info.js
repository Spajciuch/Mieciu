const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	    const sys = require('computer-info')
   let info = new Discord.RichEmbed()
   .setAuthor("Informacje o bocie")
   .setColor(config.embed_color)
   .addField("Bot obsługuje ", `${client.users.size} osób, ${client.channels.size} kanałów, ${client.guilds.size} serwerów`)
   .addField("Informacje o systemie", `**Bot działa na:** ${sys().name}\n**System:** ${sys().osystem}\n**Procesor:** ${sys().cpu} (${sys().arch}) \n**Pamięć RAM:** ${sys().ram} GB (wolna: ${sys().freeram} GB)\n**Node:** ${sys().node}`)
   .addField("Ścieżka do pliku", `**Bot znajduje się w folderze:** ${__dirname}\n**Plik Główny:** ${__filename}`)
   .addField("Informacje o czasie",`**Włączono bota:** ${day} o ${time}\n**Czas Działania:** ${ms(client.uptime)}`)
   message.channel.send({embed: info})
}
module.exports.help = {
	name: "info"
}