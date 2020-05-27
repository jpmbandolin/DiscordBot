const ytService			= require('../youtube_module/getVideo'),
	  storageService	= require('./storageService');

module.exports = (msg, client, Discord, video)=>{
	let channel	= client.channels.cache.get(msg.channel.id);
	
	let video_id = video.cUrl.split('v=')[1];
	let ampersandPosition = video_id.indexOf('&');
	if(ampersandPosition !== -1) {
		video_id = video_id.substring(0, ampersandPosition);
	}
	
	ytService.validateVideoID(video_id).then(videos=>{
		if(!videos.length){
			channel.send('O link enviado não é valido.. espertinho de merda..');
		}else{
			storageService.saveNewMusic(Object.assign({author: msg.author.username, id: msg.author.id}, video)).then(()=>{
				channel.send('A musica foi salva com sucesso.');
			}, error=>{
				console.error(error);
				channel.send('Alguém avisa o meu dono que deu merda aqui no banco.');
			});
		}
	}, error=>{
		console.error(error);
		channel.send('Alguém avisa o meu dono que deu merda aqui.');
	});
	
	
};