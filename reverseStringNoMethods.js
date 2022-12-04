// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

function reverseString(str){
  let reversedString = []
  for(i=str.length-1; i>=0; i--){
    reversedString.push(str[i])
  }
  return reversedString.join('');
}

console.log(reverseString("wowzy"))
console.log(reverseString("Catan"))
console.log(reverseString("bamBoozled"))