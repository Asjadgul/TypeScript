          //Annotation
// // Type Annotations in TypeScript allow developers
// //  to explicitly specify the types of variables, 
// // function parameters, and return values

// import { error } from "console"


// String
let myName: string = "Asjad Gull"
myName = "some Other Person"
console.log(myName)

//ERR
// myName = 99


//Number
let myNo: number = 69
myNo = 96
console.log(myNo)

//ERR
// myNo = "some Other Person"



//Boolean

let myBool: boolean = false
myBool = true
console.log(myBool)

//ERR
// myBool = 69
 

// Function Parameters Annotation

//Regular Function
function num(num:number) {
    return num+1
}
const result = num(3)
console.log(result)

//ERR
// function num(num:string) {
//     return num+1
// }
// const result = num(3)
// console.log(result)


//ERR
// function num(num:boolean) {
//     return num+1
// }
// const result = num(3)
// console.log(result)



//Arrow Func

const singleParameter = (age:number) => {
 return age
}

const age = singleParameter(67)
console.log(age)


const doubleParameter = (age:number , name:string) => {
    return age + name
   }
   
   const user = doubleParameter(67, "Asjad")
   console.log(user)




   // Default Paams Value

   function defaultParams (name = `Anonymous`) {
    return `Hello ${name}`
   }

   const defaultParamsValue = defaultParams()
   console.log(defaultParamsValue)



   //Regular Func Return Annotaion
     function annot(num:number):number {
         return num+1
     }
     const result2 = num(3)
     console.log(result2)
     
     
     //Arrow Func Return Annotaion
      const annot2 = (num:number):number =>  num+1
       const result3 = num(3)
       console.log(result3)



       // Void in function
//You may commonly see this as the return type
// of functions that do not return a value

       const printMessage = (num:number):void =>  console.log(`${printMessage}`)




       // Never in TypeScript
//The never type represents the type of values that never occur.

        function throwError (msg: string): never {
            throw new Error(msg)
        }

        function infiniteLoop (): never {
            while (true) {}
        }

        let x : never
        function neverReturns (): never {
            while (true) {}
        }
      x = neverReturns()

