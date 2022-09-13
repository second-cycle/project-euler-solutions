// problem 5

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

let highestRange = 17;

function isItDivisible(number) {
    let isDivisible = true;
    for (let i = 1; i <= highestRange && isDivisible == true; i++) {
        if (number % i == 0) {
            isDivisible = true;
            //console.log(isDivisible);
        } else {
            isDivisible = false;
            //console.log(isDivisible);
        }
    }
    if (isDivisible == true) {
        return true;
    } else {
        return false;
    }
}

function findSmallestValue() {
    valueFound = false;
    for (let i = highestRange; valueFound == false; i++) {
        valueFound = isItDivisible(i);
        smallestValue = i;
    }
    return smallestValue;
}

console.log(findSmallestValue());
