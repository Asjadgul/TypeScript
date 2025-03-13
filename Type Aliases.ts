// Type Aliases
// Type aliases in TypeScript allow you to create
//  custom names for complex types, making your code
//  more readable and maintainable.


type User = {
name: string;
age: number;
location : string
}

function userinfo (user: User) {
 return `Name: ${user.name} Age: ${user.age} location: ${user.location}`
}

const res = userinfo({name: "Asjad", age: 22, location: "Karachi"})
console.log(res)


// Objects with Type Aliases (OPTIONAL)

type User2 = {
    name: string;
    age? : number;
    location: string
}

const user2 : User2 = {
    name: "Asjad",
    // age: 32,
    location: "Karachi"
}

console.log(`Name: ${user2.name} Location: ${user2.location}`)