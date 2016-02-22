var fs = require('fs');
var path  = require('path');	

module.exports = function filterDir(dir,extension,callback) {

	fs.readdir(dir, function (err, list) {

		if (err) {  
	       return callback(err); // propagation et court-circuit  
	    }
	 	// … pas d’erreur, on continue à faire des trucs cool avec `data`  

	    data = [];

		list = list.filter(function (file) {  
	       return path.extname(file) === '.' + extension;  
	     })  

		// tout s’est bien passé, on appelle `callback` avec `null` pour  
	    // l’argument d’erreur
	    callback(null, list);

	})

}