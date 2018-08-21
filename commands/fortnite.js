
const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
const Client = require('fortnite');
const fortnite = new Client('4976fc40-95c4-4e91-a825-8b49dc657fbd');
if(args[0]=='help') return message.reply("Użycie: <username> | <mode> | <platform>")
let username = args.join(" ").split(" | ")[0]
let platform = args.join(" ").split(" | ")[2] || 'pc';
let gamemode = args.join(" ").split(" | ")[1]
if(!gamemode == 'solo' || !gamemode == 'duo' || !gamemode == 'squad' || !gamemode == 'lifetime') return message.reply("Użycie: <username> <mode> <platform>")
if(!username) return message.reply("Podaj nazwę użytkownika")
let data = fortnite.user(username,platform).then(data => {
console.log(data)
let stats = data.stats
if(gamemode == 'solo'){
  let solostats = stats.solo
  let score = solostats.score
  let kd = solostats.kd
  let matches = solostats.matches
  let kills = solostats.kills
  let wins = solostats.wins
  let top3 = solostats.top_3
  let embed = new Discord.RichEmbed()
  .setFooter("Statystyki w Fortnite [solo]")
  .setColor(`#7289da`)
  .setTitle("Statystyki użytkownika " + data.username + ` [solo]`)
  .addField(`Wynik`, score,true)
  .addField("Zagrane Mecze",matches,true)
  .addField("Wygrane", wins,true)
  .addField("Top 3", top3,true)
  .addField("Kille", kills,true)
  .addField("K/D", kd,true)
  message.channel.send(embed)
  }
else if(gamemode == 'duo'){
  let duostats = stats.duo
  let score = duostats.score
  let kd = duostats.kd
  let matches = duostats.matches
  let kills = duostats.kills
  let wins = duostats.wins
  let top3 = duostats.top_3
  let embed = new Discord.RichEmbed()
  .setFooter("Statystyki w Fortnite [duo]")
  .setColor(`#7289da`)
  .setTitle("Statystyki użytkownika " + data.username + ` [duo]`)
  .addField(`Wynik`, score,true)
  .addField("Zagrane Mecze", matches,true)
  .addField("Wygrane", wins,true)
  .addField("Top 3", top3,true)
  .addField("Kille", kills,true)
  .addField("K/D", kd,true)
  message.channel.send(embed)
  }
else if(gamemode == 'squad'){
  let squadstats = stats.squad
  let score = squadstats.score
  let kd = squadstats.kd
  let matches = squadstats.matches
  let kills = squadstats.kills
  let wins = squadstats.wins
  let top3 = squadstats.top_3
  let embed = new Discord.RichEmbed()
  .setFooter("Statystyki w Fortnite [squad]")
  .setColor(`#7289da`)
  .setTitle("Statystyki użytkownika " + data.username + ` [squad]`)
  .addField(`Wynik`, score,true)
  .addField("Zagrane Mecze", matches,true)
  .addField("Wygrane", wins,true)
  .addField("Top 3", top3,true)
  .addField("Kille", kills,true)
  .addField("K/D", kd,true)
  message.channel.send(embed)
  }

else if(gamemode == 'lifetime'){
let stats = data.stats
let lifetime = stats.lifetime
let score = lifetime[6]['Score']
let mplayed = lifetime[7]['Matches Played']
let wins = lifetime[8]['Wins']
let winp = lifetime[9]['Win%']
let kills = lifetime[10]['Kills']
let kd = lifetime[11]['K/d']

let embed = new Discord.RichEmbed()
.setFooter("Statystyki w Fortnite [lifetime]")
.setColor(`#7289da`)
.setTitle("Statystyki użytkownika " + data.username + ` [lifetime]`)
.addField(`Wynik`, score,true)
.addField("Zagrane Mecze", mplayed,true)
.addField("Wygrane", wins,true)
.addField("Procent Wygranych", winp,true)
.addField("Kille", kills,true)
.addField("K/D", kd,true)
message.channel.send(embed)
}
});}
module.exports.help = {
  name: "fortnite",
  category:"info",
  description:"Pokazuje statystyki w Fortnite",
  use:"<prefix>fortnite <username> | <mode> | <platfortma>"
}
