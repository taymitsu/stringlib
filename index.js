///
//https://replit.com/@taymitsu/stringlib#index.js
//

////////////////////////////////////////////////////////////////////

//CHALLENGE 1

//Capitalize Function capitalize()
//makes FIRST character of given string Uppercase 

////////////////////////////////////////////////////////////////////

//const str = 'henlo friendlo'

//console.log( str[0] )
//console.log( str.length )
//console.log( str.toUpperCase() )
//console.log( str.slice(3) )
//takes slice of string starting at given [index]

function capitalize(str) {
  const first = str[0].toUpperCase()
  const rest = str.slice(1)
  return first + rest 
}

//CHALLENGE 1, Strategy 2
//console.log( str.split(' ') )
//splits on space character 

function capitalize(str) {
  const arr = str.split('')
  arr[0] = arr[0].toUpperCase()
  return( arr.join('') ) 
}

//console.log( capitalize(str) )
//console.log( capitalize('i love my apartment') )
//console.log( capitalize('my dogs are mo betta') )

////////////////////////////////////////////////////////////////////

//CHALLENGE 2
//Capitalize ALL characters, allCaps()


function allCaps(str) {
  return str.toUpperCase()
}

//console.log(allCaps(str))
//console.log( capitalizeWords(str) )
//console.log( capitalizeWords('i love my doge') )
//console.log( capitalizeWords('i am excited for may') )


////////////////////////////////////////////////////////////////////

//CHALLENGE 3
//makes ALL first character of given string Uppercase ex: First Character Of Entire String

function capitalizeWords(str) {
  const words = str.split(' ')
  const upperWords = words.map( (word) => capitalize(word) )
  return upperWords.join(' ')
}

//CHALLENGE 4
//removeExtraSpaces()

console.log( capitalize('henlo friendlo') )
console.log( capitalize('mitsumori') )
console.log( capitalize('my monstera is happy') )

console.log( capitalizeWords('hi earth') )
console.log( capitalizeWords('henlo friendlo how are you') )
console.log( capitalizeWords('my dogs are mo betta than yours') )