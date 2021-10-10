/**@format */
//code By Doctor 
console.clear();

const discord = require("discord.js");

 const config = require("./data/config.json");

const intents = new discord.Intents(32767);
//code By Doctor 
const client = new discord.Client({ intents });

client.on("ready", () => console.log("Bot is onlline!!"));

client.on("messageCreate", Message => {
//console.log(Message.content);

if (Message.content.startsWith(config.prefix)) return;

const args = Message.content.substring(config.prefix.length).split(/ +/);

});

client.login(config.token);


//code By Doctor 
