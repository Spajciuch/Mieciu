const Discord = require("discord.js");
const config = require(`../config.json`)
const superagent = require('superagent')
module.exports.run = async (client, message, args) => {
  const Simsimi = require('simsimi');

var simsimi = new Simsimi({
  key: '78596307-0d1b-47b8-b1f9-ce72e4a3ad09'
});

simsimi.listen(args.join(" "), function(err, msg){
  if(err) return console.error(err);
  message.channel.send('simsimi say:' + msg);
});
}
module.exports.help = {
  name: "simsimi"
}
