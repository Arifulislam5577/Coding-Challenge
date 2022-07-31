/**
 Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
 */

function sevenBoom(arr) {
  let hasSeven = false;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const result = element.toString().includes(7);

    if (result) {
      hasSeven = true;
    }
  }
  return hasSeven ? "Boom!" : "there is no 7 in the array";
}

console.log(sevenBoom([2, 6, 7, 9, 3]));
console.log(sevenBoom([33, 68, 400, 5]));
console.log(sevenBoom([86, 48, 100, 66]));
console.log(sevenBoom([76, 55, 44, 32]));
console.log(sevenBoom([35, 4, 9, 37]));
