// FIBONACCI SEQUENCE

// (Not part of project) Find the Nth Fibonacci number.
function findTheNthFibNumRec(n) {
  if (n < 2) {
    return n;
  } else {
    return findTheNthFibNumRec(n - 1) + findTheNthFibNumRec(n - 2);
  }
}

const findTheNthFibNumRecText1 = "Recursive check for the";
const findTheNthFibNumRecText2 = "Fibonacci number";
console.log(
  `${findTheNthFibNumRecText1} 0th ${findTheNthFibNumRecText2}, ${findTheNthFibNumRec(
    0
  )}`
); // 0
console.log(
  `${findTheNthFibNumRecText1} 1st ${findTheNthFibNumRecText2}, ${findTheNthFibNumRec(
    1
  )}`
); // 1
console.log(
  `${findTheNthFibNumRecText1} 2nd ${findTheNthFibNumRecText2}, ${findTheNthFibNumRec(
    2
  )}`
); // 1
console.log(
  `${findTheNthFibNumRecText1} 3rd ${findTheNthFibNumRecText2}, ${findTheNthFibNumRec(
    3
  )}`
); // 2
console.log(
  `${findTheNthFibNumRecText1} 7th ${findTheNthFibNumRecText2}, ${findTheNthFibNumRec(
    7
  )}`
); // 13
console.log(
  `${findTheNthFibNumRecText1} 8th ${findTheNthFibNumRecText2}, ${findTheNthFibNumRec(
    8
  )}`
); // 21

// ***Iterate the Fibonacci sequence and add each to an array.***

function fibs(n) {
  let arr = [];
  if (n <= 0) return arr;
  if (n >= 1) arr.push(0);
  if (n >= 2) arr.push(1);
  for (let i = 2; i < n; i++) {
    let f = arr[i - 1] + arr[i - 2];
    arr.push(f);
  }
  return arr;
}

console.log("***Iterative Fibonacci Array Logs***");
console.log(fibs(0)); // []
console.log(fibs(1)); // [0]
console.log(fibs(2)); // [0, 1]
console.log(fibs(3)); // [0, 1, 1]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// ***Recurse the Fibonacci sequence and add each to an array.***

function fibsRec1(n) {
  let arr = [];
  function findFibs(n) {
    if (n < 2) {
      return n;
    } else {
      return findFibs(n - 1) + findFibs(n - 2);
    }
  }
  for (let i = 0; i < n; i++) {
    arr.push(findFibs(i));
  }
  return arr;
}

function fibsRec2(n, arr = [0, 1]) {
  console.log("This was printed recursively"); // 7 times
  if (n > 2) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fibsRec2(n - 1, arr);
  }
  return arr;
}

// Tail Recursion
function fibsTailRec(n, a = 0, b = 1, arr = []) {
  // console.log("This was printed recursively"); // 9 times
  if (n === 0) return arr;
  arr.push(a);
  return fibsTailRec(n - 1, b, a + b, arr);
}

// Direct Recursion with Memoization
function fibsMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n < 2) return n;
  memo[n] = fibsMemo(n - 1, memo) + fibsMemo(n - 2, memo);
  return memo[n];
}

function generateFibs(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(fibsMemo(i));
  }
  return arr;
}

console.log("***Recursive Fibonacci Array Logs***");
console.log(fibsRec1(8));       // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec2(8));       // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsTailRec(8));    // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(generateFibs(8));   // [0, 1, 1, 2, 3, 5, 8, 13]
