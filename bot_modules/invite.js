module.exports = (msg, client)=>{
	let voiceChannel	= msg.member.voice.channel;
	let connection		= {};
	let channel			= client.channels.cache.get(msg.channel.id);
	
	let list = client.users.get(msg.channel.id)
	
	list.members.forEach(member=>{
		console.log(member.user.username);
	});
};