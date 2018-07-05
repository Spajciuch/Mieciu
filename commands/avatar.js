const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	if(message.mentions.members.first()) {
      let avatar = new Discord.RichEmbed()
      .setColor(config.embed_color)
      .setTitle("Avatar użytkownika " + message.mentions.members.first().user.username)
      .setImage(message.mentions.members.first().user.avatarURL)


      message.channel.send({embed: avatar});
      await Jimp.read(message.mentions.members.first().user.avatarURL).then(async function (image) {
        // do stuff with the image
        await image.write("./Profile/avatar/" + message.mentions.members.first().user.id + ".png")
      }).catch(function (err) {
      });
    	}

   	 else if(!args) {
      let avatar =  new Discord.RichEmbed()
      .setColor(config.embed_color)
      .setTitle("Twój Avatar")
      .setImage(message.author.avatarURL)

      message.channel.send({embed: avatar})
      await Jimp.read(message.author.avatarURL).then(async function (image) {
        // do stuff with the image
        await image.write("./Profile/avatar/" + message.author.id + ".png")
      }).catch(function (err) {
      });
    }
   else {
   		let avv = client.users.find("name", args.join(" "))
      let avatar = new Discord.RichEmbed()
      .setColor(config.embed_color)
      .setTitle("Avatar użytkownika " + args.join(" "))
      .setImage(avv.avatarURL)


      message.channel.send({embed: avatar});
      await Jimp.read(message.mentions.members.first().user.avatarURL).then(async function (image) {
        // do stuff with the image
        await image.write("./Profile/avatar/" + message.mentions.members.first().user.id + ".png")
      }).catch(function (err) {
      });
    	}
}
module.exports.help = {
	name: "avatar"
}