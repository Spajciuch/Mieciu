const Discord = require("discord.js");
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
const nodemailer = require('nodemailer');
if(args[0] == 'help') return message.reply("Użycie: `<odbiorca> | <temat> | <treść>`")
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'mieciumail@gmail.com', // generated ethereal user
            pass: process.env.PASS // generated ethereal password
        }
    });
let from = message.author.tag
let to = args.join(" ").split(" | ")[0]
let subject = args.join(" ").split(" | ")[1]
let text = args.join(" ").split(" | ")[2]
let embed = new Discord.RichEmbed()
.setTitle("Email wysłany")
.addField("Od" , from,true)
.addField("Do", to,true)
.addField("Temat",subject,true)
.addField("Treść",text,true)
.setColor(config.embed_color)
message.channel.send({embed: embed})
message.delete()
    // setup email data with unicode symbols
    let mailOptions = {
        from: from, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text + "\nWysłano przez: " + from + " [Discord]"// html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }


    });
});

}
module.exports.help = {
  name: "mail",
  category:"util"
}
