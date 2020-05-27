const	Discord	= require('discord.js'),
		 client	= new Discord.Client()

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
	if(msg.author.bot){
		return;
	}
	
	if(msg.content.startsWith('!avatar')){
		let args = msg.content.split(' ');
		require('./avatar.js')(msg, client, args[1]);
	}
});

client.login(process.env.BOT_TOKEN);

//@see https://discord.js.org/#/docs/main/stable/typedef/MessageOptions
//@see https://discordjs.guide/popular-topics/embeds.html#embed-preview