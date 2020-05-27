const ytService = {};

var fs = require('fs');
var readline = require('readline');
var {google} = require('googleapis');
var OAuth2 = google.auth.OAuth2;

// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/youtube-nodejs-quickstart.json
var SCOPES = ['https://www.googleapis.com/auth/youtube.readonly'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'youtube-nodejs-quickstart.json';

ytService.validateVideoID = id=>{
	return new Promise((resolve, reject)=>{
		fs.readFile('./client_secret.json', function processClientSecrets(err, content) {
		  if (err) {
			console.log('Error loading client secret file: ' + err);
			reject(err);
			return;
		  }
		  // Authorize a client with the loaded credentials, then call the YouTube API.
		  //authorize(JSON.parse(content), getChannel);
		  authorize(JSON.parse(content), saveAuth).then(()=>{
			  ytService.getVideo(ytService.auth, id).then(channels=>{
				  resolve(channels);
			  }, reject);
		  });
		});
	})
	
}

function saveAuth(auth){
	ytService.auth = auth;
}
// Load client secrets from a local file.


/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
	return new Promise((resolve, reject)=>{
		var clientSecret	= credentials.installed.client_secret;
		var clientId		= credentials.installed.client_id;
		var redirectUrl		= credentials.installed.redirect_uris[0];
		var oauth2Client	= new OAuth2(clientId, clientSecret, redirectUrl);

		// Check if we have previously stored a token.
		fs.readFile(TOKEN_PATH, function(err, token) {
			if (err) {
			  getNewToken(oauth2Client, callback).then(resolve);
			} else {
			  oauth2Client.credentials = JSON.parse(token);
			  callback(oauth2Client);
			  resolve();
			}
		});
	})
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
	return new Promise((resolve, reject)=>{
		var authUrl = oauth2Client.generateAuthUrl({
			access_type: 'offline',
			scope: SCOPES
		});
		console.log('Authorize this app by visiting this url: ', authUrl);
		var rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});
		rl.question('Enter the code from that page here: ', function(code) {
			rl.close();
			oauth2Client.getToken(code, function(err, token) {
			  if (err) {
				console.log('Error while trying to retrieve access token', err);
				reject(err);
				return;
			  }
			  oauth2Client.credentials = token;
			  storeToken(token);
			  callback(oauth2Client);
			  resolve();
			});
		});

		
	})
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) throw err;
    console.log('Token stored to ' + TOKEN_PATH);
  });
}

/**
 * Lists the names and IDs of up to 10 files.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 * @param {string} id do video a ser analizada
 */
ytService.getVideo = function (auth, id) {
	return new Promise((res, rej)=>{
		var service = google.youtube('v3');
		service.search.list({
			auth: auth,
			part: 'id',
			q: id
		}, function(err, response) {
		if (err) {
		  console.log('The API returned an error: ' + err);
		  rej(err);
		  return;
		}
		var channels = response.data.items;
		res(channels);
	  });
	})
};

module.exports = ytService;