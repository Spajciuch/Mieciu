const Discord = require("discord.js");
const config = require(`../config.json`)
const ms = require('ms')
module.exports.run = async (client, message, args) => {
var d = new Date()
var hour = d.getHours() +2
var minute = d.getMinutes()
var minute = `${minute}`.padStart(2, 0)
var time = hour + ":" + minute
switch (new Date().getDay()) {
  case 0:
      day = " w Niedzielę";
      break;
  case 1:
      day = "w Poniedziałek";
      break;
  case 2:
      day = "we Wtorek";
      break;
  case 3:
      day = "w Środę";
      break;
  case 4:
      day = "w Czwartek";
      break;
  case 5:
      day = "w Piątek";
      break;
  case 6:
      day = "w Sobotę";
}
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
	name: "info",
  category:"info"
}