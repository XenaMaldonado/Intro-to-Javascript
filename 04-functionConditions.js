// Create a function that takes in one argument that is passed through a conditional statement.
// (For example, something like our haunted house door() function.)
// Print some resulting text to the console.
// Test all of your conditions to make sure you can receive all of your results back.

function princess(num){

  let begin = "Your princess is "

  if (num == 1){
    return begin + "Cinderella"
  } else if (num == 2) {
    return begin + "Rapunzuel"
  } else if (num == 3){
    return begin + "Snow White";
  } else{
    return "There are many more princesses!"
  }
}

console.log( princess(2) );
