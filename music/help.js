module.exports = (msg, client, Discord)=>{
	
	let message = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Comandos para !music:')
		.setDescription('Colinha pra facilitar a vida de todo mundo')
		.addFields([
				{name: "help", value: "se você ta lendo isso você já entendeu"},
				{name: "list", value: "Lista as musicas, só digitar !music list"},
				{name: "play", value: "Toca a musica selecionada. é só digitar !music play {numero da musica que vc busca da lista}"},
				{name: "save", value: "Salva uma musica. Tem que ser do Youtube. Todas as musicas repetidas que voce tentar inserir vão dar erro. só digitar !music save {nome da musica} {link da musica no youtube}"},
			]
		);
	msg.channel.send(message);
};