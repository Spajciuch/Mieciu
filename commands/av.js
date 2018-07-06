const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
    client.user.setAvatar('./avatar.png')
  .then(user => console.log(`Avatar zaktualizowany`))
  .catch(console.error);
}
module.exports.help = {
	name: "avupdate"
}
