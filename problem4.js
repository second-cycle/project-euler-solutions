// problem 4

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(number) {
    text = number.toString();
    stringLength = text.length;

    // takes first half of number without middle digit and turns it into an array
    firstHalf = text.substr(0, Math.floor(stringLength / 2));
    firstHalfArray = firstHalf.split("");
    // console.log(firstHalfArray);

    // takes second half of number without middle digit and turns it into an array then reverses it
    secondHalf = text.substr(Math.ceil(stringLength / 2), stringLength - 1);
    secondHalfArray = secondHalf.split("");
    reversedSecondHalfArray = secondHalfArray.reverse();
    // console.log(reversedSecondHalfArray);

    arrayLength = firstHalfArray.length;
    return (
        JSON.stringify(firstHalfArray) ==
        JSON.stringify(reversedSecondHalfArray)
    );
}

let a = 999;
let largestPalindrome = 0;
let palindromeArray = [];

for (let b = a; b > 0; b--) {
    for (let c = a; c > 0; c--) {
        let product = c * b;
        if (isPalindrome(product)) {
            palindromeArray.push(product);
            // console.log(
            //     `The product of ${b} and ${c} is a palindrome: ${product}`
            // );
            // console.log(`${palindromeArray}`);
            c = 0;
        }
    }
}

for (let i = 0; i < palindromeArray.length; i++) {
    if (palindromeArray[i] > largestPalindrome) {
        largestPalindrome = palindromeArray[i];
    }
}

palindromeArray = palindromeArray.sort().reverse();

console.log(palindromeArray);

console.log(`The largest palindrome is: ${largestPalindrome}`);
