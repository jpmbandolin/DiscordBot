const	Discord	= require('discord.js'),
		client	= new Discord.Client(),
		hook	= new Discord.WebhookClient('', '--'),
		fs		= require('fs');
		
let commands = {};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
	if(msg.author.bot){
		return;
	}
	
	console.log(msg.author.username + " - " + msg.author.id + " :: " + msg.content);

	if (msg.content === 'ping') {
		msgObj.reply('pong');
	}else{
		commands.commands.some(command=>{
			if(msg.content.startsWith(command.name) && !command.migrated){
				require(command.file)(msg, client, Discord, hook, commands);
				return true;
			}
		})
	}
});

function getCommands(){
	fs.readFile('./commands.json', 'utf8', (err, data)=>{
		if(err) console.error(err);
		commands = JSON.parse(data);
	})
}

getCommands();
client.login(process.env.BOT_TOKEN);

//@see https://discord.js.org/#/docs/main/stable/typedef/MessageOptions
//@see https://discordjs.guide/popular-topics/embeds.html#embed-preview