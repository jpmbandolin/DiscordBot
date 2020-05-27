const	con				= require('../db.js'),
		storageService	= {};

storageService.getMusics = (params)=>{
	return new Promise((resolve, reject)=>{
		con.query('SELECT iCodMusica, cNome as nome, cUrl as url FROM musicas ORDER BY iCodMusica', (err, result)=>{
			if(err){
				reject(err);
			}else{
				resolve(result);
			}
		})
	})
};

storageService.getMusic = (params)=>{
	return new Promise((resolve, reject)=>{
		con.query('SELECT iCodMusica, cNome as nome, cUrl as url FROM musicas WHERE iCodMusica = ?', (err, result)=>{
			if(err){
				reject(err);
			}else{
				resolve(result[0] || {});
			}
		})
	})
};

storageService.saveNewMusic = (params)=>{
	return new Promise((resolve, reject)=>{
		con.query('INSERT INTO musicas (cNome, cUrl, cNomeAutor, iIdAutor) VALUES (?, ?, ?, ?)', [params.cNome, params.cUrl, params.author, params.id], (err, result)=>{
			if(err){
				reject(err);
			}else{
				resolve(result);
			}
		})
	})
};

storageService.deleteMusic = (params)=>{
	return new Promise((resolve, reject)=>{
		con.query('DELETE FROM musicas WHERE iCodMusica = ?', [params.iCodMusica], (err, result)=>{
			if(err){
				reject(err);
			}else{
				resolve(result);
			}
		})
	})
};

storageService.sync = (musics)=>{
	return Promise.reject('Sync desativado');
	return Promise.all(musics.map((music, index)=>{
		return new Promise((res, rej)=>{
			con.query('INSERT INTO musicas (iCodMusica, cNome, cUrl) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE iCodMusica = VALUES(iCodMusica)', [
				index, music.nome, music.url
			], (err, result)=>{
				if(err){
					rej(err);
				}else{
					res(result);
				}
			})
		})
	}))
};

module.exports = storageService;