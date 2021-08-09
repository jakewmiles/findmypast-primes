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

const generatePrimeString = (primeList) => {
  let primeString = 'x-';
  let initial = -1;
  for (let i = initial; i < primeList.length; i++) {
    for (let j = initial; j < primeList.length; j++) {
      if (i === initial && j > initial) {
        primeString += delimitThousands(primeList[j]) + '-';
      } 
      else if (j === initial && i >- 1) {
        primeString += delimitThousands(primeList[i]) + '-';
      } 
      else if (i > initial && j >- 1) {
        primeString += delimitThousands(primeList[i]*primeList[j]) + '-';
      }
    }
    primeString += '\n';
  }
  return primeString;
};

const delimitThousands = (n) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

exports.primeTester = primeTester;
exports.firstNPrimes = firstNPrimes;
exports.generatePrimeString = generatePrimeString;
exports.delimitThousands = delimitThousands;