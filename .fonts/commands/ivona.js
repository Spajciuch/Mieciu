
const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>{
  message.channel.send(args.join(" "),{
    tts: true
  });
}
module.exports.help = {
  name: "ivona",
  category:"fun"
}
