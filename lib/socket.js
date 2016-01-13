exports.register = function (server, options, next) {

  var io = require('socket.io')(server.listener);

  io.on('connection', function (socket) {
      
    socket.on('hello-channel', function(msg) {
      
      socket.emit('heroku-channel', msg);
    
      
      console.log('from the client', msg);
    })
  });

  return next();
};

exports.register.attributes = {
  name: 'Socket'
};