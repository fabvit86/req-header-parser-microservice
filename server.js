'use strict';

const express = require('express'),
	routes = require('./app/routes/index.js');

const app = express();
require('dotenv').load(); //inizialize the dotenv Node module

const rootPath = process.cwd();

app.use('/public', express.static(rootPath+'/public'));
app.use('/controllers', express.static(rootPath+'/app/controllers'));

routes(app, rootPath);

const port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('Node.js listening on port '+port+'...');
});

