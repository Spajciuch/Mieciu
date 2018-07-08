const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
  if(message.guild.id =='439480280269717526' || message.guild.id == '365970117772705792' || message.guild.id == '403868146617942018' || message.guild.id == '418157358628339713')  return message.reply("Ten moduł jest tu wyłączony")
  	var firebase = require('firebase')
	var database = firebase.database()
	await database.ref(`/config/${message.guild.id}/pingi`).once('value')
	.then(async pingi => {
		if(pingi.val() == false) return message.reply('Komenda jest wyłączona');
	
  if(args[0] == '@everyone') return;
  if(args[0] == '@here') return;
  var kto = args[0];
  var ile = args[1];
  for (i = 1; i <= ile; i++) {
    message.channel.send(kto +' '+ i + '/' + ile);

}
})
}
module.exports.help = {
	name: "pingg",
	category:"util"
}