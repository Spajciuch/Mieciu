const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")
const os = require('os');
const dev = client.users.get('367390191721381890');
const fs = require('fs')
client.commands = new Discord.Collection()
const jedzenie = require('./Losowanie/smacznego.json')
const hej = require('./Losowanie/witaj.json')
const papa = require('./Losowanie/dobranoc.json')

const modp = require ('./Losowanie/test.json')

const patg = require ('./Giphy/pat.json')
const slapg  = require('./Giphy/slap.json')
const punchg = require('./Giphy/punch.json')
const ms = require('ms')
var firebase = require('firebase')
var fireconfig = {
    apiKey: process.env.DATABSEAPI,
    authDomain: process.env.DATABASEDMN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.DATABASEID,
    storageBucket: process.env.DATABASEBCK,
    messagingSenderId: process.env.DATABSESENDID
  };
  firebase.initializeApp(fireconfig);
  var database = firebase.database();
   client.on('message', message => {
       if(message.channel.type == "dm") return
  database.ref(`/config/${message.guild.id}/ver`).once('value')
  .then(snapshot => { 
     if (snapshot.val() !== 3) {
        database.ref(`/config/${message.guild.id}`).set({
          prefix: "m!",
          pingi: true,
          util: true,
          wmsg: "Witaj na serwerze :P",
          wlcm: false,
          wchan: null,
          ver: 3
      })
        message.channel.send("Wygenerowano config serwera, opcje pod komendą settings [wersja configu: 4]")
  }
  })

});
const Music = require('discord.js-musicbot-addon-v2-pl');
client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
 console.log("Dodano mnie na serwer: " + guild.name)
  guild.createRole({
    name: "muted",
    permissions: 0
  })
  console.log('Stworzyłem rolę muted na ' + guild.name + '.')

});
client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`Usunięto mnie z serwera: ${guild.name} (id: ${guild.id})`);
});
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
client.on("ready", () => {
    const channelgeneral = client.channels.find("id", "460799362247950337", "461569251422109726");
     setInterval(function(){
        client.channels.get("459752987317764109").edit({name: `Serwery: ${client.guilds.size}`});
  client.channels.get("459762461369827362").edit({name: `Użytkownicy: ${client.users.size}`});
  client.channels.get("464340088613109760").edit({name: `Uptime: ${ms(client.uptime)}`})
  },1000)
    client.user.setActivity("m!help (odświeżona wersja)", "https://www.twitch.tv/discordapp", {type: "STREAMING"});
    console.log('[client] Logowanie')
    console.log("[client] Wystartowano o " + time)
    console.log(`[client] Zalogowano jako: ${client.user.username}`);
    console.log("[client] Bot obsługuje " + client.users.size + " osób, " +  client.channels.size + " kanałów, " + client.guilds.size + " serwerów");
    let embed = new Discord.RichEmbed()
    .setTitle("Uruchomienie bota")
    .addField("Godzina", time,true)
    .addField("Data", `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`)
    .setColor(config.embed_color)
    channelgeneral.send({embed})
});
client.on("messageUpdate", (oldMessage, newMessage) => {
    if(newMessage.channel.type == "dm") return
  if(!oldMessage.guild) return
  if(!newMessage.guild) return
  if(oldMessage.guild.id !== '415917934268121118' && oldMessage.guild.id !== '423545059666034689') return
  const channel = oldMessage.guild.channels.find('name', 'logi');
  if(!channel) return
  if(oldMessage.content.length <= 0 ) return
  if(newMessage.content.length <= 0) return
  let embed = new Discord.RichEmbed()
  .setColor(config.embed_color)
  .setTitle("Edytowana wiadomość")
  .addField("Autor:", oldMessage.author,true)
  .addField("Kanał:", oldMessage.channel,true)
  .addField("Pierwotna wiadomość:", oldMessage.content)
  .addField("Nowa wiadomość:", newMessage.content)
  channel.send({embed: embed}).catch(error => 0)
database.ref(`/config/${newMessage.guild.id}/prefix`).once('value')
.then(snapshot => { 
  fireprefix = snapshot.val()

if(newMessage.content == '<@423545059666034689>'){
  newMessage.channel.send(fireprefix)
}

  if(!newMessage.content.startsWith(fireprefix)) return;

if (newMessage.author.bot) return;
  let newMessageArray = newMessage.content.split(" ");
    let prefix = fireprefix
    let cmd = newMessageArray[0];
var args = newMessage.content.slice(fireprefix.length).trim().split(/ +/g);;
var command = args.shift().toLowerCase();

var embd = new Discord.RichEmbed()
  let commandfile = client.commands.get(cmd.slice(fireprefix.length));
if(commandfile) commandfile.run(client, newMessage, args);
  if (newMessage.author.bot) return;
  if (newMessage.content.indexOf(fireprefix) !== 0) return;
  if(newMessage.author.bot) return;
if(command == 'settings'){
   if(!newMessage.member.hasPermission('MANAGE_GUILD')) return newMessage.reply('Nie masz uprawnień')
   database.ref(`/config/${newMessage.guild.id}/prefix`).once('value')
      .then(prefix => {
        database.ref(`/config/${newMessage.guild.id}/pingi`).once('value')
        .then(pingi => {
          database.ref(`/config/${newMessage.guild.id}/util`).once('value')
          .then(util => {
            database.ref(`/config/${newMessage.guild.id}/ver`).once('value')
            .then(ver => {
               database.ref(`/config/${newMessage.guild.id}/wlcm`).once('value')
                .then(wlcm => {
                   database.ref(`/config/${newMessage.guild.id}/wmsg`).once('value')
                    .then(msg => {
                   database.ref(`/config/${newMessage.guild.id}/wchan`).once('value')
                     .then(chan => {

    if(!args[0]) {
      let embed = new Discord.RichEmbed()
      .setColor(config.embed_color)
      .setTitle("Ustawienia")
      .addField("Prefix: " + prefix.val(), "Aby zmienić <prefix>settings prefix <nowy prefix>")
      .addField("Komenda do pingowania: " + pingi.val(), "Aby zmienić <prefix>settings pingi <on/off>")
      .addField("Komendy administracyjne: "+util.val(),"Aby zmienić <prefix>settings util <on/off>")
      .addField("Wiadomość powitalna: " + wlcm.val(),"Aby wyłączyć <prefix>settings welcome off\nAby właczyć <prefix>settings welcome <wiadomość powitalna>")
      .setFooter(`Wersja Configu: ${ver.val()}`)
      newMessage.channel.send({embed})
    } else if(args[0] == 'prefix') {
      if(args[1] == '') return newMessage.reply("Podaj Prefix")
      database.ref(`/config/${newMessage.guild.id}`).set({
        prefix: args[1],
        pingi: pingi.val(),
        util: util.val(),
        wlcm: wlcm.val(),
        wmsg: msg.val(),
        wchan: chan.val(),
        ver: ver.val()
      });
      newMessage.channel.send("Nowy Prefix to: " + args[1])
    } else if (args[0] == 'pingi'){
      if(args[1] == 'on'){
        database.ref(`/config/${newMessage.guild.id}`).set({ 
        prefix: prefix.val(),
        pingi: true,
        util: util.val(),
        wlcm: wlcm.val(),
        wmsg: msg.val(),
        wchan: chan.val(),
        ver: ver.val()
        })
        newMessage.channel.send("Komenda do pingowania jest teraz włączona")
      } else if(args[1] == 'off'){
        database.ref(`/config/${newMessage.guild.id}`).set({ 
        prefix: prefix.val(),
        pingi: false,
        util: util.val(),
        wlcm: wlcm.val(),
        wmsg: msg.val(),
        wchan: chan.val(),
        ver: ver.val()
        })
        newMessage.channel.send("Komenda do pingowania jest teraz wyłączona")
      } else {
        newMessage.reply("Nie podałeś właściwej opcji")
      } 
    } else if(args[0] == 'util') {
      if(args[1] == 'on'){
        database.ref(`/config/${newMessage.guild.id}`).set({  
          prefix: prefix.val(),
          pingi: pingi.val(),
          util: true,
             wlcm: wlcm.val(),
          wmsg: msg.val(),
          wchan: chan.val(),
          ver: ver.val()
        })
        newMessage.channel.send("Komendy administracyjne są teraz włączone")
      } else if(args[1] == 'off'){
          database.ref(`/config/${newMessage.guild.id}`).set({  
          prefix: prefix.val(),
          pingi: pingi.val(),
          util: false,
               wlcm: wlcm.val(),
          wmsg: msg.val(),
          wchan: chan.val(),
          ver: ver.val()
        })
          newMessage.channel.send("Komendy administracyjne są teraz wyłączone")
      } else {
        newMessage.channel.send("Nie podałeś poprawnej opcji")
      }
    } else if(args[0] == 'welcome'){
      if(args[1] == 'off'){
        database.ref(`/config/${newMessage.guild.id}`).set({  
          prefix: prefix.val(),
          pingi: pingi.val(),
          util: util.val(),
          wlcm: false,
          wmsg: msg.val(),
          wchan: chan.val(),
          ver: ver.val()
        })
        newMessage.channel.send("Wyłączono wiadomość powitalną")
    } else {
      database.ref(`/config/${newMessage.guild.id}`).set({  
          prefix: prefix.val(),
          pingi: pingi.val(),
          util: util.val(),
          wlcm: true,
          wmsg: args.join(" ").replace("welcome",""),
          wchan: `${newMessage.channel.id}`,
          ver: ver.val()
        })
      newMessage.channel.send("**Wiadomość powitalna:** "+ args.join(" ").replace("welcome",""))
    }
  }
        })
        })
     })
    })
    })
    })    
  })
}
//==================================================================================


/*  if(command == 'note'){

    var a = Math.floor(Math.random() *9) + 1
    var b = Math.floor(Math.random() *9) + 1
    var c = Math.floor(Math.random() *9) + 1
    var d = Math.floor(Math.random() *9) + 1
newMessage.channel.send(`${a}${b}${c}${d} <- oto kod twojej notatki, abyś go nie zapomniał przesyłam ci go na DM`)
newMessage.author.send(`${a}${b}${c}${d} <- Kod do twojej notatki`)

fs.writeFile(`./Notes/${a}${b}${c}${d}.txt`, args.join(" "), (err) => {
  if (err) throw err;
  })
}
if(command == 'get.note') {
  fs.readFile(`./Notes/${args.join(" ")}.txt`, function (err, data){
    let note = new Discord.RichEmbed()
    .setColor(config.embed_color)
    .setThumbnail('https://images.vexels.com/media/users/3/146695/isolated/preview/c31113aebbbf9c844d1caa832ad42cae-pinned-lined-sticky-note-by-vexels.png')
    .addField("Notatka", `${data}`)
    newMessage.channel.send({embed: note})
  })
}
*/ 

})
})
client.on('guildMemberRemove', member => {
  if(member.guild.id == '415917934268121118'){
  const channel = member.guild.channels.find('name', 'witamy-zegnamy');
  const log = member.guild.channels.find('name', 'logi');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`**${member.user.username}** nas opuścił`);
  let embed = new Discord.RichEmbed()
  .setTitle("Osoba wyszła")
  .addField("Osoba:", member,true)
  .addField("Data", `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()} | ${d.getHours()+2}:${d.getMinutes()}`,true)
  .setColor(config.embed_color)
  log.send({embed: embed})
}});
client.on('guildMemberRemove', member => {
  if(member.guild.id == '423545059666034689'){
  const channel = member.guild.channels.find('name', 'witamy-zegnamy');
  const log = member.guild.channels.find('name', 'logi');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;//
  // Send the message, mentioning the member
  channel.send(`**${member.user.username}** nas opuścił`);
  let embed = new Discord.RichEmbed()
  .setTitle("Osoba wyszła")
  .addField("Osoba:", member,true)
  .addField("Data", `${d.getDate()}.${d.getMonth() +1}.${d.getFullYear()} | ${d.getHours()+2}:${d.getMinutes()}`,true)
  .setColor(config.embed_color)
  log.send({embed: embed})
}
});
const snekfetch = require('snekfetch')
//==============================================================================
client.on('guildMemberAdd', async member => {
  if(member.guild.id == '415917934268121118'){
  const channel = member.guild.channels.find('name', 'witamy-zegnamy');

  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  var role = member.guild.roles.find('name', 'Klient')
  channel.send(`${member}, witaj na serwerze Bar\nMamy nadzieję, że zostaniesz z nami na długo\nMożesz się przedstawić na kanale: <#425337860766302220>\nMiłego pobytu :P`);
  member.addRoles(role)
  const logi = member.guild.channels.find('name', 'logi')
  if(!logi) return
  var hr = member.joinedAt.getHours()+ 2
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(700, 250)
const ctx = canvas.getContext('2d')
const { body: avatar } = await snekfetch.get(member.user.displayAvatarURL);
const bkg = await loadImage("./welcome.png");

  /**/


  ctx.drawImage(bkg, 0, 0, canvas.width, canvas.height);
    ctx.font = `70px "DK Grumpy Tiger"`
  ctx.fillStyle="#ff009c";
  ctx.textAlign="center";
  ctx.fillText(member.user.username, 500, 150)


ctx.beginPath();
  ctx.arc(135, 124, 93, 0, Math.PI * 2, false);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 9;
  ctx.stroke();
  ctx.closePath();
  ctx.clip();

  const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
  const avt = await loadImage(buffer);
  ctx.drawImage(avt, 37, 26, 194, 194);
    const attachment = new Discord.Attachment(canvas.toBuffer(), 'meme.png');
  channel.send(attachment);
  let embed = new Discord.RichEmbed()
  .setTitle("Nowa osoba")
  .addField("Użytkownik: ",member,true)
  .addField("Data:  ", member.joinedAt.getDate() + '.'+ member.joinedAt.getMonth() +1+'.'+ member.joinedAt.getFullYear() + ' | '+ hr + ":" + member.joinedAt.getMinutes(), true)
  .setColor(config.embed_color)
  logi.send({embed: embed}).catch(error => 0)
}
});
client.on('guildMemberAdd', async member => {
  if(member.guild.id !== '423545059666034689') return
    const channel = member.guild.channels.find('name', 'witamy-zegnamy');

    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    var role = member.guild.roles.find('name', 'Użytkownik')
    channel.send(`${member}, witaj na serwerze Mieciu & Marsh Dev Center\nJest to serwer pomocy Miecia i Marshmallowa\nMożesz tu również spytać o pomoc w programowaniu botów\nMiłego pobytu :wink:`);
    member.addRoles(role)
    const logsy = member.guild.channels.find('name', 'logi')
    if(!logsy) return
    var hr = member.joinedAt.getHours()+ 2
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(700, 250)
const ctx = canvas.getContext('2d')
const { body: avatar } = await snekfetch.get(member.user.displayAvatarURL);
const bkg = await loadImage("./photos/giphy.gif");

  /**/


  ctx.drawImage(bkg, 0, 0, canvas.width, canvas.height);
    ctx.font = `70px "DK Grumpy Tiger"`
  ctx.fillStyle="#ff009c";
  ctx.textAlign="center";
  ctx.fillText(member.user.username, 500, 150)


ctx.beginPath();
  ctx.arc(135, 124, 93, 0, Math.PI * 2, false);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 9;
  ctx.stroke();
  ctx.closePath();
  ctx.clip();

  const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
  const avt = await loadImage(buffer);
  ctx.drawImage(avt, 37, 26, 194, 194);
    const attachment = new Discord.Attachment(canvas.toBuffer(), 'meme.png');
  channel.send(attachment);
    let embed = new Discord.RichEmbed()
    .setTitle("Nowa osoba")
    .addField("Użytkownik: ",member,true)
    .addField("Data:  ", member.joinedAt.getDate() + '.'+ member.joinedAt.getMonth() +1+'.'+ member.joinedAt.getFullYear() + ' | '+ hr + ":" + member.joinedAt.getMinutes(), true)
    .setColor(config.embed_color)
    logsy.send({embed: embed})
});
client.on('roleCreate', role => {
  if(role.guild.id !== '415917934268121118' && role.guild.id !=='423545059666034689') return
  const channel = role.guild.channels.find('name', 'logi');
  if(!channel) return
  let embed = new Discord.RichEmbed()
  .setTitle("Nowa rola")
  .setColor(config.embed_color)
  .addField("Rola:", role ,true)
  channel.send({embed: embed})
});
client.on("messageDelete",async message => {
if(message.guild.id !== '415917934268121118' && message.guild.id !=='423545059666034689') return
const channel = message.guild.channels.find('name', 'logi');
if(!channel) return
if(!message.content) return
if(!message) return

let embed = new Discord.RichEmbed()
.setTitle("Usunięta wiadomość")
.setColor(config.embed_color)
.addField("Autor: ",message.author ,true)
.addField("Kanał:", message.channel,true)
.addField("Treść: ",message.content)
channel.send({embed: embed})
});
fs.readdir(`./commands/`,(err, files)=>{
  if(err) console.log(err)
  let jsfile = files.filter(f => f.split(".").pop() == "js")
  if(jsfile.length <= 0){
    console.log("Nie znaleziono komend!")
  }
  jsfile.forEach((f,i)=> {
    let props = require(`./commands/${f}`)
    console.log(`[Załadowano] ${f}`)
    client.commands.set(props.help.name, props)
  })
})

