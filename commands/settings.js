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
                          database.ref(`/config/${message.guild.id}/antiraid`).once("value")
                        .then(antiraid => {
                          database.ref(`/config/${message.guild.id}/adchan`).once("value")
                        .then(adchan => {


    if(!args[0]) {
      let embed = new Discord.RichEmbed()
      .setColor(config.embed_color)
      .setTitle("Ustawienia")
      .addField("Prefix: " + prefix.val(), `Aby zmienić ${fireprefix}settings prefix <nowy prefix>`)
      .addField("Komenda do pingowania: " + pingi.val(), `Aby zmienić ${fireprefix}settings pingi <on/off>`)
      .addField("Komendy administracyjne: "+util.val(),`Aby zmienić ${fireprefix}settings util <on/off>`)
      .addField("Powiadomienie o następnym poziomie: " + level.val(), `Aby zmienić ${fireprefix}settings lvl <on/off>`)
      .addField("Wiadomość powitalna: " + wlcm.val(),"Aby wyłączyć <prefix>settings welcome off\nAby właczyć <prefix>settings welcome <wiadomość powitalna>")
      .addField("Antiraid")
      .setFooter(`Wersja Configu: ${ver.val()}`)
      message.channel.send({embed})
    } else if(args[0] == 'prefix') {
      if(args[1] == '') return message.reply("Podaj Prefix")
      database.ref(`/config/${message.guild.id}`).set({
        prefix: args[1],
        pingi: pingi.val(),
        util: util.val(),
        wlcm: wlcm.val(),
        wmsg: msg.val(),
        wchan: chan.val(),
        level: level.val(),
        adchan: adchan.val(),
        antiraid:antiraid.val(),
        ver: ver.val()
      });
      message.channel.send("Nowy Prefix to: " + args[1])
    } else if (args[0] == 'pingi'){
      if(args[1] == 'on'){
        database.ref(`/config/${message.guild.id}`).set({ 
        prefix: prefix.val(),
        pingi: true,
        util: util.val(),
        wlcm: wlcm.val(),
        wmsg: msg.val(),
        wchan: chan.val(),
        level: level.val(),
        adchan: adchan.val(),
        antiraid:antiraid.val(),
        ver: ver.val()
        })
        message.channel.send("Komenda do pingowania jest teraz włączona")
      } else if(args[1] == 'off'){
        database.ref(`/config/${message.guild.id}`).set({ 
        prefix: prefix.val(),
        pingi: false,
        util: util.val(),
        wlcm: wlcm.val(),
        wmsg: msg.val(),
        wchan: chan.val(),
        level: level.val(),
        adchan: adchan.val(),
        antiraid:antiraid.val(),
        ver: ver.val()
        })
        message.channel.send("Komenda do pingowania jest teraz wyłączona")
      } else {
        message.reply("Nie podałeś właściwej opcji")
      } 
    } else if(args[0] == 'util') {
      if(args[1] == 'on'){
        database.ref(`/config/${message.guild.id}`).set({  
          prefix: prefix.val(),
          pingi: pingi.val(),
          util: true,
             wlcm: wlcm.val(),
          wmsg: msg.val(),
          wchan: chan.val(),
          level: level.val(),
          adchan: adchan.val(),
        antiraid:antiraid.val(),
          ver: ver.val()
        })
        message.channel.send("Komendy administracyjne są teraz włączone")
      } else if(args[1] == 'off'){
          database.ref(`/config/${message.guild.id}`).set({  
          prefix: prefix.val(),
          pingi: pingi.val(),
          util: false,
               wlcm: wlcm.val(),
          wmsg: msg.val(),
          wchan: chan.val(),
          level: level.val(),
          adchan: adchan.val(),
        antiraid:antiraid.val(),
          ver: ver.val()
        })
          message.channel.send("Komendy administracyjne są teraz wyłączone")
      } else {
        message.channel.send("Nie podałeś poprawnej opcji")
      }
    } else if(args[0] == 'welcome'){
      if(args[1] == 'off'){
        database.ref(`/config/${message.guild.id}`).set({  
          prefix: prefix.val(),
          pingi: pingi.val(),
          util: util.val(),
          wlcm: false,
          wmsg: msg.val(),
          wchan: chan.val(),
          level: level.val(),
          adchan: adchan.val(),
        antiraid:antiraid.val(),
          ver: ver.val()
        })
        message.channel.send("Wyłączono wiadomość powitalną")
    } else {
      database.ref(`/config/${message.guild.id}`).set({  
          prefix: prefix.val(),
          pingi: pingi.val(),
          util: util.val(),
          wlcm: true,
          wmsg: args.join(" ").replace("welcome",""),
          wchan: `${message.channel.id}`,
          level: level.val(),
          adchan: adchan.val(),
        antiraid:antiraid.val(),
          ver: ver.val()
        })
      message.channel.send("**Wiadomość powitalna:** "+ args.join(" ").replace("welcome",""))
    }
  } else if(args[0] == 'lvl') {
    if(args[1] == 'on'){
      database.ref(`/config/${message.guild.id}`).set({
        prefix: prefix.val(),
          pingi: pingi.val(),
          util: util.val(),
          wlcm: wlcm.val(),
          wmsg: msg.val(),
          wchan: chan.val(),
          level: true,
          adchan: adchan.val(),
        antiraid:antiraid.val(),
          ver: ver.val()
      })
      message.channel.send("Włączono powiadomienie o następnym poziomie")
   } else if(args[1] == 'off'){
       database.ref(`/config/${message.guild.id}`).set({
        prefix: prefix.val(),
          pingi: pingi.val(),
          util: util.val(),
          wlcm: wlcm.val(),
          wmsg: args.join(" ").replace("welcome",""),
          wchan: `${message.channel.id}`,
          level: false,
          adchan: adchan.val(),
        antiraid:antiraid.val(),
          ver: ver.val()
      })
       message.channel.send("Wyłączono powiadomienie o następnym poziomie")
   } else {
      message.reply("Nie podałeś poprawnej opcji")
   }
  } else if(args[0] == 'antiraid'){
      if(args[1] == 'on'){
        database.ref(`/config/${message.guild.id}`).set({
        prefix: prefix.val(),
          pingi: pingi.val(),
          util: util.val(),
          wlcm: wlcm.val(),
          wmsg: msg.val(),
          wchan: chan.val(), 
          level: level.val(),
          adchan: adchan.val(),
          antiraid:true,
          ver: ver.val()
      })
        message.reply("Antiraid został włączony")
      } else if(args[1] == 'off'){
        database.ref(`/config/${message.guild.id}`).set({
        prefix: prefix.val(),
          pingi: pingi.val(),
          util: util.val(),
          wlcm: wlcm.val(),
          wmsg: msg.val(),
          wchan: chan.val(),
          level: level.val(),
          adchan: adchan.val(),
          antiraid:false,
          ver: ver.val()
      })
        message.reply("Antiraid został wyłączony")
      }
 } else if(args[0] == 'adchan'){
  database.ref(`/config/${message.guild.id}`).set({
        prefix: prefix.val(),
          pingi: pingi.val(),
          util: util.val(),
          wlcm: wlcm.val(),
          wmsg: msg.val(),
          wchan: chan.val(),
          level: level.val(),
          adchan: args.join(" ").replace("<#","").replace(">","").replace("adchan",""),
          antiraid:antiraid.val(),
          ver: ver.val()
      })
        message.reply("Kanał z reklamami został wybrany")
 }
        })
        })
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
	name: "settings",
	category:"settings"
}