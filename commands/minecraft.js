let ascii_text_generator = require('ascii-text-generator');
const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  const ScriptServer = require('scriptserver');

const server = new ScriptServer({
  core: {
    jar: 'spigot.jar',
    args: ['-Xmx512m'],
    rcon: {
      port: '25565',
      password: 'password'
    }
  }
});

server.start();
}

module.exports.help = {
  name: "minecraft"
}
