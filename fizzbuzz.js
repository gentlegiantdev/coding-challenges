// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

// taking in a number. 

//Is it always an integer? Will it ever be negative or a floated digit? Is it possible for it to be anything other than a number? Will it ever be blank?

// want to print - every number, "fizz" if num is divisible by 3, "buzz" if num is divisible by 5, "fizz buzz" if num is divisible by 3 AND 5.

// 15 -> "fizz buzz"
// 9 -> "fizz"
// 20 -> "buzz"
// 7 -> 7

// we want a condition to check which of numbers are divisible by 3, 5, 3 + 5, and print appropriate responses

function fizzBuzz(num) {
   for(let i = 1; i <= num; i++){ 
    if(i % 3 == 0 && num % 5 === 0){
        console.log("fizz buzz"); 
    } else if (i % 3 === 0){
        console.log("fizz");
    } else if (i % 5 === 0){
        console.log("buzz");
    } else {
        console.log(num);
    }
   }
}


fizzBuzz(15)
fizzBuzz(9)
fizzBuzz(20)
fizzBuzz(7)