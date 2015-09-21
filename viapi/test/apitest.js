var expect = require('chai').expect;
var Vi = require('../src/api.js');

describe('Vi API', function() {
  describe(' - basics - ', function(){
    it('should exist', function() {
      return expect(Vi).to.be.ok;
    });
    it('should be an object', function() {
      return expect(Vi).to.be.a('object');
    });
    it('should have an App constructor', function(){
      return expect(Vi.App).to.be.a('function');
    });
    it('should have an Interface object', function(){
      return expect(Vi.Interface).to.be.a('object');
    });
  });

  describe(' - instantiation -', function(){
    it('should allow new app creation with class', function(){
      var myApp = new Vi.App({});

      return expect(myApp).to.be.a('object');
    });
    it('should have a title', function(){
      var myApp = new Vi.App({
        title: 'My app'
      });

      return expect(myApp.title).to.equal('My app');
    });
    it('should have a commands object', function(){
      var myApp = new Vi.App({
        commands: {}
      });

      return expect(myApp.commands).to.be.a('object');
    });
    it('should have assigned command functions', function(){
      var myApp = new Vi.App({
        commands: {
          "run my app": function(err){
            /* Running App */
          }
        }
      });

      return expect(myApp.commands['run my app']).to.be.a('function');
    });
  });
});

describe('Helper Functions', function(){
  describe(' - attemptCommand - ', function(){
    var commands = {
      'hi': function(err) {
        //Here!
      }
    };
    
    it('should return false if command not found', function(){

      return expect(Vi.helpers.attemptCommand('bye', commands)).to.equal(false);
    });
    it('should invoke the command if found', function(){

    });
  });

  describe(' - parseCommand - ', function(){

  });

  describe(' - parseCommands - ', function(){

  });

  describe(' - callCommandWithText - ', function(){

  });
});

describe('Build', function(){
  xit('should have a buildApplication function', function(){
    var myApp = new Vi.App({
      title: 'my app',
      commands: {}
    });
    return expect(myApp.buildApp).to.be.a('function');
  });
  xit('should have same number of commands', function(){
    // return expect(Vi.Build.commands).to.be.same.length.as(Vi.App.commands);
  });
});
