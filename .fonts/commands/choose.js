const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
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
module.exports.help = {
	name: "choose",
  category:"fun",
  description:"Wybiera pomiędzy 2 odpowiedziami oddzielonymi `|`",
  use:"<prefix>choose <jedna odp> | <druga odp>"
}