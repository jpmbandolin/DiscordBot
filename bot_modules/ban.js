module.exports = (msg)=>{
	const user = msg.mentions.users.first();
	
	if (user) {
		const member = msg.guild.member(user);
		
		if(member){
			 member
			  .ban({reason: 'We really dont like you'})
			  .then(() => {
				msg.reply(`My master kicked ${user.tag} because he was a naughty boy, or girl`);
			  })
			  .catch(err => {
				msg.reply('I\'ve failed to purge this server from the scum called ${user.tag}. I shall now kill myself.');
				console.error(err);
			  });
		}
	}
}