client.on("voiceStateUpdate", (oldMember, newMember) => {

  if(oldMember.guild.id !== '415917934268121118' && oldMember.guild.id !=='423545059666034689') return
  var channel = oldMember.guild.channels.find("name", "logi")
  if(!channel) return

  if(!newMember.voiceChannel){
    let leave = new Discord.RichEmbed()
    .setColor(config.embed_color)
    .setTitle("Opuszczenie kanału głosowego")
    .addField("Kanał", oldMember.voiceChannel.name,true)
    .addField("Osoba",newMember ,true)
    channel.send({embed: leave})
  }
  else if(!oldMember.voiceChannel && newMember.voiceChannel){
    if(!newMember) return
    let join = new Discord.RichEmbed()
    .setColor(config.embed_color)
    .setTitle("Dołączenie na kanał głosowy")
    .addField("Kanał", newMember.voiceChannel.name,true)
    .addField("Osoba",newMember ,true)
    channel.send({embed: join})

}
  else if(oldMember.voiceChannel !== newMember.voiceChannel) {
    if(!oldMember) return
    if(!newMember) return
    let swit = new Discord.RichEmbed()
    .setColor(config.embed_color)
    .setTitle("Przełączenie kanału głosowego")
    .addField("Pierwszy Kanał", oldMember.voiceChannel.name)
    .addField("Drugi Kanał", newMember.voiceChannel.name,true)
    .addField("Osoba",newMember ,true)
    channel.send({embed: swit})

}
})

