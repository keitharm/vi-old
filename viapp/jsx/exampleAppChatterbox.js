var Vi = require('./viapi.js');


/* Sample chat implementation using Vi application */

var chatterbox = new Vi.App({

  /* phonetic title */
  
  title: "chatter box",

  commands: {
    /* No arguments */
    "hi": function(err){
      console.log('hi command triggered!');
    },

    /* Single trailing argument */
    "hello $1": function(err, user){

      /* Sample 'say hello to a user' request */
      
      // $.ajax({
      //   url: 'MY_CHAT_API',
      //   type: 'POST',
      //   dataType: 'json',
      //   data: {user: name, message: 'hello'},
      // })
      // .done(function() {
      //   console.log("success");
      // })
      
      console.log('hello ' + name);
    },

    /* Multiple argument with break word declared */
    "say $1 to $2": function(err, messsage, user){
      console.log('say ' + message + " to " + user);

      /* Sample Post request */
      
      // $.ajax({
      //   url: 'MY_CHAT_API',
      //   type: 'POST',
      //   dataType: 'json',
      //   data: {user: name, message: message},
      // })
      // .done(function() {
      //   console.log("success");
      // })
    }
  }
});

module.exports = chatterbox;