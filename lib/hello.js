exports.register = function (server, options, next) {

  server.route({
    method: 'POST',
    path: '/hello',
    config: {
      description: 'populate hello word',
      handler: function (request, reply) {

        var io = require('socket.io')(server.listener);

        // io.sockets.on('connection', function(socket) {
        //   socket.emit({msg: 'welcome'});
        // });


        
        // io.on('connection', function(socket){
        //   console.log('something');
        //   socket.on('hello-channel', function(msg){
        //   console.log('message: ' + msg);
        //   });
        // });
        return reply.redirect('/');
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'Hello'
};