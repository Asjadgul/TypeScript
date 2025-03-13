// Generics are a TypeScript feature that allows
//  us to pass in various types of data and
//  create reusable code to handle different inputs.


// function printNumber (item: number , defaultValue: number): [number , number]{
//     return [item , defaultValue]
// }  

// function printString (item: string , defaultValue: string): [string , string]{
//     return [item , defaultValue]
// }  


// const str = printString("Hello", "World")

// console.log(str)




function UniqueDataTypes<Type>(item:Type , defaultValue:Type):[Type,Type] {
    return [item, defaultValue]
}

const res = UniqueDataTypes<number>(23,54)
const ress = UniqueDataTypes<string>("Hello", "World")
console.log(res)
console.log(ress)

interface Dog{
    name: string,
    breed: string
}

const dog1 = UniqueDataTypes <Dog>(
{name: "Buddy", breed: "labrador"},
{name: "yo", breed: "undefined"}
)

console.log(dog1)
