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
        if(roman[s[i]] < roman[s[i+1]]){
            result -= roman[s[i]];
        }else{
            result += roman[s[i]];
        }
    }
    return result;
}