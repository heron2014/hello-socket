// (function () {
  
//   document.getElementById('button_action').addEventListener('click', function() {
//     console.log('clicked')
//      var socket = io.connect('http://localhost:8000');
  
//       socket.emit('hello-channel', { msg: 'hello' });
  
//   }, false);
  
// }());

// var form = document.getElementsByTagName('form')[0];
// form.addEventListener("submit", function(e) {

//     e.preventDefault();

//     var socket = io.connect('http://localhost:8000');
//     console.log('client');
//     socket.emit('hello-channel', { msg: 'hello' });

// });

var socket = io('https://testing-socket.herokuapp.com/');


// document.getElementById('hello').addEventListener('click', function() {
//   console.log('clicked');
//   socket.emit('hello-channel', 'mesage from client');

   
// });

socket.on('heroku-channel', function(message) {

  document.getElementById('message-heroku').textContent = message;
  console.log('catch on client message from server', message);
});

