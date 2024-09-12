//1.Print odd numbers in an array

(function () {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let printOdd = function (arr) {
    return arr.filter(function (num) {
      return num % 2 !== 0;
    });
  };
  console.log(printOdd(arr));
})();

//2.Convert all the strings to title caps in a string array

(function () {
  let arr = ["hello world", "javascript is fun", "happy learning"];
  let toTitleCaps = function (arr) {
    return arr.map(function (str) {
      return str.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
      });
    });
  };
  console.log(toTitleCaps(arr));
})();

//3. Sum of all numbers in an array

(function () {
  let arr = [1, 2, 3, 4, 5];
  let sumArray = function (arr) {
    return arr.reduce(function (acc, num) {
      return acc + num;
    }, 0);
  };
  console.log(sumArray(arr));
})();

//4. Return all the prime numbers in an array
(function () {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let isPrime = function (num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  let primeNumbers = function (arr) {
    return arr.filter(function (num) {
      return isPrime(num);
    });
  };
  console.log(primeNumbers(arr));
})();

//5. Return all the palindromes in an array

(function () {
  let arr = ["madam", "racecar", "hello", "world", "level"];
  let isPalindrome = function (str) {
    return str === str.split("").reverse().join("");
  };
  let palindromes = function (arr) {
    return arr.filter(function (str) {
      return isPalindrome(str);
    });
  };
  console.log(palindromes(arr));
})();

//6. Return median of two sorted arrays of the same size

(function () {
  let findMedian = function (arr1, arr2) {
    let merged = arr1.concat(arr2).sort((a, b) => a - b);
    let mid = merged.length / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
  };
  let arr1 = [1, 3, 5];
  let arr2 = [2, 4, 6];
  console.log(findMedian(arr1, arr2));
})();
//7. Remove duplicates from an array
(function () {
  let arr = [1, 2, 2, 3, 4, 4, 5];
  let removeDuplicates = function (arr) {
    return arr.filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });
  };
  console.log(removeDuplicates(arr));
})();
//8. Rotate an array by k times
(function () {
  let rotateArray = function (arr, k) {
    k = k % arr.length; // Handle cases where k is greater than array length
    return arr.slice(-k).concat(arr.slice(0, -k));
  };
  let arr = [1, 2, 3, 4, 5, 6, 7];
  let k = 3;
  console.log(rotateArray(arr, k));
})();
