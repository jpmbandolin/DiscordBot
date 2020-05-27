const frasesCrueis = [
	'you are a horrible person',
	'you should suck my dick',
	'the world would be better without you. I mean it',
	'you are beautifull',
	'you smell like dead fish',
	'we all know that you cry in the shower',
	'your parents cry every day in the shower thinking how something like you came out of them',
	'you where better as a sperm',
	'Always remember, you are unique. Just like everybody else.',
	'Mirrors dont lie, and lucky for you, they dont laught',
	'If you\'re sad about being alone on every valentine\'s day, just remember, no one loves you on the other days either.',
	'You only get one body and you\'ve already ruined it.',
	'If you failed, you failed a long time ago.',
	'if you hate yourself, remember that you are not alone. A lot of people hate you too',
	'there\'s someone fore everyone. Except for you.',
	'Sadness is your only friend'
];

module.exports = (msg, client, Discord)=>{
	let channels	= msg.guild.channels.cache.filter(c=>c.type === 'text' || true);
	let members 	= [];
	let channel		= client.channels.cache.get(msg.channel.id);
	
	for (const [channelID, channel] of channels) {
	  for (const [memberID, member] of channel.members) {
		let roles = member.roles;
		if(!member.user.bot){
			members.push(member);
		}
	  }
	}

	selectedMember = (members[Math.floor(Math.random() * members.length)] || members[Math.floor(Math.random() * members.length)]);

	channel.send(' <@' + selectedMember.id +'>, ' + frasesCrueis[Math.floor(Math.random() * frasesCrueis.length)] || frasesCrueis[Math.floor(Math.random() * frasesCrueis.length)], {tts: true, code: false});
};