const Jimp = require("jimp");
client.on("message", async message => {
    if(message.channel.type == "dm") return
  //================================================================================
  var fireprefix =''
database.ref(`/config/${message.guild.id}/prefix`).once('value')
.then(snapshot => { 
  fireprefix = snapshot.val()
})
    const args = message.content.slice(fireprefix.length).trim().split(/ +/g);
    if(message.author.bot) return
 if(message.channel.name !== 'clev') return
  /* const Simsimi = require('simsimi');

 var simsimi = new Simsimi({
   key: '58a88d4c-9fe1-402c-942e-be0ec1ab3c32'
 })
 simsimi.listen(args.join(" "), function(err, msg){
   if(err) return message.channel.send(err);
   message.channel.send(msg);
 })*/
 const superagent = require('superagent')
 let {body} = await superagent
 .get(`https://some-random-api.ml/chatbot/?message=${args.join("+")}`)
 message.channel.send(body.response)
});
client.on("message", async message => {
  client.channels.get("459752987317764109").edit({name: `Serwery: ${client.guilds.size}`});
  client.channels.get("459762461369827362").edit({name: `Użytkownicy: ${client.users.size}`});
  client.channels.get("464340088613109760").edit({name: `Uptime: ${ms(client.uptime)}`})
  //================================================================================
  var fireprefix =''
  if(message.channel.type == "dm") return
database.ref(`/config/${message.guild.id}/prefix`).once('value')
.then(snapshot => { 
  fireprefix = snapshot.val()

if(message.content == '<@423196130508275716>'){
  message.channel.send(fireprefix)
}

  if(!message.content.startsWith(fireprefix)) return;

if (message.author.bot) return;
  let messageArray = message.content.split(" ");
    let prefix = fireprefix
    let cmd = messageArray[0];
var args = message.content.slice(fireprefix.length).trim().split(/ +/g);;
var command = args.shift().toLowerCase();

var embd = new Discord.RichEmbed()
  let commandfile = client.commands.get(cmd.slice(fireprefix.length));
if(commandfile) commandfile.run(client, message, args);
  if (message.author.bot) return;
  if (message.content.indexOf(fireprefix) !== 0) return;
  if(message.author.bot) return;
if(command == 'settings'){
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
if(args[0] && !message.member.hasPermission('MANAGE_GUILD')) return message.reply('Nie masz uprawnień')
    if(!args[0]) {
      let embed = new Discord.RichEmbed()
      .setColor(config.embed_color)
      .setTitle("Ustawienia")
      .addField("Prefix: " + prefix.val(), "Aby zmienić <prefix>settings prefix <nowy prefix>")
      .addField("Komenda do pingowania: " + pingi.val(), "Aby zmienić <prefix>settings pingi <on/off>")
      .addField("Komendy administracyjne: "+util.val(),"Aby zmienić <prefix>settings util <on/off>")
      .addField("Wiadomość powitalna: " + wlcm.val(),"Aby wyłączyć <prefix>settings welcome off\nAby właczyć <prefix>settings welcome <wiadomość powitalna>")
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
          ver: ver.val()
        })
          message.channel.send("Komendy administracyjne są teraz wyłączone")
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
          ver: ver.val()
        })
      message.channel.send("**Wiadomość powitalna:** "+ args.join(" ").replace("welcome",""))
    }
  }
        })
        })
     })
    })
    })
    })    
  })
}
//==================================================================================


