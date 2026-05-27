let a, b, c, d;

function setup() {
  for (testA = 1; testA < 10; testA++) {
    //checks all numbers from 1-9 with temporary testing variables
    for (testB = 0; testB < 10; testB++) {
      for (testC = 0; testC < 10; testC++) {
        for (testD = 0; testD < 10; testD++) {
          if (
            testA * 1000 + testB * 100 + testC * 10 + testD ==
            (testD * 1000 + testC * 100 + testB * 10 + testA) * 4
          ) {
            a = testA; //setting the answer variables to be the correct test variables. technically not needed, but i think it looks better. i've still got a lot to learn about commenting and tidy code
            b = testB;
            c = testC;
            d = testD;
            print(a * 1000 + b * 100 + c * 10 + d);
            return;
          }
        }
      }
    }
  }
}
