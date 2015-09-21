var Vi = function(){
  Vi = {};
  /*----------  Appliction  ----------*/

  Vi.App = function(init){
    var app = {};

    app.title = init.title;
    app.commands = init.commands;
    // app.buildApp = buildApplication;

    return app;
  };


  /*----------  Interface  ----------*/

  Vi.Interface = {
    speak: function(phrase){
      /* Speak from Vi interface */
    }
  };

  /*----------  Built application from customized Vi.App. This is what the iOS application will interacte with.  ----------*/
  
  Vi.Build = {};

  /* Design? Here just a function on Vi. To be called before checking final build version of the application */
  
  var buildApplication = function(){
    Vi.Build.title = Vi.App.title;

    /* Iterate through commands building up functions that can be directly invoked from Vi app with full text input */
    /* The format for this will be nested objects with the different keys of the phrase corresponding with it's keyword/keyphrase */
    Vi.Build.commands = parseCommands(Vi.App.commands);
    

    Vi.Build.attemptCommand = function(phrase) {
      /* Is this command available. If it is, call the function with this input */
      /* If no command found, use interface to speak back out */
      attemptCommand(phrase, Vi.Build.commands);
    };

  };

  /*----------  Helpers  ----------*/
  /* Refactor these all out to closure scope, only on helpers for testing */
  Vi.helpers = {};

  Vi.helpers.attemptCommand = function(phrase, commands){
    var words = phrase.split(' ');

    for (var i = 0; i < words.length; i++) {
      /* If matching command with part of word found */
      if (commands.hasOwnProperty(words[i])){
        callCommandWithText(commands[words[i]], phrase);
        return true;
      }
    }

    return false;
    /* Failure handling */
    
  };

  Vi.helpers.parseCommands = function(commands){
    /* Iterate through the commands object passed in from the user. */
    /* The final parsedCommands will be the function that is called when the command is heard. This will properly map arguments to the function */
    /* Creates nested object for other multi segmented phrases */
    var parsed = {};

    for ( var key in commands ) {
      /* Parse into chunks of phrase + argument */
      var segments = key.split(/(\$[0-9])/);

      for (var i = 0; i < segments.length; i++) {
        // segments[i]
      }

      // parsed[firstSegment] = function() {
      //   commands[key]('error', secondSegment);
      // };
      
    }
     
    return parsed;
  };

  Vi.helpers.parseCommand = function(){
    /* Maps ful */
    
  };

  Vi.helpers.callCommandWithText = function(fn, key, phrase){
    /* Splits text around base command. i.e. 'hi John' where hi is the key to the parsed command will give you the remaning text */
    
    var textToPass = phrase.split(key)[1];
    fn(textToPass);

    // fn.apply(null, argsToPass);
  };  

  return Vi;

}();

module.exports = Vi;