//Roman to integer
//Given a roman numeral, convert it to an integer.
//Input is guaranteed to be within the range from 1 to 3999.
//I=1, V=5, X=10, L=50, C=100, D=500, M=1000
//I can be placed before V (5) and X (10) to make 4 and 9.
//X can be placed before L (50) and C (100) to make 40 and 90.
//C can be placed before D (500) and M (1000) to make 400 and 900.
//Example:
//Input: "III"
//Output: 3
//Example:
//Input: "IV"
//Output: 4
//Example:
//Input: "IX"
//Output: 9
//Example:
//Input: "LVIII"
//Output: 58
//Explanation: L = 50, V= 5, III = 3.
//Example:
//Input: "MCMXCIV"
//Output: 1994
//Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
///**
// * @param {string} s
// * @return {number}
// */



//Solution 1
var romanToInt = function(s) {
    var roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50, 
        C: 100,
        D: 500,
        M: 1000
    };
    var result = 0;
    for(var i = 0; i < s.length; i++){
    //if the current value is less than the next value, subtract the current value from the next value
    //if the current value is greater than or equal to the next value, add the current value to the next value
    //Example 1: IV, I is less than V, so subtract I from result then add V to result
    //Example 2: IX, I is less than X, so subtract I from result then add X to result
    //Example 3: LVIII, L is greater than V, so add L to result then add V to result then add I to result then add I to result then add I to result
    if(roman[s[i]] < roman[s[i+1]]){
            result -= roman[s[i]];
    
        }else{
            result += roman[s[i]];
        }
    }
    return result;
}


//Solution 2 - Recursive Solution
/* The romanToInt function takes a string s as input and returns the corresponding integer value of the Roman numeral.
The roman object is created to map each Roman numeral character to its corresponding integer value. For example, 'I' maps to 1, 'V' maps to 5, and so on.
The code checks if the input string s is empty. If it is, the function returns 0 as the base case.
The recursive step is where the actual conversion from Roman numeral to integer happens. It calculates the integer value by comparing the values of the current and next characters in the string.
The expression (roman[s[0]] < roman[s[1]] ? -1 : 1) checks if the current character has a smaller value than the next character. If it does, it multiplies the value of the current character by -1 to subtract it from the total value. Otherwise, it multiplies it by 1 to add it to the total value.
Finally, the function recursively calls romanToInt with the substring of s starting from the second character (s.substring(1)), and adds the result to the calculated value. */
var romanToInt = function(s) {
    // Create a mapping of Roman numerals to their corresponding integer values
    var roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    
    // Base case: if the input string is empty, return 0
    if (s.length === 0) return 0; 
    
    // Recursive step: calculate the integer value of the Roman numeral string
    // by comparing the values of the current and next characters in the string
    // and adding or subtracting the corresponding integer values accordingly
    return (roman[s[0]] < roman[s[1]] ? -1 : 1) * roman[s[0]] + romanToInt(s.substring(1));
};




//Solution 3  Map Function 
/*

*/
var romanToInt = function(s) {
    // Create a mapping of Roman numerals to their corresponding integer values
    var roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    
    // Initialize the result variable to store the final integer value
    var result = 0;
    
    // Split the input string into an array of characters and iterate over each character
    s.split('').map((curr, i) => {
        // Check if the current Roman numeral is smaller than the next one
        if (roman[curr] < roman[s[i + 1]]) {
            // If it is, subtract its value from the result
            result -= roman[curr];
        } else {
            // If it's not, add its value to the result
            result += roman[curr];
        }
    });
    
    // Return the final integer value
    return result;
};


//Solution 4  Reduce Function
var romanToInt = function(s) { 
// Define a function called romanToInt that takes a string as input
    var roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}; // Create an object called 'roman' that maps Roman numerals to their corresponding integer values
    return s.split('').reduce((acc, curr, i) => 
// Split the input string into an array of characters, then use the reduce method to iterate over each character
        acc + (roman[curr] < roman[s[i + 1]] ? -roman[curr] : roman[curr]), 
// If the current character's value is less than the next character's value, subtract the current value from the accumulator (acc), otherwise add the current value to the accumulator
// Set the initial value of the accumulator to 0
    );
};
