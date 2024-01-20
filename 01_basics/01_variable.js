const accountId = 144553 //constant keyword
let accountEmail = "sanveer@google.com" // let keyword - 
var accountPassword = "12345" // variable keyword
accountCity = "Jaipur"

// accountId = 2 // Not allowed
accountEmail = "deepak@gmail.com"
accountPassword = "4039939"
accountCity = "Pune"
let accountState

/* 
Prefer not to use var 
because of issue in block scope and functional scope.
scope == {}
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])