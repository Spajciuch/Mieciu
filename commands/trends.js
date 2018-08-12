const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	var firebase=require('firebase')
var db = firebase.firestore();
var docData = {
    stringExample: "Hello world!",
    booleanExample: true,
    numberExample: 3.14159265,
    dateExample: new Date("December 10, 1815"),
    arrayExample: [5, true, "hello"],
    nullExample: null,
    objectExample: {
        a: 5,
        b: {
            nested: "foo"
        }
    }
};
db.collection("data").doc("one").set(docData).then(function() {
    console.log("Document successfully written!");
});

}
module.exports.help = {
	name: "storage",
	category:"info"
}