
const Discord = require("discord.js");
const config = require('../config.json')
module.exports.run = async (client, message, args) => {
  var ver = args[0]
  if(ver == null) return message.reply("<:mieciu:458973957534646282> użyj `m!help -general`")
    if(ver == '-general'){
      let helpembed = new Discord.RichEmbed()
        .setColor(config.embed_color)
        .setAuthor("Hey " + message.author.username.toString(), message.author.avatarURL)
        .setDescription(`Pomoc Miecia! \nPrefix - m!`,inline = true)
        .addField("Zaproszenie:", `invite`)
        .addField("Inna pomoc:",`help -admin\nhelp -user\nhelp -fun\nhelp -react\nhelp -eat\nhelp -drink\nhelp -music`)
        .addField(`Masz jakieś problemy?`, `Wbij na serwer pomocy -> https://discord.gg/jjNfaHM`)
        .setThumbnail("https://cdn.discordapp.com/avatars/423196130508275716/65a17d5274f3db851ef9ab5f3ed13ea1.png?size=2048");
        message.author.send({
          embed: helpembed
        });}

if(ver == '-admin') {
  let admin = new Discord.RichEmbed()
  .setTitle("Administracja")
  .setColor(config.embed_color)
  //.setThumbnail(`https://vignette.wikia.nocookie.net/daria/images/1/15/Admin.png/revision/latest?cb=20140902104042`)
  .addField("Komendy:", `set.channel.name\nid.ban\ncreate.channel\nset.icon\nset.server.name\nset-ver-lvl\ncreate.role\nrole.color\nban\nkick\nset.topic\nclear`)
  .setFooter("Pomoc - komendy administracji")
message.author.send({embed: admin})
}
if(ver == '-user'){
  let user = new Discord.RichEmbed()
  .setTitle("Użytkowe")
  .setColor(config.embed_color)
  .addField("komendy:",`mail\ncolor\nweather\ngif\nping\nserver.info\nivona\nsupportet.languages\ntranslate [text] | [Język, np, EN]\nnote\nget.note[kod]\nqr` )
//  .setThumbnail(`https://vignette.wikia.nocookie.net/central/images/e/ea/Pencil.png/revision/20121207212633`)
  .setFooter(`Pomoc - komendy użytkowe`)
  message.author.send({embed: user})
}
if(ver == '-fun'){
  let fun = new Discord.RichEmbed()
  .setTitle("Komendy 4FUN")
  .setColor(config.embed_color)
  .addField("Komendy:", `achievement\nreverse\nstart.typing\nstop.typing\n8ball\nchoose\navatar\nos.ping\nsay\nascii\nhug\npat\nslap\npunch\nlenny\nlennyd\nshrug\nshrugd`)
  //.setThumbnail(`https://3.bp.blogspot.com/-iy5AfJzE6Ps/VvqmjBBKUDI/AAAAAAAACGg/XVc62c1xAp4J92nDgWYhffLDfAG2EZ2AA/s320/Scooterise-have-fun.png`)
  .setFooter(`Pomoc - komendy 4Fun`)
message.author.send({embed: fun})
}
if(ver =='-react'){
  let react = new Discord.RichEmbed()
  .setTitle(`Na co reaguje bot`)
  .setColor(config.embed_color)
  .addField("Komendy:",`Mieciu \nMieciu ćpamy?\nMieciu poratuj złotóweczką\nMieciu przestrasz mnie\nMieciu pogłaszcz mnie\nMieciu wpierdol mu\nMieciu to cham\nMieciu kłamie\nJapierdole\nMieciu przywitaj się\nMieciu flirtuj ze mną\nMieciu kocham cię\nMieciu zabij sie\nMieciuu\nMieciu cho na solo`)
  //.setThumbnail(`https://cdn0.iconfinder.com/data/icons/significon/512/Significon-Exchange-512.png`)
  .setFooter(`Pomoc - reakcje bota`)
message.author.send({embed: react})
}
if(ver == '-eat'){
  let eat = new Discord.RichEmbed()
  .setTitle(`Komendy jedzenie`)
  .setColor(config.embed_color)
  .addField("Komendy:", `waffles\nwatermelon\napple\npancakes\ngrape\nlemon\npineapple\nmelon\ntangerine\nbanana\ncookie\nxanax`)
//  .setThumbnail(`http://wfarm3.dataknet.com/static/resources/icons/set73/2d6a74d1.png`)
  .setFooter(`Pomoc - komendy jedzienie`)
  message.author.send({embed: eat})
}
if(ver == 'drink'){
  let drink = new Discord.RichEmbed()
  .setTitle(`Komendy Picie`)
  .setColor(config.embed_color)
  .addField("Komendy:",`redwine\nwhitewine\nadvocat\nwhiskey\nbeer\nvodka\nsake\ncoffee\ntea\nglass_of_milk\napple_juice`)
  //.setThumbnail(`https://png.icons8.com/metro/1600/cocktail.png`)
  .setFooter(`Pomoc - komendy picie`)
message.author.send({embed: ver})
}
if(ver =='-music'){
  let music = new Discord.RichEmbed()
  .setTitle(`Muzyka`)
  .setColor(config.embed_color)
  .addField("Komendy:",`play\npause\nresume\nvolume\nskip\nstop\nqueue`)
//  .setThumbnail(`https://png.icons8.com/metro/1600/music.png`)
  .setFooter(`Pomoc - komendy muzyka`)
  message.author.send({embed: music})
}
//play <piosenka> - (aby puścic muzykę z yt)\npause - (pauzuje odtwarzanie) \nresume - (odpauzowuje odtwarzanie) \nvolume <0-200> - (ustaw głośność)\nskip - (pomiń piosenkę)\nstop - (zatrzymaj odtwarzanie) \nqueue-(sprawdź playlistę)`
message.react('👌')
message.channel.send(`<:mieciu:458973957534646282> `+message.author.username.toString() + " Sprawdź DM")
}
module.exports.help = {
  name: "help"
}
