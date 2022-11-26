// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  return string.split('').reduce((acc, item) => {
    item === item.toUpperCase() ? acc.push(' ') : null
    acc.push(item);
    return acc
  }, []).join('');
}

console.log(solution("camelCasingTest"))
console.log(solution("identifier" ))
console.log(solution("" ))
