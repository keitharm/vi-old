var expect = require('chai').expect;
var Vi = require('../src/api.js');

describe('Vi API', function() {
  it('should exist', function() {
    return expect(Vi).to.be.ok;
  });
  it('should be an object', function() {
    return expect(Vi).to.be.a('object');
  });
});