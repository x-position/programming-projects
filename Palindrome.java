import java.util.ArrayList;

public class Palindrome {
    public static void main(String[] args) {
        int originalNumber = 10; //input number to check here
        if (originalNumber!= palindromeNum(originalNumber)||originalNumber<0){ //unlike in our p5 code, we do actually have to check here whether it goes under 0. after some research, i figured out that in the p5js code, log10s for negative numbers return NaN, so apparently the loop skips running? if future me is reading this, or someone else, please correct me){
            System.out.println(false); //prints out answer. apparently, after reading online, this is not the adequate way of creating a result, i will fix in future programs
        }
        else {
            System.out.println(true);
        }
        
    }

    public static int palindromeNum(int n) {
        ArrayList<Integer> array = new ArrayList<>(); //new arraylist
        for (int i = (int) Math.log10(n) + 1; i > 0; i--) { //same check as before, just making sure we have (int) there
            array.add(0,n/(int) Math.pow(10, i - 1)); //similarly, making sure we have (int). also, array.add lets us choose the placement of the entry, like this (place, entry), so place 0 is  first.
            n=n%(int)Math.pow(10, i - 1); 
            

        }
        int total = 0; //starts our running total variable to join the numbers off. don't know what to say about this.
        for (int digit : array) { //for every digit in array
            total = total * 10 + digit; //here, same logic as before. running total is added up making sure to keep numbers on the right lines.
        }
        return total; //returns it to the main

        }
    }
