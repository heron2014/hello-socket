var Hapi = require('hapi');
var Handlebars = require('handlebars');
var Inert = require('inert');
var Vision = require('vision');


var Assets = require('./assets');
var Home = require('./home');
var Hello = require('./hello');

exports.init = function (port, next) {

  var server = new Hapi.Server();
  server.connection({port: port});

  var io = require('socket.io')(80);

  var plugins = [Inert, Vision, Assets, Home, Hello];

  server.register(plugins, function (err) {
    if (err) {
      return next(err);
    }

    server.views({
      engines: {
        html: Handlebars
      },
      relativeTo: __dirname + '/../views',
      path: '.',
      layout: 'default',
      layoutPath: 'layout' 
    });

    server.start(function (err) {
      return next(err, server);
    });
  });
}