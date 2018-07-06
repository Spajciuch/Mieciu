const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>{
var text = args.join(" ");

       // Reverse the message
       var reversed = '';
       var i = text.length;

       while (i > 0) {
           reversed += text.substring(i - 1, i);
           i--;
       }

       // Reply to the user's message
       message.channel.send(reversed);
   }
   module.exports.help = {
     name: "reverse",
     category:"util"
   }
