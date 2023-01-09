// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
  if (arr.length <= 1) {
    return 0;
    } else if (arr.length > 2) {
    arr.sort( (a,b) => b - a);
    return (arr[0] - arr[1]) + (arr[1] - arr[2]);
    } else {
    arr.reverse();
    return arr[0] - arr[1];
    }
}