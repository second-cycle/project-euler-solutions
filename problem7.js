// problem 7

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

function makeFactorArray(number) {
    factors = [];

    for (let b = 1; b <= Math.sqrt(number); b++) {
        if (number % b == 0) {
            factors.push(b);
        }
    }

    for (let i = factors.length - 1; i >= 0; i--) {
        // conditional to prevent square root from being added to array twice
        let possibleSquareRoot = number / factors[i];
        if (factors.includes(possibleSquareRoot) == false) {
            factors.push(possibleSquareRoot);
        }
    }
    return factors;
}

function isPrime(number) {
    primeNumbers = [];
    for (let i = 2; primeNumbers.length < number; i++) {
        let factorArray = makeFactorArray(i);
        if (factorArray.length == 2) {
            primeNumbers.push(factorArray[factorArray.length - 1]);
            // console.log(primeNumbers);
        }
    }
    highestPrime = primeNumbers[primeNumbers.length - 1];
    return highestPrime;
}

let number = 10001;
console.log(isPrime(number));
