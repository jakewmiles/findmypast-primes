const functions = require('../helperFunctions');
const mocks = require('./mocks').mocks;

const primeTester = functions.primeTester;
const firstNPrimes = functions.firstNPrimes;
const delimitThousands = functions.delimitThousands;

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

describe('delimitThousands', () => {
  it('should return numbers above 3 digits delimited with commas', function () {
    delimitThousands(10).should.eql('10');
    delimitThousands(100).should.eql('100');
    delimitThousands(1000).should.eql('1,000');
    delimitThousands(10000).should.eql('10,000');
    delimitThousands(100000).should.eql('100,000');
    delimitThousands(1000000).should.eql('1,000,000');
  });
});