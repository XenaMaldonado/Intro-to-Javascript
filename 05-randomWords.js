// Create an array of strings and use random() to select random entries and add them to a sentence, printing the result to the console.

var likingArray = ["Anime", "BTS", "Soccer", "Nintendo", "traveling", "sleeping"]

var randomIndex = Math.floor( Math.random() * likingArray.length );
console.log("I love " + likingArray[randomIndex] + "!");
