// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// takes in a string. ignore capitalization


// function duplicateEncoder(str){
//   let newArr = []
//   for(i = 0; i < str.length; i++){
//     str.indexOf(str[i]) === str.lastIndexOf(str[i]) ?     newArr.push('(') : newArr.push(')')
//   }
//   return newArr.toString();
// }

function duplicateEncoder(str){
  return str.toLowerCase().split('').map((l,i,a) => a.indexOf(l) === a.lastIndexOf(l)? '(' : ')').join('')
}



console.log(duplicateEncoder("din"))
console.log(duplicateEncoder("recede"))
console.log(duplicateEncoder("Success"))
console.log(duplicateEncoder("(( @"))