// An intersection type combines multiple types into one. 

type userInfo = {
    first: string;
    last: string;
    age: number
}

type userDetails = {
    email: string;
    location: string
}


type User = userDetails & userInfo

const Asjad: User = {
first: "Asjad",
last: "Gull",
age: 22,
email: "asjadgull123@gmail.com",
location: "Karachi"
}

console.log(Asjad.first)