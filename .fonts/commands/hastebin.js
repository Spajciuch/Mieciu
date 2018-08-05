const Discord = require("discord.js");
const config = require('../config.json')
module.exports.run = async (client, message, args) => {
  var dta = require(`./${args.join(" ")}.js`)
  const hastebin = require('hastebin-gen');
  hastebin(dta, "js").then(r => {
      message.channel.send(r); //https://hastebin.com/someurl.js
  }).catch(console.error);
}
module.exports.help = {
  name: "hastebin",
  category:"util"
}
