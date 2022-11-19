// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    let newArr = [];
    word = word.toLowerCase();
    for(i=0; i<word.length; i++){
      if(word.indexOf(word[i]) === word.lastIndexOf(word[i])){
        newArr.push('(')
      }else{
        newArr.push(')')
      }
    }
  return newArr.join("");
}

console.log(duplicateEncode("din" ))
console.log(duplicateEncode("recede" ))
console.log(duplicateEncode("Success" ))
console.log(duplicateEncode( "(( @"  ))