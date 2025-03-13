// A union type describes a value 
// that can be one of several types. 
// We use the vertical bar ( | ) to separate each type.

let password: string | number = "efaadscasq" //432

type userInfo1 = {
    first: string;
    last: string;
    age: number
}

type userDetails1 = {
    email: string;
    location: string
}


type User1 = userDetails | userInfo

const Asjad1: User1 = {
first: "Asjad",
last: "Gull",
age: 22
}

console.log(Asjad1.first)


const item: (number | string)[] = [1,32,434,3, "AHham"]
console.log(item)