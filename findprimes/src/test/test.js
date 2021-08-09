const functions = require('../helperFunctions');
const mocks = require('./mocks').mocks;

const primeTester = functions.primeTester;
const firstNPrimes = functions.firstNPrimes;

require('chai').should();

describe('primeTester', () => {
  it('should test if a number is prime', function () {
    mocks.truePrimes.forEach(n => primeTester(n).should.be.true);
    mocks.falsePrimes.forEach(n => primeTester(n).should.be.false);
  });
});

describe('firstNPrimes', () => {
  it('should return an array of primes up to the Nth prime', function () {
    firstNPrimes(10).should.eql(mocks.nPrimes);
  });
});