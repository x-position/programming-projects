/*
Problem given is this:
Given an integer x, return true if x is a palindrome, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1

Follow up: Could you solve it without converting the integer to a string?

*/


/* 
Solution ignoring follow-up (much easier)

n = 121;
function setup() {
  if (n == palindromeNum(n)) {
    print(true);
  } else {
    print(false);
  }
}

function palindromeNum(n) {
  return Number(str(n).split("").reverse().join(""));
}

*/


//my solution, taking into account follow-up

//set n to any number, and array is used to store numbers temporarily instead of string
let array
n = 11;


//setup function sets up array as an array, then checks whether palindrome is true or false
function setup() {
  array=[]
  if (n == palindromeNum(n)) {
    print(true);
  } else {
    print(false);
  }
}

function palindromeNum(n) {
  //i is finding the amount of digits, important to clarify floor always rounds down the number
  
  //unshift is used to put all digits in correct order without needing to tamper with them later, the idea is that when used, it will add the digit into the array as the first entry
  
 //also, while writing this, i forgot that ^ in javascript does not perform exponentiation, and that kind of led me to a lot of errors without knowing why. it is in fact the bitwise xor operator, and you can figure out what that is
  
//the idea of the calculation is that it takes the largest digit,  divides it by its' power of 10, rounds it down, which essentially gets the largest digit of the number with nothing else. it is then put into an array to be stored temporarily.  
//the next line deletes the largest digit from n, by doing a similar calculation and uses modulo to figure out what the rest of the number is, and then the process is repeated to find the second biggest number, and so on
for(i= floor(Math.log10(n))+1;i>0;i--){array.unshift(floor(n/Math.pow(10,i-1)))
   n=n%Math.pow(10,i-1)}
  //array.reduce is a standard javascript function which looks through an array to condense all elements into a single value. total is the running total of all previous iterations of the script, and digit is the current digit being added. the *10 to make it appear as 123, and not as 1+2+3, or 6, as we want to reverse the number. it is then returned to the setup script.
return array.reduce((total, digit) => total*10+digit, 0)
}
