let ascii_text_generator = require('ascii-text-generator');
const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  message.delete().catch(O_o => {});
  if(!message.content.startsWith('m!')) return;
  message.delete().catch(O_o => {});
  let input_text = args.join(" ")
  let ascii_text =ascii_text_generator(input_text ,"2");
  message.channel.send("```" + ascii_text + "```");
  var pastebin = require('pastebin')('abcb1403db59ec9c11ae731a7620b387');
  pastebin.new({title: args.join("-"), content: ascii_text}, function (err, ret) {
          if (err)
              message.channel.send(err);
          else
              message.channel.send(ret);
      });;
}
module.exports.help = {
  name: "ascii",
  category:"fun",
  description:"Wysyła twój tekst jako ascii",
  use:"<prefix>ascii <tekst>"
}
