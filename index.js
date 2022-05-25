///
//https://replit.com/@taymitsu/stringlib#index.js
//

////////////////////////////////////////////////////////////////////

//CHALLENGE 1

//Capitalize Function capitalize()
//makes FIRST character of given string Uppercase 

////////////////////////////////////////////////////////////////////

const str = 'henlo friendlo'

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

console.log( capitalize(str) )
console.log( capitalize('mitsumori') )
console.log( capitalize('my monstera is happy') )

//CHALLENGE 1, Strategy 2
//console.log( str.split(' ') )
//splits on space character 

const str = 'henlo friendlo'

function capitalize(str) {
  const arr = str.split('')
  arr[0] = arr[0].toUpperCase()
  return( arr.join('') ) 
}

console.log( capitalize(str) )
console.log( capitalize('i love my apartment') )
console.log( capitalize('my dogs are mo betta') )

////////////////////////////////////////////////////////////////////

//CHALLENGE 2

//Capitalize ALL characters, allCaps()
//makes ALL first character of given string Uppercase ex: First Character Of Entire String

const str = 'henlo friendlo'

function capitalizeWords(str) {
  const words = str.split(' ')
  const upperwords = words.map( (word) => {} )
}

function allCaps(str) {
  return str.toUpperCase()
}

console.log(allCaps(str))

////////////////////////////////////////////////////////////////////
