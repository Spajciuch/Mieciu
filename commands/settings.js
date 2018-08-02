const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	var firebase = require('firebase')
	var database = firebase.database()
 if(!message.member.hasPermission('MANAGE_GUILD')) return message.reply('Nie masz uprawnień')
   database.ref(`/config/${message.guild.id}/prefix`).once('value')
      .then(prefix => {
        database.ref(`/config/${message.guild.id}/pingi`).once('value')
        .then(pingi => {
          database.ref(`/config/${message.guild.id}/util`).once('value')
          .then(util => {
            database.ref(`/config/${message.guild.id}/ver`).once('value')
            .then(ver => {
               database.ref(`/config/${message.guild.id}/wlcm`).once('value')
                .then(wlcm => {
                   database.ref(`/config/${message.guild.id}/wmsg`).once('value')
                    .then(msg => {
                   database.ref(`/config/${message.guild.id}/wchan`).once('value')
                     .then(chan => {
                      database.ref(`/config/${message.guild.id}/level`).once("value")
                        .then(level => {



    if(!args[0]) {
      let embed = new Discord.RichEmbed()
      .setColor(config.embed_color)
      .setTitle("Ustawienia")
      .addField("Prefix: " + prefix.val(), `Aby zmienić ${fireprefix}settings prefix <nowy prefix>`)
      .addField("Komenda do pingowania: " + pingi.val(), `Aby zmienić ${fireprefix}settings pingi <on/off>`)
      .addField("Komendy administracyjne: "+util.val(),`Aby zmienić ${fireprefix}settings util <on/off>`)
      .addField("Powiadomienie o następnym poziomie: " + level.val(), `Aby zmienić ${fireprefix}settings lvl <on/off>`)
      .addField("Wiadomość powitalna: " + wlcm.val(),`Aby wyłączyć <prefix>settings welcome off\nAby właczyć: ${fireprefix}settings welcome <wiadomość powitalna>`)
      .setFooter(`Wersja Configu: ${ver.val()}`)
      message.channel.send({embed})
    } else if(args[0] == 'prefix') {
      if(args[1]
