// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
  let ordered = array.sort((a,b) => a - b)
  return ordered[ordered.length-1]
}