const Discord = require("discord.js");
const config = require('../config.json')
module.exports.run = async (client, message, args) => {
  const textMeme = require('text-meme');

textMeme('unicorns ❤️').then(function (filename) {
    console.log(filename);
});
//=> 'generated text-meme > filename.gif'

textMeme(input, {delay: 600, filename: 'quote.gif', background: '#4f656d'}).then(function (filename) {
    console.log(filename);
});
}
module.exports.help = {
  name: "rmeme"
}
