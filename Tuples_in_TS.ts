// TypeScript tuples are like arrays with a fixed number of elements. 

let myTuple: [string, number]
//ERR
// myTuple = [  23 , "Hello World" ]
myTuple = ["Hello World" , 23]
console.log(myTuple)

const games: [string, string, number, boolean] = ["game 1", "game 2", 3, true]

console.log(games)




