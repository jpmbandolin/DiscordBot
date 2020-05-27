const storageService = require('./storageService');

module.exports = (msg, client, Discord)=>{
	let arrMusicas		= [],
		arrMusicasMenor	= [];
	
	storageService.getMusics().then(musicList=>{
		musicList.forEach((music, index)=>{
			if(index % 24 === 0 && index !== 0){
				arrMusicasMenor.push(Object.assign(music, {track: index}));
				arrMusicas.push(arrMusicasMenor);
				arrMusicasMenor = [];
			}else{
				arrMusicasMenor.push(Object.assign(music, {track: index}));
			}
		});
		
		if(arrMusicasMenor.length){
			arrMusicas.push(arrMusicasMenor);
			arrMusicasMenor = [];
		}
		
		arrMusicas.forEach((musica, index)=>{
			if(index === 0){
				let message = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Lista de musicas')
					.setDescription('Lista de musicas')
					.addFields(musica.map((music, index)=>{
							return {name: music.track + " - " +music.nome, value: music.url}
						})
					);
				msg.channel.send(message);
			}else{
				let message = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Continuação')
					.setDescription('pq a lista é grande')
					.addFields(musica.map((music, index)=>{
							return {name: music.track + " - " +music.nome, value: music.url}
						})
					);
				msg.channel.send(message);
			}
		})
	}, console.error);
};