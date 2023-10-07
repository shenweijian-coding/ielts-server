#!/usr/bin/env node

/**
 * Module dependencies.
 */
var fs = require('fs');

// 引入https
const https = require('https')
var app = require('../app');
var debug = require('debug')('demo:server');
var http = require('http');

/**
* Get port from environment and store in Express.
*/

var port = normalizePort(process.env.PORT || '3000');
// app.set('port', port);

/**
* Create HTTP server.
*/
//  const options = {
//   key: fs.readFileSync(__dirname + '/tools1998.top.key'),
//   cert: fs.readFileSync(__dirname + '/tools1998.top_bundle.pem'),
// }
// var httpsserver = https.createServer(options, app.callback()).listen(443)
// httpsserver.on('error', onError);
// httpsserver.on('listening', onListening);
/**
* Listen on provided port, on all network interfaces.
*/

var server = http.createServer(app.callback());
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log(`app started at port ${process.env.PORT || '3000'}...`)
/**
* Normalize a port into a number, string, or false.
*/

function normalizePort(val) {
 var port = parseInt(val, 10);

 if (isNaN(port)) {
   // named pipe
   return val;
 }

 if (port >= 0) {
   // port number
   return port;
 }

 return false;
}

/**
* Event listener for HTTP server "error" event.
*/

function onError(error) {
 if (error.syscall !== 'listen') {
   throw error;
 }

 var bind = typeof port === 'string'
   ? 'Pipe ' + port
   : 'Port ' + port;

 // handle specific listen errors with friendly messages
 switch (error.code) {
   case 'EACCES':
     console.error(bind + ' requires elevated privileges');
     process.exit(1);
     break;
   case 'EADDRINUSE':
     console.error(bind + ' is already in use');
     process.exit(1);
     break;
   default:
     throw error;
 }
}

/**
* Event listener for HTTP server "listening" event.
*/

function onListening() {
 var addr = server.address();
 var bind = typeof addr === 'string'
   ? 'pipe ' + addr
   : 'port ' + addr.port;
 debug('Listening on ' + bind);
}
