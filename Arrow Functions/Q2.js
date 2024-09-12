//1. Print odd numbers in an array
const printOdd = (arr) => arr.filter((num) => num % 2 !== 0);
console.log(printOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));
//2. Convert all the strings to title caps in a string array
const toTitleCaps = (arr) =>
  arr.map((str) => str.replace(/\b\w/g, (char) => char.toUpperCase()));
console.log(
  toTitleCaps(["hello world", "javascript is fun", "happy learning"])
);
//3. Sum of all numbers in an array
const sumArray = (arr) => arr.reduce((acc, num) => acc + num, 0);
console.log(sumArray([1, 2, 3, 4, 5]));
//4. Return all the prime numbers in an array
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const primeNumbers = (arr) => arr.filter((num) => isPrime(num));
console.log(primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
//5. Return all the palindromes in an array
const isPalindrome = (str) => str === str.split("").reverse().join("");
const palindromes = (arr) => arr.filter((str) => isPalindrome(str));
console.log(palindromes(["madam", "racecar", "hello", "world", "level"]));
