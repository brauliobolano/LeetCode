//Solution 1 Using a Nested For Loop
var similarPairs = function (words) {
    let result = 0; // Initialize a variable 'result' to keep track of the count of similar pairs

    for (let i = 0; i < words.length; i++) { // Iterate over each word in the 'words' array
      for (let j = 0; j < words.length; j++) { // Iterate over each word in the 'words' array again
        let firstWord = [...new Set(words[i])] // Convert the current word to a Set to remove duplicate characters
          .sort((a, b) => (a > b ? 1 : -1)) // Sort the characters in ascending order
          .join(""); // Convert the sorted characters back to a string
        let secondWord = [...new Set(words[j])] // Convert the current word to a Set to remove duplicate characters
          .sort((a, b) => (a > b ? 1 : -1)) // Sort the characters in ascending order
          .join(""); // Convert the sorted characters back to a string

        if (i !== j && firstWord === secondWord) { // Check if the words are different and have the same characters
          result++; // Increment the count of similar pairs
        }
      }
    }

    return result / 2; // Return half of the count of similar pairs (since each pair is counted twice)
};

//Solution 2 Using a Map
var similarPairs = function (words) {
    let result = 0; 
    // Initialize a variable to store the result
    const charMap = new Map(); 
    // Create a new Map to store the count of similar strings
    
    for (let i = 0; i < words.length; i++) { 
        // Iterate over each word in the input array
      const sortedUniqueChars = [...new Set(words[i])].sort().join("");
       // Remove duplicate characters, sort the characters, and convert them back to a string
      
      if (charMap.has(sortedUniqueChars)) { 
        // Check if the sorted unique characters already exist in the map
        result += charMap.get(sortedUniqueChars); 
        // If it exists, add the count of similar strings to the result
        // For example, if the sorted unique characters are 'abc', and the count of similar strings is 3, then add 3 to the result
        charMap.set(sortedUniqueChars, charMap.get(sortedUniqueChars) + 1); // Increment the count of similar strings in the map
      } else {
        charMap.set(sortedUniqueChars, 1); 
        // If it doesn't exist, add the sorted 
        //unique characters to the map with a count of 1
        // For example, if the sorted unique characters are 'abc', then add 'abc' to the
        // map with a count of 1
        // This means that there is only 1 string with the sorted unique characters 'abc'
        // If we encounter another string with the sorted unique characters 'abc',
        // then we will increment the count of similar strings in the map's 'abc' key to 2
        // (see the if statement above) 
    }
    }
    
    return result; // Return the final result
  };

//Solution 3 Using HashMap
var similarPairs = function (words) {
    let result = 0; // Initialize a variable to store the result
    const charMap = new Map(); // Create a Map to store the count of similar words
  
    for (const word of words) { // Iterate through each word in the input array
      const sortedWord = [...new Set(word)].sort().join(""); // Sort the characters in the word and remove duplicates
      charMap.set(sortedWord, (charMap.get(sortedWord) || 0) + 1); // Increment the count of the sorted word in the Map
      result += charMap.get(sortedWord) - 1; // Add the count of similar words to the result
    }
  
    return result; // Return the final result
  };