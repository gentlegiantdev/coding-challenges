// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

function largest(n, array) {
  let solution = [];
  let sorted = array.sort((a,b) => b - a);
  for(i=0;i<n;i++){
    solution.push(sorted[i])
  }
  return solution.reverse();
}