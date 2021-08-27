const Discord = require('discord.js-selfbot');
const client = new Discord.Client();

username = "isloka"

client.on('ready', () => {
	console.clear()
	console.log('[!] Script has started.');
});
client.on("message", message => {
	k = message.content.toLowerCase();
	t = k.toString().includes(username);
    if (t) {
		console.log('[+] '+message.author.username+'#'+message.author.discriminator+' > '+message.content)
		message.react('850515672719294474'); // ID of your first emoji
		message.react('850515521363116062'); // ID of your second emoji
		message.react('880642546999623721'); // ID of your third emoji, you can add more if you want
 	}
});

client.login('token'); // your token
