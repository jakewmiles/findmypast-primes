const primeTester = (n) => {
  if (n === 2) return true;
  if (n === 1 || n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

const firstNPrimes = (n) => {
  const primeList = [];
  let potentialPrime = 1;
  while (primeList.length < n) {
    if (primeTester(potentialPrime)) {
      primeList.push(potentialPrime)
      potentialPrime++;
    } else potentialPrime++;
  }
  return primeList;
}

exports.primeTester = primeTester;
exports.firstNPrimes = firstNPrimes;

