'use strict';

var chai =require('chai'),
expect=chai.expect;

chai.should();

function isEven(num){
return num%2 ==0;
}

describe('isEven',function(){
it('should return true when numb is even',function(){
isEven(4).should.be.true;
});

it('should return false when num is odd',function(){
expect(isEven(5)).to.be.false;
})
});



var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});