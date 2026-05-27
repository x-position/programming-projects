function setup() {
  for (let n = 1000; n < 10000; n++) {//runs a loop checking all possible 4 digit numbers excluding 0000. technically, i know that i do not have to check numbers up to 10000, as it is mathematically impossible to get 4 digit number that when reversed is equal to four times the amount if it is equal or more than 2500, but i guess speed performance is not what i am looking for here at least.
    if (n == reverseNum(n) * 4) {
      print(n);
      break;
    }
  }
}

function reverseNum(n) {//uses in-built functions to turn number into string, split puts them into an array then all the characters are reversed, then all entries in that array are joined to become one number.
  return Number(str(n).split("").reverse().join(""));
}
