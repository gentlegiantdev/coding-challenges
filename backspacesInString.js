// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
  let solution = [];
  s.split('').forEach(item => {
    item != '#' ? solution.push(item) : solution.pop();
  })
  return solution.join('');
}


