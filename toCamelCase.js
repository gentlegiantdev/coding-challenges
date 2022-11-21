// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){

  const camelType = str.charAt(0) === str.charAt(0).toUpperCase() ? 'uppercase' : 'camelCase';
  
  const mutateArr = str.split(/[-_]/g).map((n,i) => {
    if(i === 0){
      if(camelType === 'camelCase'){
        return n.charAt(0).toLowerCase() + n.slice(1);
      }
      return n;
    }
    return n.charAt(0).toUpperCase() + n.slice(1);
  });
  return mutateArr.join('');
}

console.log(toCamelCase("the-stealth-warrior"))


