function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime
  if (num <= 3) return true;  // 2 and 3 are prime

  // Eliminate multiples of 2 and 3
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Check divisibility up to the square root of the number
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function generatePrimes(limit) {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

// Example: Generate prime numbers up to 50
console.log(generatePrimes(50));
