//CHALLENGE 1

//Capitalize Function capitalize()
//makes FIRST character of given string Uppercase 

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