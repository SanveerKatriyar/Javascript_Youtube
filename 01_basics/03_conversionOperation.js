let score = "33abc"
// score = 33
// score = "33" => 33
// score = "33abc" => NaN
// score = null
// score = undefined
// score = true => 1 false => 0
// score = "sanveer"
// NaN => Not an Number

// console.log(typeof score);
// console.log(typeof(score)); => same syntax of above

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); => In js its showing a string in converted into number but its not done so its drawback
// console.log(valueInNumber);

let isLoggedIn = 1
// let isLoggedIn = ""
// let isLoggedIn = undefined
// let isLoggedIn = "sanveer"


let BooleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(isLoggedIn)
// console.log(BooleanIsLoggedIn)

//  1 => true; 0 => false
// "" => false
// "sanveer" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)