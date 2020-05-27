const ytdl = require('ytdl-core'),

musicas		= [
	{url: 'https://www.youtube.com/watch?v=zj6Yr8MhhRs',	nome: "pintinho piu alemão"},
	{url: 'https://www.youtube.com/watch?v=-3VHqBolOcM',	nome: 'barbie girl'},
	{url: 'https://www.youtube.com/watch?v=Td6f1q8vhzE',	nome: 'cachorrinho'},	
	{url: 'https://www.youtube.com/watch?v=up6YkRh3aT8',	nome: 'listenning to my penis'},	
	{url: 'https://www.youtube.com/watch?v=D2NtlTFQznA',	nome: 'old friends'},	
	{url: 'https://www.youtube.com/watch?v=wxp3zqIqO68',	nome: '2 girls 1 cup song'},	
	{url: 'https://www.youtube.com/watch?v=VLnWf1sQkjY',	nome: 'jizz in my pants'},	
	{url: 'https://www.youtube.com/watch?v=839DO8-0cY8',	nome: 'too fast'},	
	{url: 'https://www.youtube.com/watch?v=ShTm8MnUAjo',	nome: 'alone in the universe'},	
	{url: 'https://www.youtube.com/watch?v=Pn7oEYe4ePc',	nome: 'fuck her gently'},	
	{url: 'https://www.youtube.com/watch?v=qqXi8WmQ_WM',	nome: 'show me your genitals'},	
	{url: 'https://www.youtube.com/watch?v=sbmd_erqE1s',	nome: 'show me your genitals pt2'},	
	{url: 'https://www.youtube.com/watch?v=o0Pg6nrNxLU',	nome: 'dança do creu'},	
	{url: 'https://www.youtube.com/watch?v=pCV8i1cvwgI',	nome: 'velocidade 6'},	
	{url: 'https://www.youtube.com/watch?v=kaSxaXln1Ug', 	nome: 'sonho azul'},	
	{url: 'https://www.youtube.com/watch?v=OxK_67i-Cd0',	nome: 'baba'},	
	{url: 'https://www.youtube.com/watch?v=9EHv5D7tc04',	nome: 'papinho'},	
	{url: 'https://www.youtube.com/watch?v=T1i7PAyvya0',	nome: 'adoleta'},	
	{url: 'https://www.youtube.com/watch?v=Ktgsn_G59os',	nome: 'dança do quadrado'},
	{url: 'https://www.youtube.com/watch?v=PA49hJlKRVo',    nome: 'cerol na mão'},
	{url: 'https://www.youtube.com/watch?v=1RfA2sEXPIA',    nome: 'liga da justiça'},
	{url: 'https://www.youtube.com/watch?v=1ZsKjZmgMMM',    nome: 'eguinha mijoleta'},
	{url: 'https://www.youtube.com/watch?v=iw7mLsomEqM',    nome: 'eguinha pocotó'},
	{url: 'https://www.youtube.com/watch?v=OBYsapRYFRw',    nome: 'me usa'},
	{url: 'https://www.youtube.com/watch?v=pSvDEWjxhgE',    nome: 'cobra cega'},
	{url: 'https://www.youtube.com/watch?v=yjIj74RLAIE',    nome: 'adoleta'},
	{url: 'https://www.youtube.com/watch?v=EYyPlWh6VO4',    nome: 'atoladinha'},
	{url: 'https://www.youtube.com/watch?v=QsG8gMARRyw',    nome: 'ragatanga'},
	{url: 'https://www.youtube.com/watch?v=vlPDl9_izLM',    nome: 'pau que nasce torto'},
	{url: 'https://www.youtube.com/watch?v=1WjI3DLOk4c',    nome: 'vira vira'},
	{url: 'https://www.youtube.com/watch?v=kTj8uS7XgKA',    nome: 'malha funk'},
	{url: 'https://www.youtube.com/watch?v=yjIj74RLAIE',    nome: 'adoleta'},
	{url: 'https://www.youtube.com/watch?v=_AJKpCN5dCg',    nome: 'a bomba'},
	{url: 'https://www.youtube.com/watch?v=TwkKp-BBChg',    nome: 'rap do solitário'},
	{url: 'https://www.youtube.com/watch?v=Cree1kMjEUQ',    nome: 'a barata da vizinha'},
	{url: 'https://www.youtube.com/watch?v=ao6czn5JhVQ',    nome: 'amo pufavo num desligue o telefone :c'},
	{url: 'https://www.youtube.com/watch?v=umMIcZODm2k',    nome: 'O ANNA JULIAAAAAAAAAA'},
	{url: 'https://www.youtube.com/watch?v=juM8luwwMoo',    nome: 'DIAAAS ATRÁSSSSSSS'},
	{url: 'https://www.youtube.com/watch?v=DNvDPxwC5NY',    nome: 'natasha'},
	{url: 'https://www.youtube.com/watch?v=BNHqBd9pSFY',    nome: 'whisky a go go' },
	{url: 'https://www.youtube.com/watch?v=aTPiSgJi1Gc',    nome: 'esporrei na manivela'},
	{url: 'https://www.youtube.com/watch?v=HrMDLMmpx8o',    nome: 'me lambe'},
	{url: 'https://www.youtube.com/watch?v=tu48T82MUQ8',    nome: 'apenas 8 anos'},
	{url: 'https://www.youtube.com/watch?v=hfjekgOgAFQ',    nome: 'craudete'},
	{url: 'https://www.youtube.com/watch?v=RsEeyZNiwUk',    nome: 'um minuto para o fim do mundo'},
	{url: 'https://www.youtube.com/watch?v=mmkw5VW3II8',    nome: 'era um garoto que como eu amava os beatles e os rolling stones'},
	{url: 'https://www.youtube.com/watch?v=qilNypgzv78',    nome: 'não peide aqui baby'},
	{url: 'https://www.youtube.com/watch?v=7lNZIsD9Rug',    nome: 'robocop gay'},
	{url: 'https://www.youtube.com/watch?v=uS8fYjT9bfc',	nome: 'dança da mãozinha'}	
];

module.exports = async (msg, client)=>{
	let voiceChannel	= msg.member.voice.channel;
	let connection		= {};
	let channel			= client.channels.cache.get(msg.channel.id);

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
};