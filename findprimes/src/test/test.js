const functions = require('../helperFunctions');
const mocks = require('./mocks').mocks;

const primeTester = functions.primeTester;

require('chai').should();

describe('primeTester', () => {
  it('should test if a number is prime', function () {
    mocks.truePrimes.forEach(n => primeTester(n).should.be.true);
    mocks.falsePrimes.forEach(n => primeTester(n).should.be.false);
  });
});