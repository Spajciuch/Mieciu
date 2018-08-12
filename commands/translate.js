
const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>{
const { translate, detectLanguage, wordAlternatives, translateWithAlternatives } = require('deepl-translator');

translate(args.join(" ").split(" | ")[0],args.join(" ").split(" | ")[1].toUpperCase().replace(/pl/g, "PL").replace(/en/g, "EN").replace(/de/g, "DE").replace(/fr/g,"FR").replace(/es/g,"ES").replace(/it/g,"IT").replace(/nl/g,"NL")
)
  .then(res => message.channel.send(`<:translate:454381543800963073> Tłumaczenie: ${res.translation}, Wykryto język: ${res.resolvedSourceLanguage}`))
  .catch(console.error);
}
module.exports.help = {
  name: "translate",
  category:"util"
}
