// function sumOfArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }

//   return sum;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// const result = sumOfArray(numbers);

// console.log(result);

// function arrayFlat(arr) {
//   const newArr = arr.reduce(function (flat, toFlatten) {
//     return flat.concat(
//       Array.isArray(toFlatten) ? arrayFlat(toFlatten) : toFlatten
//     );
//   }, []);
//   return newArr;
// }

// function arrayFlat(arr) {
//   const newArr = arr.reduce(function (acc, item) {
//     return acc.concat(Array.isArray(item) ? arrayFlat(item) : item);
//   }, []);

//   return newArr;
// }

// function arrayFlat(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       // arrayFlat(arr[i]);

//       for (let j = 0; j < arr[i].length; j++) {
//         newArr.push(arr[i][j]);
//       }
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

function arrayFlat(arr) {
  const newArr = arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? arrayFlat(item) : item);
  }, []);

  return newArr;
}

const arr = [1, 2, 3, [4, 5], 6, 7, [8, 9, [10, 11, 12, [13, 14, [15]]]]];

console.log(arrayFlat(arr));
