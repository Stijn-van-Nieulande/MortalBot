//http://discordjs.readthedocs.io/en/latest/index.html
//https://discord.js.org/#/docs/main/stable/general/welcome

var Discord = require('discord.js');
var Bot = new Discord.Client({ autoReconnect: true });

Bot.on('ready', () => {
	console.log('');
	console.log('--=={ MortalBot }==--');
	console.log('Bot loaded succesfully!');
	console.log('--=={------*------}==--');
	console.log('');
});

Bot.on('message', message => {
	var strStart = message.content.slice(0, message.content.indexOf(' '));
	var strEnd = message.content.split(/ (.+)/)[1];
	
	if (message.content.indexOf("banana") !== -1 && message.author.username !== "MortalBot") {
		message.channel.sendMessage("O M G    This person said banana! :banana: :banana: :banana:");
	}
	
	if (!(strStart && strEnd)) {
		return;
	}
	if (!(strStart.startsWith("/") || strStart.startsWith("!") || strStart.endsWith("?"))) {
		return;
	} else {
		if (strStart.startsWith("/") || strStart.startsWith("!")) {
			strStart = strStart.replace(/^./,"");
		}
		if (strStart.startsWith("?")) {
			strStart = strStart.replace(/.$/,"");
		}
	}
	
	if ((["mortalpvp", "mpvp", "mortalbot", "mb"].indexOf(strStart) +1) <= 0) {
		return;
	}
	
	console.log("MESSAGE>> "+message);
	console.log("strEnd>> "+strEnd);
	
	
	
	if (strEnd.toLowerCase() === 'ping') {
		message.reply('pong');
	} else if (strEnd.toLowerCase() === 'hi') {
		message.reply('Hello there :P');
	} else if (strEnd.toLowerCase() === 'status') {
		message.channel.sendMessage("test");
	} else {
		message.reply('I don\'t understand you :(');
	}
});

Bot.login('MzIyMjgwNjQ3NDA0MTU4OTc2.DBqS5w.QQIiqzG1ilWbZrPKx-Xd96CwFTM');