/*  if(command == 'note'){

    var a = Math.floor(Math.random() *9) + 1
    var b = Math.floor(Math.random() *9) + 1
    var c = Math.floor(Math.random() *9) + 1
    var d = Math.floor(Math.random() *9) + 1
message.channel.send(`${a}${b}${c}${d} <- oto kod twojej notatki, abyś go nie zapomniał przesyłam ci go na DM`)
message.author.send(`${a}${b}${c}${d} <- Kod do twojej notatki`)

fs.writeFile(`./Notes/${a}${b}${c}${d}.txt`, args.join(" "), (err) => {
  if (err) throw err;
  })
}
if(command == 'get.note') {
  fs.readFile(`./Notes/${args.join(" ")}.txt`, function (err, data){
    let note = new Discord.RichEmbed()
    .setColor(config.embed_color)
    .setThumbnail('https://images.vexels.com/media/users/3/146695/isolated/preview/c31113aebbbf9c844d1caa832ad42cae-pinned-lined-sticky-note-by-vexels.png')
    .addField("Notatka", `${data}`)
    message.channel.send({embed: note})
  })
}
*/ 

})
});
const music = new Music(client, {

   prefix: config.prefix,
  youtubeKey: config.yt,
  embedColor: 7506394,
  enableQueueStat: true,
  botAdmins: [316226442721755137, 367390191721381890],
  clearOnLeave: true,
  disableVolume: true,
  djRole: "@everyone"

});
//=================================================================================
client.on('guildMemberAdd', async member => { 
  database.ref(`/config/${member.guild.id}/wlcm`).once('value')
    .then(on => { if(on.val() == false) return 
      database.ref(`/config/${member.guild.id}/wmsg`).once('value')
        .then(msg => { 
        database.ref(`/config/${member.guild.id}/wchan`).once('value')
          .then(chan => { 
      client.channels.get(chan.val()).send(member + ", " +msg.val())
  }) })
})
})

client.login(process.env.TOKEN)
