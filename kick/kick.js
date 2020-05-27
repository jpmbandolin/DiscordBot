module.exports = (msg)=>{
	const user = msg.mentions.users.first();
	
	if (user) {
		const member = msg.guild.member(user);
		
		if(member){
			 member
			  .kick('My master told me to kick him')
			  .then(() => {
				msg.reply(`My master kicked ${user.tag} just for fun`);
			  })
			  .catch(err => {
				msg.reply('I\'ve failed, forgive me master :(');
				console.error(err);
			  });
		}
	}
}