// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4,

function sortArray(array) {
  let evenArr = [];
  let oddArr = [];
  let solution = [];
  
  for(i=0;i<array.length;i++){
    if(array[i] % 2 === 0){
      evenArr.push(array[i]);
    } else {
      oddArr.push(array[i]);
    }
  }
  
  oddArr.sort((a,b) => a - b);
  
  for(i=0;i<array.length;i++){
    if(array[i] % 2 === 0){
      solution.push(evenArr.shift())
    } else {
      solution.push(oddArr.shift())
    }
  }
  return solution;
}
