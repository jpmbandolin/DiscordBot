const zipFolder = require('zip-folder');
const fs = require('fs');
const archiver = require('archiver');

/**
 * @param {String} source
 * @param {String} out
 * @returns {Promise}
 */
function zipDirectory(source, out) {
  const archive = archiver('zip');
  const stream = fs.createWriteStream(out);

  return new Promise((resolve, reject) => {
	archive.pipe(stream);
	
	archive.glob("!(teste1|zip)**");

	archive.directory('./bot_modules', true, { date: new Date() });
	archive.directory('./media', true, { date: new Date() });
	//archive.directory('./zipFiles', true, { date: new Date() });

	archive.file('commands.json', { name: 'commands.json' });
	archive.file('main.js', { name: 'main.js' });
	archive.file('package.json', { name: 'package.json' });
	
    stream.on('close', () => {
		resolve();
		console.log('ok')
	});
	
    archive.finalize();
  });
}


module.exports = (msg, client)=>{
	console.log('starting');
	
	zipDirectory('../bot', './zipFiles/bot.zip').then(()=>{
		let channel = client.channels.cache.get(msg.channel.id);
		channel.send('My source code: ', {tts: false, code: false, files: ['./zipFiles/bot.zip']});
	}, console.error);
	
	/*
	zip({
		source: '../bot/*',
		destination: './zipFiles/destination.zip'
	}).then(function() {
		console.log('all done!');
	}).catch(function(err) {
		console.error(err.stack);
		process.exit(1);
	});
	
	
	zipFolder('../bot', './zipFiles/bot.zip', function(err) {
		console.log('file generated')
		let channel = client.channels.cache.get(msg.channel.id);
		if(err) {
			channel.send('oh fuck, something went wrong.', {tts: true, code: false});
		} else {
			channel.send('My source code: ', {tts: false, code: false, files: ['./zipFiles/bot.zip']});
		}
	});
	*/
}