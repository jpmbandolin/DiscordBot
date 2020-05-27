module.exports = (msg, client, Discord, hook, commands)=>{
	let response = "Você pediu arrego? Aqui estão os meus comandos: \n\n";
	let workInProgress = [];
	
	let message = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Comandos funcionantes:')
		.setDescription('Se encontrarem algum bug, foda-se')
		.addFields(
			commands.commands.filter(command=>command.done).map(command=>{
				return {name: command.name, value: command.descricao};
			})
		)
	msg.channel.send(message);
	
	message = new Discord.MessageEmbed()
		.setColor('#ff0000')
		.setTitle('Em desenvolvimento:')
		.setDescription('Pra quem não entendeu, esses não funcionam... ou estão sendo desenvolvidos, ou vão ser abandonados se eu desistir, pq eu sou um arregão')
		.addFields(
			commands.commands.filter(command=>!command.done).map(command=>{
				return {name: command.name, value: command.descricao};
			})
		)
	msg.channel.send(message);
}