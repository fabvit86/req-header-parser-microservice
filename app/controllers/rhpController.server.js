'use strict';

function ReqHeaderParser(){
	this.getData = function(req, res){
		var os = req.useragent.os;
		var platform = req.useragent.platform;
		var response = {
			language: req.headers['accept-language'].slice(0, 5),
			ip: req.headers["x-forwarded-for"],
			client_OS: platform+"; "+os
		}
		res.json(response);
	};
} 

module.exports = ReqHeaderParser;