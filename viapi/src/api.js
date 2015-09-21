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
    Vi.Build.commands = Vi.App.commands;
    

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
    /* iterate throught commands, see if there is a valid match */
    for (var key in commands){
      /* If can gather arguments i.e. valid match */
      var args = Vi.helpers.inputToArgumentsArray(key, phrase);
      if(args){
        /* Add error as first argument always */
        args.unshift('error');
        return commands[key].apply(null, args);
      }
    }

    return false;    
  };

  
  Vi.helpers.inputToArgumentsArray = function(command, input){

    /* Replaces $[0-9] spots with (.*) to be used as wildcards when string is converted to RegExp */
    var reg = new RegExp(command.replace(/\$[0-9]/g, "(.*)"));

    /* Gets arguments using that regex */
    var matches = input.match(reg);

    if (!matches) {
      return null;
    }

    /* Takes out full match at index 0 */
    var args = matches.slice(1, matches.length);
    
    return args;

  }; 

  return Vi;

}();

module.exports = Vi;