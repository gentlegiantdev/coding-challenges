// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
  let oddCaps = []
  let evenCaps = []
  
  for(i=0;i<s.length;i++){
    if(i % 2 === 0){
      oddCaps.push(s[i].toLowerCase());
      evenCaps.push(s[i].toUpperCase())
    } else {
      evenCaps.push(s[i].toLowerCase());
      oddCaps.push(s[i].toUpperCase())
    }
  }
  
  return [evenCaps.join(''), oddCaps.join('')];
};