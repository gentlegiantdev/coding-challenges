// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
  let newArr = [];
    for(i=0;i<a.length;i++){
        if(newArr.indexOf(a[i]) == -1 ){
        newArr.push(a[i])
    }    
    }
return newArr;
}