// problem 9

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2

// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const targetNumber = 1000;

// a + b + c = targetnumber
// a < b < c
// a^2 + b^2 = c^2
// a + b + Math.sqrt(a^2 + b^2) = 1000

function findValues(targetNumber) {
    let target1;
    let target2;
    let a;
    let b;

    for (b = 1; b < targetNumber - 1; b++) {
        for (a = 2; a < targetNumber - 2; a++) {
            if (
                a + b + Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)) ==
                    targetNumber &&
                a < b
            ) {
                target1 = a;
                target2 = b;
                target3 = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            }
        }
    }
    return target1 * target2 * target3;
}

console.log(findValues(targetNumber));
