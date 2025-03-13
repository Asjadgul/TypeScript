// Interfaces are a feature of TypeScript 
// that allows us to define the structure or
// shape of an object and specify the properties
//  and methods that an object has or should have



interface Computer  {
    name: string;
    ram: number;
    hdd: number
}

const computerExample: Computer = {
    name : "i7",
    ram: 8,
    hdd: 256
}

console.log(computerExample.name)
console.log(computerExample.ram)
console.log(computerExample.hdd)



interface Movie {
    readonly name: string,
    ratings: number,
    genra? : string
}

const Movie1: Movie = {
     name: "EndGame",
    ratings: 9,
    genra : "Action"
}

console.log(Movie1.name)


interface MathOperation {
    (x: number, y:number): number
}

const add:MathOperation = (a,b) => a + b
const sub:MathOperation = (a,b) => a - b

console.log(add(2,2))
console.log(sub(20,10))



interface Person {
    firstName : string,
    lastName: string,
    sayHello(): void
}

function greet(person:Person) {
console.log(`Hello: ${person.firstName}  ${person.lastName}` )
person.sayHello()
} 

const jon: Person = {
    firstName : "Asjad",
    lastName: "Gull",
     sayHello() {
        console.log("Hello World")
    }
}
greet(jon)

interface MovieDetails{
    readonly name: string,
    ratings: number,
    printMovieInfo(name:string, price: number, ratings: number): number | string
}
interface Moviegenra extends MovieDetails {
    genra: string
}

const Movie2 : Moviegenra = {
    name: "star wars",
    ratings: 7,
    printMovieInfo(name:string, price: number, ratings: number): number | string {
        return `Movie Name: ${name} Price: ${price} ratings ${ratings}`
    },
    genra: "Action"
}

const res = Movie2.printMovieInfo("Johyn Wick", 32, 5)

console.log(res)

