// Accept a char input from the user and display it on the console.


function returnBinaryLetter(char) {
    if ((/^[a-z]$/).test(char)) {
      return char.charCodeAt(0).toString(2).padStart(8, '0')
    } else {
      return 'Sorry, that is not a letter.'
    }
  }
  
  var input = prompt('Enter letter to be converted to binary:').toLowerCase();
  console.log(returnBinaryLetter(input))