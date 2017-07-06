/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE
//letterCount is a higher level f(n) that invokes letters()
function letterCount(theWord, letters) {
  var entry = letters(theWord);
  //console.log(entry);

  var count = {};
  entry.forEach(function(letter) {
    count[letter] = (count[letter] || 0) + 1;
  });
  console.log(count);
}

// split word into array
function letters(taco) {
  var entry = taco.split("");
  //console.log(entry);
  return entry;
}

// invoking letterCount.
letterCount("apple", letters);


// creating an object from an array
// var array = ["a", "p", "p", "l", "e"]
//
// var obj = {};
// array.forEach(function(data){
//     obj[data[0]] = (data[1] = "letter")
// });

// alphabet array
// alphabet = ["a", "b", "c", "d", "e", "f", "g", "h" , "i", "j" , "k" ,"l" , "m" , "n" , "o" , "p" , "q", "r", "s", "t", "u" , "v", "w", "x" , "y", "z"];
