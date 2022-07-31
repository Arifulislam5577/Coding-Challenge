/**
 * Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
 */

function numInStr(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const result = element.split('');

    if (result.includes('0' || '1' || '2')) {
      console.log(result.join(''));
    }
  }
}

numInStr(['1a', 'a', '2b', 'b']);
