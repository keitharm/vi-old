var Vi = require('./viapi.js');

/* Sample chat implementation for Vi*/

var chat = new Vi.App({

  /* phonetic title */
  
  title: "chat",

  commands: {
    /* No arguments */
    "hi": function(err, voice){
      console.log('hi command triggered!');
      voice('hi');
    },
    /* Single trailing argument */
    "hello $1": function(err, voice, name){
      console.log('hello ' + name);
      voice("hello " + name);
    },
    /* Multiple argument with break word declared */
    "say $1 to $2": function(err, voice, messsage, user){
      console.log('say ' + message + " to " + user);
      voice("say " + message + " to " + user);
    }
  }
});

module.exports = chat;