// Primitive on the basis of memory it divided

// call by value => copy of address or memory given, changes done in copied place
// 7 types : String, Boolean, Number, Null, Undefined, Symbol(for making unique), BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId)

const bigNumber = 45655544655615455445n // writing n is imp for bigNumber
// console.log(bigNumber)

// Non Primitive

// Call  by reference - You directly get access to memory
// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "sanveer",
    age: 22
}



const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof score);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);