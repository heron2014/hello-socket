exports.register = function (server, options, next) {

  server.route({
    method: 'POST',
    path: '/hello',
    config: {
      description: 'populate hello word',
      handler: function (request, reply) {

        return reply.redirect('/');
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'Hello'
};