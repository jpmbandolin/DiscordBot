const ytdl			= require('ytdl-core'),
	storageService	= require('./storageService');

module.exports = async (msg, client)=>{
	let voiceChannel	= msg.member.voice.channel;
	let connection		= {};
	let channel			= client.channels.cache.get(msg.channel.id);
	
	storageService.getMusics().then(async musicas=>{
		if(voiceChannel){
			connection = await voiceChannel.join();

			while(!Object.keys(connection).length){
			
			}

			let selectedMusic = (musicas[Math.floor(Math.random() * musicas.length)] || musicas[Math.floor(Math.random() * musicas.length)]);
			console.log(selectedMusic);
			channel.send('Tocando ' + selectedMusic.nome, {tts: false, code: false});
			connection.play(ytdl(selectedMusic.url, { filter: 'audioonly' }));
		}else{
			channel.send('Entra em uma sala de audio, seu corno.', {tts: false, code: false});
		}
	})
};