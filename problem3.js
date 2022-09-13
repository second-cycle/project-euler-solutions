//Problem #3

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600 851 475 143 ?

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

function reduceToPrimeFactors(factorArray) {
    primeFactors = [];
    for (let i = 0; i < factorArray.length; i++) {
        isPrime = makeFactorArray(factorArray[i]);
        if (isPrime.length == 2) {
            //console.log(`${factorArray[i]} is a prime number`);
            primeFactors.push(factorArray[i]);
        }
    }
    return primeFactors;
}

numberToFactor = 600851475143;
let factorArray = makeFactorArray(numberToFactor);
let primeFactorArray = reduceToPrimeFactors(factorArray);
console.log(`The prime factors of ${numberToFactor} are: ${primeFactorArray}.`);
