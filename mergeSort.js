// MERGE SORT

console.log("***Merge-Sort Array Logs***");

const arrayFib = [3, 2, 1, 13, 8, 5, 0, 1];
const array1 = [13];
const array2 = [105, 79, 100, 110];
const array3 = [3, 10, 15, 21, 1];
const array4 = [
  1,
  [3, [9, [4, 15]]],
  [6, [-77, [8, [6.5, -10.185]]]],
  [13, [1102, [13, [34.45546, 84]]]],
];
const flatArray4 = array4.flat(4);
const array5 = [
  "zulu",
  "lima",
  "alpha",
  "charlie",
  "x-ray",
  "echo",
  1,
  3,
  88,
  "a",
  "A",
  "z",
  "Z",
  "November",
  "NOVEMBER",
  "november",
];
const array6 = [
  "zulu",
  "lima",
  "alpha",
  "charlie",
  "x-ray",
  "echo",
  "november",
];

function mergeSort1(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const midNum = Math.floor(arr.length / 2);
    const subArrL = arr.slice(0, midNum);
    const subArrR = arr.slice(midNum);
    return merge(mergeSort1(subArrL), mergeSort1(subArrR));
  }

  function merge(arrL, arrR) {
    const sortedArr = [];
    while (arrL.length && arrR.length) {
      if (arrL[0] < arrR[0]) {
        sortedArr.push(arrL.shift());
      } else {
        sortedArr.push(arrR.shift());
      }
    }

    return [...sortedArr, ...arrL, ...arrR];
  }
}

console.log(mergeSort1(arrayFib)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort1(array1)); // 13
console.log(mergeSort1(array2)); // [79, 100, 105, 110]
console.log(mergeSort1(array3)); // [1, 3, 10, 15, 21]
console.log(mergeSort1(array4)); // nested arrays with a 1
console.log(mergeSort1(flatArray4)); // [-77, -10.185, 1, 3, 4, 6, 6.5, 8, 9, 13, 13, 15, 34.45546, 84, 1102]0: -771: -10.1852: 13: 34: 45: 66: 6.57: 88: 99: 1310: 1311: 1512: 34.4554613: 8414: 1102

console.log(
  `Mixed number and string array can give incorrect results ${mergeSort1(
    array5
  )}`
); // Mixed number and string array can give incorrect results A,NOVEMBER,November,Z,a,november,z,1,3,88,alpha,charlie,echo,lima,x-ray,zulu

console.log(mergeSort1(array6)); // ["alpha", "charlie", "echo", "lima", "november", "x-ray", "zulu"];

// Alternate code...
function merge2(arrL, arrR) {
  const sortedArr = [];
  let i = 0,
    j = 0;

  while (i < arrL.length && j < arrR.length) {
    if (arrL[i] < arrR[j]) {
      sortedArr.push(arrL[i]);
      i++;
    } else {
      sortedArr.push(arrR[j]);
      j++;
    }
  }

  return [...sortedArr, ...arrL.slice(i), ...arrR.slice(j)];
}

function mergeSort2(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const midNum = Math.floor(arr.length / 2);
    const subArrL = arr.slice(0, midNum);
    const subArrR = arr.slice(midNum);
    return merge2(mergeSort2(subArrL), mergeSort2(subArrR));
  }
}

console.log(mergeSort2(arrayFib)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort2(array1)); // 13
console.log(mergeSort2(array2)); // [79, 100, 105, 110]
console.log(mergeSort2(array3)); // [1, 3, 10, 15, 21]
console.log(mergeSort2(array4)); // nested arrays with a 1
console.log(mergeSort2(flatArray4)); // [-77, -10.185, 1, 3, 4, 6, 6.5, 8, 9, 13, 13, 15, 34.45546, 84, 1102]0: -771: -10.1852: 13: 34: 45: 66: 6.57: 88: 99: 1310: 1311: 1512: 34.4554613: 8414: 1102

console.log(
  `Mixed number and string array can give incorrect results ${mergeSort2(
    array5
  )}`
); // Mixed number and string array can give incorrect results A,NOVEMBER,November,Z,a,november,z,1,3,88,alpha,charlie,echo,lima,x-ray,zulu

console.log(mergeSort2(array6)); // ["alpha", "charlie", "echo", "lima", "november", "x-ray", "zulu"];