// problem 6

// The sum of the squares of the first ten natural numbers is 385,

// The square of the sum of the first ten natural numbers is 3025,

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function findSumOfSquares(number) {
    let totalSquares = 0;
    for (let i = 1; i <= number; i++) {
        totalSquares += Math.pow(i, 2);
    }
    return totalSquares;
}

function findSquareOfSums(number) {
    let totalSums = 0;
    for (let i = 0; i <= number; i++) {
        totalSums += i;
    }
    totalSums = Math.pow(totalSums, 2);
    return totalSums;
}

number = 100;
console.log(findSumOfSquares(number));
console.log(findSquareOfSums(number));
let difference = findSquareOfSums(number) - findSumOfSquares(number);
console.log(difference);
