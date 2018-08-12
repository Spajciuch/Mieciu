const Discord = require('discord.js')
const fs = require('fs')
module.exports.run = async (client, message, args) => {
 var arg = args.join(" ")
    var qr = require('qr-image');

    var qr_svg = qr.image(arg, {
      type: 'png'
    });
    qr_svg.pipe(require('fs').createWriteStream(args.join("-").replace(/\//g, 'slash').replace(/\./g, 'dot') + '.png'));

    var svg_string = qr.imageSync(arg, {
      type: 'png'
    });
    message.channel.send('Gotowe', {
      file: args.join("-").replace(/\//g, 'slash').replace(/\./g, 'dot') + '.png'
    })
}
module.exports.help = {
  name: "qr",
  category:"util"
}
