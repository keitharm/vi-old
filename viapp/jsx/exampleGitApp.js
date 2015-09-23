var Vi = require('./viapi.js');

var myRequest = new XMLHttpRequest();

var gitapp = new Vi.App({  
  title: "git",
  commands: {
    "git": function(err, voice){
      console.log('git command registered');
      voice('Hi from git');
    },

    "what was my last commit": function(err, voice){
      console.log('getting commit message for most recent commit');
      var obj = {
        method: 'GET'
      };
      fetch('http://104.236.186.70/api/commit', obj)  
        .then(function(res) {
          console.log(res);
          return res.json();
        })
        .then(function(resJson) {
          var finalPhrase = "my last commit was " + resJson[0] + " in the " + resJson[1] + " repository";
          voice(finalPhrase);
        })
    },

    "when was my last commit at repository $1": function(err, voice, repo){
      console.log('getting commit message for most recent commit' + repo);
      var obj = {
        method: 'GET'
      };

      fetch('http://104.236.186.70/api/commit/' + repo, obj)  
        .then(function(res) {
          console.log(res);
          return res.json();
        })
        .then(function(resJson) {
          var finalPhrase = "my last commit for repository " + repo + " was at " + resJson['date'];
          voice(finalPhrase);
        })
    }
  }
});

module.exports = gitapp;