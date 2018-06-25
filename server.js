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
const rand = require('./Losowanie/8ball.json')
const modp = require ('./Losowanie/test.json')
const hugg = require ('./Giphy/hug.json')
const patg = require ('./Giphy/pat.json')
const slapg  = require('./Giphy/slap.json')
const punchg = require('./Giphy/punch.json')
const Music = require('discord.js-musicbot-addon-v2');

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

    client.user.setActivity("m!help -general", {type: "STREAMING"});
    console.log('[client] Logowanie')
    console.log("[client] Wystartowano o " + time)
    console.log(`[client] Zalogowano jako: ${client.user.username}`);
    console.log("[client] Bot obsługuje " + client.users.size + " osób, " +  client.channels.size + " kanałów, " + client.guilds.size + " serwerów");
//\x1b[36m%s\x1b[0m
});
client.on("messageUpdate", (oldMessage, newMessage) => {
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
  .addField("Data", `${d.getDay()}.${d.getMonth()}.${d.getFullYear()} | ${d.getHours()+2}:${d.getMinutes()}`,true)
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
  .addField("Data", `${d.getDay()}.${d.getMonth()}.${d.getFullYear()} | ${d.getHours()+2}:${d.getMinutes()}`,true)
  .setColor(config.embed_color)
  log.send({embed: embed})
}
});//==============================================================================
client.on('guildMemberAdd', member => {
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

  let embed = new Discord.RichEmbed()
  .setTitle("Nowa osoba")
  .addField("Użytkownik: ",member,true)
  .addField("Data:  ", member.joinedAt.getDay() + '.'+ member.joinedAt.getMonth() +'.'+ member.joinedAt.getFullYear() + ' | '+ hr + ":" + member.joinedAt.getMinutes(), true)
  .setColor(config.embed_color)
  logi.send({embed: embed}).catch(error => 0)
}
});
client.on('guildMemberAdd', member => {
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

    let embed = new Discord.RichEmbed()
    .setTitle("Nowa osoba")
    .addField("Użytkownik: ",member,true)
    .addField("Data:  ", member.joinedAt.getDay() + '.'+ member.joinedAt.getMonth() +'.'+ member.joinedAt.getFullYear() + ' | '+ hr + ":" + member.joinedAt.getMinutes(), true)
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
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
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
  client.channels.get("459772201738960906").edit({name: `Serwery: ${client.guilds.size}`});
  client.channels.get("459772256525221908").edit({name: `Użytkownicy: ${client.users.size}`});
  //================================================================================
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(message.author.bot) return;

  let prefix = config.prefix
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];

if(command == 'cmd.list'){
  fs.readdir(`./commands/`,(err, files)=>{
    if(err) console.log(err)
    let jsfile = files.filter(f => f.split(".").pop() == "js")
    jsfile.forEach((f,i)=> {
      let props = require(`./commands/${f}`)

      let embed = new Discord.RichEmbed()
      .addField("Komendy",`${f}`)
      .setColor(config.embed_color)
      .setFooter("Komendy w [osobnych plikach]")
      message.channel.send({embed: embed})
    })

  })

}
  let commandfile = client.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(client ,message,args);
//==================================================================================

      if(command == 'emoji.list'){
          const emojiList = message.guild.emojis.map(e=>'\\'+ e.toString()).join(" ");
          message.channel.send(emojiList);
        }
  if(command == 'create.emoji'){
    if(!message.member.roles.some(r=>["adm","Admin","Administrator", "Moderator", "podkomisarze w Hyrule", "agent FBI w Hyrule", "właściciele", "Administracja"].includes(r.name)))
    return message.reply("Nie masz uprawnień")
    message.guild.createEmoji(args[0], args[1]) .then(emoji => console.log(`Utworzono nowe emoji na serwerze ${message.guild.name} o nazwie: ${emoji.name}`)) .catch(console.error);
  }
if(command == 'profile'){
  let profile = new Discord.RichEmbed()
}

  if(command == 'qr') {
    var arg = args.join(" ")
    var qr = require('qr-image');

    var qr_svg = qr.image(arg, {
      type: 'png'
    });
    qr_svg.pipe(require('fs').createWriteStream(args.join("-").replace(/\//g, 'slash').replace(/\./g, 'dot') + '.png'));

    var svg_string = qr.imageSync(arg, {
      type: 'png'
    });
    message.channel.send('Gotowe', {
      file: args.join("-").replace(/\//g, 'slash').replace(/\./g, 'dot') + '.png'
    })
  }
  if(command == 'note'){

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
/*if(command =='changelog') {
  var change = require ('./Notes/changelog.json')
  let changelog = new Discord.RichEmbed()
  .setColor(config.embed_color)
  .addField("Changelog Miecia", `Wersja: ${change.version}\nNazwa update: ${change.update}\nOpis: ${change.description}`)
  .setThumbnail("https://cdn.discordapp.com/avatars/423196130508275716/65a17d5274f3db851ef9ab5f3ed13ea1.png?size=2048");
  message.channel.send({embed: changelog})
}*/
  if(command == 'save'){

  fs.writeFile('./Serwery/message.txt', 'Hello Node.js', (err) => {
    if (err) throw err;

  });
}//===================================================================
  if (command === 'pickle') {
    let member = args[0];
    if (!member) {
        fs.readFile('./Pickle/' + message.author.id + '.txt', function (err, data) {
            if (err) {
                message.channel.startTyping()
                var ile = Math.floor(Math.random() *100) + 1
                fs.writeFile('./Pickle/' + message.author.id + '.txt', ile, function (err) {
                    if (err) throw err;
                    message.channel.send(`**${message.author.username}**, rozmiar twojego wynosi: ${ile}cm`)
                });
                message.channel.stopTyping();

            } else if (data.toString() !== '') {
                message.channel.send(`**${message.author.username}**, rozmiar twojego wynosi: ${data.toString()}cm`)
            }
        });
    } else {
        fs.readFile('./Pickle/' +  message.mentions.members.first().user.id + '.txt', function (err, data) {
            if (err) {
                message.channel.startTyping()
                var ile = Math.floor(Math.random() *100) + 1
                fs.writeFile('./Pickle/' + message.mentions.members.first().user.id + '.txt', ile , function (err) {
                    if (err) throw err;
                    message.channel.send(`Rozmiar **${message.mentions.members.first().user.username}** wynosi: ${ile}cm`)
                });
                message.channel.stopTyping();

            } else {
                if (data.toString() !== '') {
                    message.channel.send(`Rozmiar **${message.mentions.members.first().user.username}** wynosi:  ${data.toString()}cm`)
                }
            }
        });
    }
}
//============================================EKONOMIA===================================
if (command === 'balance') {
  let member = args[0];
  if (!member) {
      fs.readFile('./Bank/' + message.author.id + '.txt', function (err, data) {
          if (err) {
              message.channel.startTyping()
              message.channel.send("Zakładanie konta, proszę czekać...")
              fs.writeFile('./Bank/' + message.author.id + '.txt', '20', function (err) {
                  if (err) throw err;
                  message.channel.send(`**${message.author.username}**, gotowe! masz 20 M$`)
              });
              message.channel.stopTyping();

          } else if (data.toString() !== '') {
              message.channel.send(`**${message.author.username}**, twój stan konta wynosi: ${data.toString()}M$`)
          }
      });
  } else {
      fs.readFile('./Bank/' +  message.mentions.members.first().user.id + '.txt', function (err, data) {
          if (err) {
              message.channel.startTyping()
              message.channel.send("On nie ma konta, proszę czekać...")
              fs.writeFile('./Bank/' + message.mentions.members.first().user.id + '.txt', '20' , function (err) {
                  if (err) throw err;
                  message.channel.send(`Stan konta **${message.mentions.members.first().user.username}** wynosi: 20M$`)
              });
              message.channel.stopTyping();

          } else {
              if (data.toString() !== '') {
                  message.channel.send(`Stan konta **${message.mentions.members.first().user.username}** wynosi:  ${data.toString()}M$`)
              }
          }
      });
  }
}



if(command === 'transfer') {
var numer = args[1]
var osoba = args[0].replace("@", "").replace("<", "").replace(">", "")
await fs.readFile('./Bank/' + message.author.id + '.txt', function (err, data) {
      if (err) {
      message.channel.startTyping()
      message.channel.send("Nie masz konta, czekaj...")
      fs.writeFile('./Bank/' + message.author.id + '.txt', '20', function (err) {
          if (err) throw err;
          message.channel.send('Gotowe! Masz 20 M$')
        });
      message.channel.stopTyping();
      } else {
     if(data.toString() !== '') {
     mcoinsy = data.toString()
     }
      }
if(Number(numer) <= Number(mcoinsy)) {
  fs.writeFile('./Bank/' + message.author.id + '.txt', Number(mcoinsy) - Number(numer), function (err) {
    if (err) throw err;
  })
  fs.readFile('./Bank/' + osoba + '.txt', function (err, data) {
    if (err) {
      message.channel.startTyping()
      message.channel.send("On nie ma konta, czekaj...")
      fs.writeFile('./Bank/' + osoba + '.txt', '20', function (err) {
          if (err) throw err;
          message.channel.send('Gotowe! Teraz ma 20M$, możesz przelać')
        });
      message.channel.stopTyping();
      } else {
     if(data.toString() !== '') {
     mcoinsy = data.toString()
     }
      }
  fs.writeFile('./Bank/' + osoba + '.txt', Number(mcoinsy) + Number(numer), function (err) {
              if (err) throw err;
          })
    message.reply('Przelano')
})
}
})
}

//=================================EKONOMIA(UP)===============================================
  if(command == 'set.game') {
    if(message.author.id !== '367390191721381890') return message.reply("Nie masz uprawnień")
    client.user.setActivity(args.join(" "), {type: "STREAMING"});
  }

  if(command == 'set.topic'){
    if(!message.member.roles.some(r=>["Admin","Administrator", "Moderator", "podkomisarze w Hyrule", "agent FBI w Hyrule", "właściciele", "Administracja"].includes(r.name)))
      return message.reply("Nie masz uprawnień");

    message.channel.setTopic(args.join(" "))
  .then(updated =>
    console.log(`Nowy temat kanału ${message.channel.name} [${message.guild.name}] to ${updated.topic}`))
  .catch(console.error);

  }
if(command == 'start.typing')  {
  message.channel.startTyping();
  console.log(`Zaczęto pisanie na [${message.guild.name}] #${message.channel.name}`)
}
if(command == 'stop.typing') {
  console.log(`Skończono pisać na [${message.guild.name}] #${message.channel.name}`)
   message.channel.stopTyping();
  }

 if(command == 'username') {
  if(message.author.id !== '367390191721381890') return message.reply("Nie masz uprawnień")
  client.user.setUsername(args.join(" "))
  console.log(`Zmieniono mój nick`)
  message.channel.send("Wykonano")
 }
  if(command == 'av.update'){
    client.user.setAvatar('./avatar.png')
  .then(user => console.log(`Avatar zaktualizowany`))
  .catch(console.error);
  }
  if (command === 'new.idea') {
    const user = client.users.get('367390191721381890')
    user.send(message.author + ' Pisze: ' + args.join(" "))
  }
  if (command === 'bugreport') {
    const user = client.users.get('367390191721381890')
    user.send(message.author + ' Zgłasza: ' + args.join(" "))
  }

  if(command === 'sayd')
  {

if (message.content.includes('@everyone')) return message.reply("Mnie nie wrobisz")
if (message.content.includes('@here')) return message.reply("Mnie nie wrobisz")
   message.delete().catch(O_o => {});
  let text = args.join(" ")
  message.delete().catch(O_o => {});
  message.channel.send(text);

  }
  if(command === 'say')
  {
    if (message.content.includes('@everyone')) return message.reply("Mnie nie wrobisz")
    if (message.content.includes('@here')) return message.reply("Mnie nie wrobisz")
    let text = args.join(" ")
    message.channel.send(text);

  }
if(command == 'os.ping') {
  if(message.guild.id =='439480280269717526' || message.guild.id == '365970117772705792' || message.guild.id == '403868146617942018' || message.guild.id == '418157358628339713')  return message.reply("Ten moduł jest tu wyłączony")
  if(args[0] == '@everyone') return;
  if(args[0] == '@here') return;
  var kto = args[0];
  var ile = args[1];
  for (i = 1; i <= ile; i++) {
    message.channel.send(kto +' '+ i + '/' + ile);
}
}
if(command == 'avatar'){
    if(message.mentions.members.first()) {
      let avatar = new Discord.RichEmbed()
      .setColor(config.embed_color)
      .addField("Avatar użytkownika " + message.mentions.members.first().user.username)
      .setImage(message.mentions.members.first().user.avatarURL)


      message.channel.send({embed: avatar});
      await Jimp.read(message.mentions.members.first().user.avatarURL).then(async function (image) {
        // do stuff with the image
        await image.write("./Profile/avatar/" + message.mentions.members.first().user.id + ".png")
      }).catch(function (err) {
      });
    }
    else {
      let avatar =  new Discord.RichEmbed()
      .setColor(config.embed_color)
      .addField("Twój Avatar")
      .setImage(message.author.avatarURL)

      message.channel.send({embed: avatar})
      await Jimp.read(message.author.avatarURL).then(async function (image) {
        // do stuff with the image
        await image.write("./Profile/avatar/" + message.author.id + ".png")
      }).catch(function (err) {
      });
    }
  }

  if(command == 'info') {
  var memory = os.totalmem() / 1000000000
  var all_memory = Math.round(memory)
  var freememory = os.freemem() / 1000000000
  var all_freememory = Math.round(freememory)

   let info = new Discord.RichEmbed()
   .setAuthor("Informacje o bocie")
   .setColor(config.embed_color)
   .addField("Bot obsługuje ", `${client.users.size} osób, ${client.channels.size} kanałów, ${client.guilds.size} serwerów`)
   .addField("Informacje o systemie", `**Bot działa na:** ${os.hostname()}\n**System:** ${os.type()}\n**Procesor:** Intel(R) Xeon(R) CPU E5-2670 v2 @ 2.50GHz (${os.arch()}) \n**Pamięć RAM:** ${all_memory} GB (wolna: ${all_freememory} GB)\n**Wersja Node:** 10.2.1`)
   .addField("Ścieżka do pliku", `**Bot znajduje się w folderze:** ${__dirname}\n**Plik Główny:** ${__filename}`)
   .addField("Bot został włączony",` ${day} o ${time}`)
   message.channel.send({embed: info})
  }
    if (command === "kick") {
      if(!message.member.roles.some(r=>["Admin","Administrator", "Moderator", "podkomisarze w Hyrule", "agent FBI w Hyrule", "właściciele", "Administracja"].includes(r.name)))
    return message.reply("Nie masz uprawnień")

      if (!message.member.roles.some(r => ["Admini", "Moderator", "DEV", "Administracja", "Właściciel"].includes(r.name)))
        return message.reply("Sorry, you don't have permissions to use this!");

      let member = message.mentions.members.first();
      if (!member)
        return message.reply("Oznacz właściwą osobę");
      if (!member.kickable)
        return message.reply("Nie mogę wywalić tej osoby, czy mam wszystkie uprawnienia");


      let reason = args.slice(1).join(' ');
      if(!reason) reason = " `Nie podano powodu`";

      await member.kick(reason)
        .catch(error => message.reply(`${message.author} Nie mogłem wykopać usera, powód: ${error}`));
      const embed = {
        "title": "Kick",
        "description": `Osoba: ${member.user.username}\nWywalono przez: ${message.author.username}\nPowód: ${reason}`,
        "color": 43519,
        "timestamp": "",
        "footer": {
          "icon_url": "https://cdn.discordapp.com/avatars/423196130508275716/65a17d5274f3db851ef9ab5f3ed13ea1.jpg?size=2048",
          "text": "Mieciu"
        },
        "thumbnail": {
          "url": message.mentions.members.first().user.avatarURL
        }
      };
      message.channel.send({ embed })
      message.memeber.send({embed});
    }
if(command == "ban") {

  if(!message.member.roles.some(r=>["Admin","Administrator", "Moderator", "podkomisarze w Hyrule", "agent FBI w Hyrule", "właściciele", "Administracja"].includes(r.name)))
    return message.reply("Nie masz uprawnień")
    let member = message.mentions.members.first();
  if(!member)
    return message.reply("Oznacz osobę do zbanowania");
  if(!member.bannable)
    return message.reply("Nie mogę go zbanować, przesuń moją rolę na samą górę i upewnij się, że mam wszystkie uprawnienia");
  let reason = args.slice(1).join(' ');
  if(!reason) reason = " `Nie podano powodu`";

  await member.ban(reason)
  const embed = {
    "title": "Ban",
    "description": `Osoba: ${member.user.username}\nZbanowano przez: ${message.author.username}\nPowód: ${reason}`,
    "color": 43519,
    "timestamp": "",
    "footer": {
      "icon_url": "https://cdn.discordapp.com/avatars/423196130508275716/65a17d5274f3db851ef9ab5f3ed13ea1.jpg?size=2048",
      "text": "Mieciu"
    },
    "thumbnail": {
      "url": message.mentions.members.first().user.avatarURL
    }
  };

  message.channel.send({ embed })
  message.memeber.send({embed});
    }

if(command == 'search') {
  var Search = require('bing.search');
  var util = require('util');

  search = new Search('account_key_123');

  search.web(args.join(" "),
    {top: 5},
    function(err, results) {
      console.log(util.inspect(results,
        {colors: true, depth: null}));
    }
  );
}

if(command == '8ball') {
  var odp = Math.floor(Math.random() *11) + 1
  let ball = new Discord.RichEmbed()
  .setTitle("8ball")
  .setThumbnail(`http://icons.iconarchive.com/icons/barkerbaggies/pool-ball/256/Ball-8-icon.png`)
  .setColor(config.embed_color)
  .addField("Pytanie", args.join(" "))
  .addField("Odpowiedź",rand[odp-1])
  .setFooter("8ball")
  if(message.author.bot) return;
message.channel.send({embed: ball})
}
if(command == 'choose') {
  var odp = Math.floor(Math.random() *2) + 1
  var a = args.join(" ").split(" | ")[0]
  var b = args.join(" ").split(" | ")[1]
  var odp2
  switch(odp) {
    case 1:
    odp2 = a;
    break;

    case 2:
    odp2 = b;
  }
  message.channel.send(`Wybieram ${odp2}`)
}

if(command == 'vote') {

  message.channel.send("Test")
  .then(message => {
    message.react("👌")
    message.react("❌")
    const filter = (reaction, user) => {
      return reaction.emoji.name === '👌' && user.id === message.author.id;
  };

  message.awaitReactions(filter, { max: 4, time: 60000, errors: ['time'] })
      .then(collected => console.log(collected.size))
      .catch(collected => {
          console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
      });
  });
}
if(command == 'invite'){

  message.react('👌')
  message.author.send('https://discordapp.com/api/oauth2/authorize?client_id=423196130508275716&permissions=8&scope=bot')
  console.log(`${message.author.username.toString()} użył komendy m!invite`)

}
if(command === 'emojify') {
  message.channel.send(args.join(" ").toUpperCase().replace(/A/g, ":regional_indicator_a: ").replace(/B/g, ":regional_indicator_b: ").replace(/C/g, ":regional_indicator_c: ").replace(/D/g, ":regional_indicator_d: ").replace(/E/g, ":regional_indicator_e: ").replace(/F/g, ":regional_indicator_f: ").replace(/G/g, ":regional_indicator_g: ").replace(/H/g, ":regional_indicator_h: ").replace(/I/g, ":regional_indicator_i: ").replace(/J/g, ":regional_indicator_j: ").replace(/K/g, ":regional_indicator_k: ").replace(/L/g, ":regional_indicator_l: ").replace(/M/g, ":regional_indicator_m: ").replace(/N/g, ":regional_indicator_n: ").replace(/O/g, ":regional_indicator_o: ").replace(/P/g, ":regional_indicator_p: ").replace(/Q/g, ":regional_indicator_q: ").replace(/R/g, ":regional_indicator_r: ").replace(/S/g, ":regional_indicator_s: ").replace(/T/g, ":regional_indicator_t: ").replace(/U/g, ":regional_indicator_u: ").replace(/V/g, ":regional_indicator_v: ").replace(/W/g, ":regional_indicator_w: ").replace(/X/g, ":regional_indicator_x: ").replace(/Y/g, ":regional_indicator_y: ").replace(/Z/g, ":regional_indicator_z: "))
}
if(command === 'emojifyd') {
  message.delete().catch(O_o => {});
  message.channel.send(args.join(" ").toUpperCase().replace(/A/g, ":regional_indicator_a: ").replace(/B/g, ":regional_indicator_b: ").replace(/C/g, ":regional_indicator_c: ").replace(/D/g, ":regional_indicator_d: ").replace(/E/g, ":regional_indicator_e: ").replace(/F/g, ":regional_indicator_f: ").replace(/G/g, ":regional_indicator_g: ").replace(/H/g, ":regional_indicator_h: ").replace(/I/g, ":regional_indicator_i: ").replace(/J/g, ":regional_indicator_j: ").replace(/K/g, ":regional_indicator_k: ").replace(/L/g, ":regional_indicator_l: ").replace(/M/g, ":regional_indicator_m: ").replace(/N/g, ":regional_indicator_n: ").replace(/O/g, ":regional_indicator_o: ").replace(/P/g, ":regional_indicator_p: ").replace(/Q/g, ":regional_indicator_q: ").replace(/R/g, ":regional_indicator_r: ").replace(/S/g, ":regional_indicator_s: ").replace(/T/g, ":regional_indicator_t: ").replace(/U/g, ":regional_indicator_u: ").replace(/V/g, ":regional_indicator_v: ").replace(/W/g, ":regional_indicator_w: ").replace(/X/g, ":regional_indicator_x: ").replace(/Y/g, ":regional_indicator_y: ").replace(/Z/g, ":regional_indicator_z: "))
}

if(command == 'test') {
  message.channel.send(message.mentions.members.first().user.id)
}
var giphy = require('giphy-api')("IL0Gy0XLlUmTTaAIQkF3wWiItrT8ijhZ");
//Czynności? ================================================================================
const GiphyRandom = require('giphy-random');
const giphyRandom = new GiphyRandom({ apiKey: 'IL0Gy0XLlUmTTaAIQkF3wWiItrT8ijhZ' });
if(command == 'gif'){

giphyRandom.get({ tag: args.join(" ")})
.then(data => message.channel.send(`https://media.giphy.com/media/${data.id}/giphy.gif`))
.catch(e => console.error(e.message));
}
  if(command === 'hug')
  {

    if(message.mentions.members.first()) {
      var odp = Math.floor(Math.random() *7) + 1

    let person = args.join(" ")
   let hug = new Discord.RichEmbed()
    .setColor(config.embed_color)
   .addField("Hug",message.author.username.toString() + " przytulił " + message.mentions.members.first().user.username )
   .setImage(hugg[odp-1]);
     message.channel.send({
      embed: hug
    });
  }
else {
  var odp = Math.floor(Math.random() *7) + 1
  let person = args.join(" ")
  let hug = new Discord.RichEmbed()
   .setColor(config.embed_color)
  .addField("Hug",message.author.username.toString() + " przytulił " + person)
  .setImage(hugg[odp-1]);
    message.channel.send({
     embed: hug
   });

}
}
  if(command === 'pat')
  {
    var odp = Math.floor(Math.random() *13) + 1
    if(message.mentions.members.first()) {
    let person = args.join(" ")
   let pat = new Discord.RichEmbed()
    .setColor(config.embed_color)
   .addField("Pat Pat", message.author.username.toString() + " patnął " + message.mentions.members.first().user.username )
   .setImage(patg[odp-1]);
     message.channel.send({
      embed: pat
    });
  }
else {
  var odp = Math.floor(Math.random() *13) + 1
  let person = args.join(" ")
  let pat = new Discord.RichEmbed()
   .setColor(config.embed_color)
  .addField("Pat Pat",message.author.username.toString() + " patnął "  + person)
  .setImage(patg[odp-1]);
    message.channel.send({
     embed: pat
   });
}
}
  if(command === 'slap'){
    var odp = Math.floor(Math.random() *7) + 1
  if(message.mentions.members.first()) {
  {
    let person = args.join(" ")
   let slap = new Discord.RichEmbed()
    .setColor(config.embed_color)
   .addField("Slap",message.author.username.toString() + " slapnął " + message.mentions.members.first().user.username)
   .setImage(slapg[odp-1]);
     message.channel.send({
      embed: slap
    });
  }
}
else {
  var odp = Math.floor(Math.random() *7) + 1
  let person = args.join(" ")
let slap = new Discord.RichEmbed()
 .setColor(config.embed_color)
.addField("Slap",message.author.username.toString() + " slapnął " + person)
.setImage(slapg[odp-1]);
  message.channel.send({
   embed: slap
 });
}
}
  if(command === 'punch')
  {
    var odp = Math.floor(Math.random() *7) + 1
    if(message.mentions.members.first()) {
    let person = args.join(" ")
   let punch = new Discord.RichEmbed()
    .setColor(config.embed_color)
   .addField("Punch",message.author.username.toString() + " przypierdolił " + message.mentions.members.first().user.username)
   .setImage(punchg[odp-1]);
     message.channel.send({
      embed: punch
    });
  }
else {
  var odp = Math.floor(Math.random() *7) + 1
    let person = args.join(" ")
   let punch = new Discord.RichEmbed()
    .setColor(config.embed_color)
   .addField("Punch",message.author.username.toString() + " przypierdolił " + person)
   .setImage(punchg[odp-1]);
     message.channel.send({
      embed: punch
    });
  }
}

  //Ściśle tajne ================================================================================
var destroy = 'true'

  if(command === 'deletethischannel'){

      if (destroy === 'true') {message.channel.delete().catch(O_o => {});

    message.channel.delete().catch(O_o => {});}
    else if (destroy === 'false') {
      message.channel.send("Musisz aktywować moduł");
      message.deleteAll().catch(O_o => {});
    }
  }

  if(command == 'shrug'){message.channel.send("\\"+"¯\ _(ツ)_/¯")}
  if(command == 'shrugd') {message.channel.send("\\"+'¯\_(ツ)_/¯')
                message.delete().catch(O_o => {});
                          }

//Lenny / shrug ================================================================================
if (command == 'm!lenny') {
  message.channel.send('( ͡° ͜ʖ ͡°)');

}
if (command == 'lennyd') {
  message.channel.send('( ͡° ͜ʖ ͡°)');
   message.delete().catch(O_o => {});
}
//Komendy dla Damianq ================================================================================
if (command == 'grzecznysynke') {
  message.channel.send('(ⱺヮⱺ) <@!367390191721381890>\n(ⱺヮⱺ) <@!407637715895713800>');

}
if (command == 'grzecznacórke') {
  message.channel.send('(ⱺヮⱺ) <@!365820519276085248>\n(ⱺヮⱺ) <@!368855946459349002>\n(ⱺヮⱺ) <@!376453273563037696>\n(ⱺヮⱺ) <@!359348136558198785>\n(ⱺヮⱺ) <@!364482399913902090> ');
                                                                                                                                                                                                                                    364482399913902090
}
if (command == 'najlepsza-mamke') {
  message.channel.send('(ⱺヮⱺ) <@!278261584172810241>');
}
//JEDZENIE ================================================================================

if (command == 'whitewine') {
  message.reply('🍾 Oczywiście, białe winko  dla Ciebie (｡◕‿◕｡)');
}
if (command == 'beer') {
  message.reply('🍺 Już się robi. Piwerko dla Ciebie (｡◕‿◕｡)');
}
if (command == 'whiskey') {
  message.reply('🥃 Whiskey specjalnie dla Ciebie (｡◕‿◕｡)');
}
if (command == 'advocat') {
  message.reply('🥃 Advocat już gotowy (｡◕‿◕｡)');
}
if (command == 'vodka') {
  message.reply('🥃 Już. Wódka specjalnie dla Ciebie (｡◕‿◕｡)');
}
if (command == 'redwine') {
  message.reply('🍷 Czerwone winko dla Ciebie (｡◕‿◕｡)');
}
if (command == 'apple_juice') {
  message.reply('🥤 Soczek dla Ciebie (｡◕‿◕｡)');
}
if (command== 'watermelon') {
  message.reply('🍉 Arbuzik dla Ciebie (｡◕‿◕｡)');
}
 if (command == 'coffee') {
  message.reply('☕ Kawusia dla Ciebie (｡◕‿◕｡)');
}
if (command == 'tea') {
  message.reply('🍵 Herbatka dla Ciebie (｡◕‿◕｡)');
}
if (command == 'sake') {
  message.reply('🍶 Sake dla Ciebie (｡◕‿◕｡)');
}
if (command == 'cookie') {
  message.reply('🍪 Ciasteeeczko. Świeżo upieczone (｡◕‿◕｡)');
}
if (command == 'glass_of_milk') {
  message.reply('🥛 Mleczko dla Ciebie (｡◕‿◕｡)');
}
if (command == 'apple') {
  message.reply('🍎 Jabłko dla Ciebie (｡◕‿◕｡)');
}
if (command == 'pancakes') {
  message.reply('🥞 Naleśniki dla Ciebie (｡◕‿◕｡)');
}
if (command == 'grapes') {
  message.reply('🍇 Winogronka dla Ciebie (｡◕‿◕｡)');
}
if (command == 'melon') {
  message.reply('🍈 Melonik (｡◕‿◕｡)');
}
if (command == 'tangerine') {
  message.reply('🍊 Mandarynka. Prosz (｡◕‿◕｡)');
}
if(command == 'waffles'){
  message.reply("<:waffle:452753431447207956> Gofry dla Ciebie (｡◕‿◕｡)")
}
if (command == 'lemon') {
  message.reply('🍋 Cytrynka (｡◕‿◕｡)');
}
if (command == 'banana') {
  message.reply('🍌 Banan (bez skojarzeń) (｡◕‿◕｡)');
}
if (command == 'pineapple') {
  message.reply('🍍 Ananas (｡◕‿◕｡)');
}
if (command == 'xanax') {
  message.reply(':pill: Bierz, ale musisz mi też dać trochę ');
}

if (message.content === 'Mieciu zabij się') {

  let person = args.join(" ")
  let punch = new Discord.RichEmbed()
   .setColor(config.embed_color)
  .addField("Ehh... Przez" + message.author.username.toString() + " Tracę wiarę w ludzi" )
  .setImage(`https://media.giphy.com/media/JlrG0SpsjDIHK/giphy.gif`);
    message.channel.send({
     embed: punch
   });
    }
    if (message.content === 'Mieciu ruchaj mnie') {

    let person = args.join(" ")
  let punch = new Discord.RichEmbed()
   .setColor(config.embed_color)
  .addField("Mrał" + message.author.username.toString())
  .setImage(`https://cdn.discordapp.com/attachments/424585943362568202/428954828085919744/insert_lenny_face_here__by_winterthedragoness-dbge6pa.gif`);
    message.channel.send({
     embed: punch
   });

  }
  /*
  .addField("Użytkowe", )
  .addField("Komendy 4FUN", ` )
  .addField("Na co reaguje bot",, inline  = true )
   .addField("Komendy-Jedzenie",``)
   .addField("Komendy-Picie",``)
  .addField("Prochy ",`xanax`, inline = true)*/
//HELP ===============================================================================



});

arraySort = require('array-sort'), // This will be used for sorting arrays
table = require('table'); // This will be used for preparing the output to a table
send = require('quick.hook'); // This will be used for creating & sending webhooks
client.on('message', async  message => {
 let args


  if (message.content == 'Mieciu') {
    if(message.author.bot) return;
    var odp = Math.floor(Math.random() * 5) + 1
    message.channel.send(modp[odp-1])

  }
  if (message.content == 'Mieciu chcesz podpaskę?') {
    message.channel.send('Wolę tampon');
  }


  if (message.content === 'Mieciu kocham cię') {
    message.reply('A ja dla Ciebie nie ;)');
  }
  if (message.content === 'Prawda Mieciu?') { if(message.author.bot) return;
    if(message.author.bot) return;
    var odp = Math.floor(Math.random() *11) + 1
    message.channel.send(rand[odp-1])
  }
  if (message.content === 'Mieciu był ban?') {
    message.channel.send('Był hehehehehehehe');
  }
  if (message.content == 'Mieciu ćpamy?') {
    message.reply('Spoko, tylko żeby tatke <@367390191721381890> nie widział.');
    console.log("Mieciu ćpa z " + message.author.username.toString());
  }

  if (message.content == 'Mieciu jesteś Bogiem?') {
    message.channel.send('Uświadom to sobie sobie');
  }
   if (message.content == 'TEST') {
    if(message.author.bot) return;
    var odp = Math.floor(Math.random() * 5) + 1
    message.channel.send(modp[odp-1])
  }
  if (message.content == 'Mieciu kłamie') {
    message.reply('Ejejejej. Bez takich oskarżeń mi tu');
  }
   if (message.content == 'Mieciu cho na solo') {

   let punch = new Discord.RichEmbed()
    .setColor(config.embed_color)
   .setTitle("Przypierdoliiiiłem" + message.author.username.toString() )
   .setImage(`https://cdn.discordapp.com/attachments/442190990376435712/443858687543738374/punch.gif`);
     message.channel.send({
      embed: punch
    });
    message.reply("(ง'̀-'́)ง");
  }

  if (message.content == 'Mieciu wpierdol') {

   let punch = new Discord.RichEmbed()
    .setColor(config.embed_color)
   .addField("Przypierdoliiiiłem" + message.author.username.toString() )
   .setImage(`https://cdn.discordapp.com/attachments/442190990376435712/443858687543738374/punch.gif`);
     message.channel.send({
      embed: punch
    });
    message.reply("(ง'̀-'́)ง");
  }



  if (message.content == 'Mieciu napewno będzie ban?') {
    message.reply({
  files: ['https://cdn.discordapp.com/attachments/365970118259507222/422158886997458944/95874_admini.png']
})
}



  if (message.content.includes('Misiaa')) {
        message.channel.send('Misia! :black_heart:');
      }
      if (message.content.includes('misiaa')) {
        message.channel.send('Misia :black_heart:!');
      }
     //JEDZENIE====================================================================
  if (message.content.includes('smacznego')) {
    if(message.guild.id =='418157358628339713') return
    if(message.author.bot) return;
    var odp = Math.floor(Math.random() * 4) + 1
    message.channel.send(jedzenie[odp-1])
      }
  if (message.content.includes('Smacznego')) {
    if(message.guild.id =='418157358628339713') return
    if(message.author.bot) return;
    var odp = Math.floor(Math.random() * 4) + 1
    message.channel.send(jedzenie[odp-1])
      }
   //WITAM================================================================================
  if (message.content.includes('Wita')) {
    if(message.guild.id =='418157358628339713') return
        if(message.author.bot) return;
        var odp = Math.floor(Math.random() * 4) + 1
        message.channel.send(hej[odp-1])
      }
      if (message.content.includes('wita')) {
        if(message.guild.id =='418157358628339713') return
        if(message.author.bot) return;
        var odp = Math.floor(Math.random() * 4) + 1
        message.channel.send(hej[odp-1])
      }
  //DOBRANOC========================================================================


  if (message.content.includes('Dobranoc')) {
    if(message.author.bot) return;
    var odp = Math.floor(Math.random() * 4) + 1
    message.channel.send(papa[odp-1])

  }

  if (message.content.includes('dobranoc')) {
    if(message.author.bot) return;
    var odp = Math.floor(Math.random() * 4) + 1
    message.channel.send(papa[odp-1])

  }

  if(message.content == 'Mieciu to cham') message.channel.send("Wypierdalaj")
 //========================================================================
 if (message.content.includes('Mieciuu')) {
        message.channel.send('Jaa! :heart:');
      }
      if (message.content.includes('LOL')) {
        message.channel.send('https://tenor.com/view/xd-gif-8855872');
      }
      if (message.content === 'Mieciu poratuj złotóweczką') {


        let punch = new Discord.RichEmbed()
         .setColor(config.embed_color)
        .setTitle( message.author.username.toString() + " Jak tak bardzo chcesz..." )
        .setImage("https://cdn.discordapp.com/attachments/424585943362568202/426794474702897153/pobrany_plik.jpg");
          message.channel.send({
           embed: punch
         });
         message.channel.send('Psst, to moja pierwsza komenda ^^')
          }


          if (message.content === 'Mieciu pogłaszcz mnie') {

        let punch = new Discord.RichEmbed()
         .setColor(config.embed_color)
        .setTitle( message.author.username.toString() + " ;3" )
        .setImage(`http://filing.pl/wp-content/uploads/2015/09/filing_images_6d7223b57ffe.gif`);
          message.channel.send({
           embed: punch
         });
        }
          if (message.content === 'Mieciu wpierdol mu') {


        let punch = new Discord.RichEmbed()
         .setColor(config.embed_color)
        .setTitle( message.author.username.toString() + "  Jadeeeeeeee" )
        .setImage(`http://www.wc.pl/media/456221c3d6668a0497bb/obrazek.gif`);
          message.channel.send({
           embed: punch
         });
          }
          if (message.content == 'Mieciu przywitaj się') {


        let punch = new Discord.RichEmbed()
         .setColor(config.embed_color)
        .setTitle( message.author.username.toString() + " Heh" )
        .setImage(`http://img2.stylowi.pl//images/items/o/201410/stylowi_pl_inne_26187487.gif`);
          message.channel.send({
           embed: punch
         });
          }

          if (message.content === 'Mieciu flirtuj ze mną') {


        let punch = new Discord.RichEmbed()
         .setColor(config.embed_color)
      .setTitle( message.author.username.toString() + " Heh" )
        .setImage(`https://78.media.tumblr.com/6dd33817ab7c9c4badfb79a4a79df973/tumblr_nn0g44ETJK1ur6wvco1_400.gif`);
          message.channel.send({
           embed: punch
         });
          }






      if (message.content === 'Mieciu będzie ban?') {

        let person = args.join(" ")
           let punch = new Discord.RichEmbed()
            .setColor(config.embed_color)
          .setTitle("Spokojnie " + message.author.username.toString() + " Będzie" )
           .setImage(`https://i.imgur.com/O3DHIA5.gif`);
             message.channel.send({
              embed: punch
            });

          }
        });
//=================================================================================
const music = new Music(client, {
   prefix: config.prefix,
  youtubeKey: config.yt,
  embedColor: 9240320,
  enableQueueStat: true,
  botAdmins: [316226442721755137, 367390191721381890],
  clearOnLeave: true,
  disableVolume: true,
  djRole: "@everyone"
});

client.login(config.token);
