var Vi = require('./viapi.js');
var myRequest = new XMLHttpRequest();

var gitapp = new Vi.App({  
  title: "git",
  commands: {
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
          console.log("my last commit was " + resJson[0] + " in the " + resJson[1] + " repository");
          voice("my last commit was " + resJson[0] + " in the " + resJson[1] + " repository");
        })
      

    },
    "what was last commit at repo $1": function(err, voice, repo){
      console.log('repo ' + repo);
    }
  }
});

module.exports = gitapp;