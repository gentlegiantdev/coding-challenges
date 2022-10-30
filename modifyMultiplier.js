function modifyMultiply (str,loc,num) {
  let word = str.split(' ')[loc]
  let arr = []
  for(i = 0;  i < num; i++){
    arr.push(word);
  }
  return arr.join('-')
} 