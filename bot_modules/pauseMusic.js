module.exports = async (msg)=>{
	let voiceChannel = msg.member.voice.channel;
	let connection = {};

	if(voiceChannel){
		connection = await voiceChannel.join();
		
		while(!Object.keys(connection).length){
		
		}

		console.log('pausando musica', connection);
		connection.player();
	}
}