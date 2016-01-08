exports.register = function (server, options, next) {

  var io = require('socket.io')(server.listener);

  io.on('connection', function (socket) {

      
    socket.on('hello-channel', function(msg) {
      setInterval(function() {
        socket.emit('different-channel', 'message');
      }, 2000);
      
      console.log('from the client', msg);
    })
  });

  return next();
};

exports.register.attributes = {
  name: 'Socket'
};