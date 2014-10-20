// Problem #3 from Project Euler.net. 
//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?
// Just solve for numbers smaller than 1,000 and don't worry about making it efficient.

var primeFactors = [];
for (var i = 0; i < 1000; ++i) {
    if (600851475143 % i === 0) {
    primeFactors.push(i);
    }
}
var lpf = primeFactors.length;

alert(primeFactors[lpf - 1]);