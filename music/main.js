const	Discord	= require('discord.js'),
		client	= new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
	if(msg.author.bot){
		return;
	}

	if(msg.content.startsWith('!music')){
		let args = msg.content.split(' ');
		switch(args[1]){
			case 'help':
				require('./help.js')(msg, client, Discord);
				break;
			case 'list':
				require('./list.js')(msg, client, Discord);
				break;
			case 'play':
				require('./play.js')(msg, client, args[2]);
				break;
			case 'save':
				if(args.length >= 4){
					let nome;
					console.log('attempting to save some music');
					args.forEach((arg, index)=>{
						if(index !== 0 && index !== 1 && index !== args.length - 1){
							if(!nome){
								nome = arg;
							}else{
								nome += " " + arg;
							}
						}
					});
					require('./saveNewMusic')(msg, client, Discord, {cNome: nome, cUrl: args[args.length - 1]});
				}
				break;
			default:
				require('./music.js')(msg, client);
		}
	}
});

client.login(process.env.BOT_TOKEN);

//@see https://discord.js.org/#/docs/main/stable/typedef/MessageOptions
//@see https://discordjs.guide/popular-topics/embeds.html#embed-preview