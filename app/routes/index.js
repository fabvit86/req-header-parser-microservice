'use strict';

const rootPath = process.cwd();
const useragent = require('express-useragent');
const ReqHeaderParser = require(rootPath+'/app/controllers/rhpController.server.js');

module.exports = function(app){

	var rhp = new ReqHeaderParser();

	app.route('/').get(function(req, res){
		res.sendFile(rootPath+'/public/index.html');
	});

	app.use(useragent.express());
	app.route('/parseheader').get(rhp.getData);

}