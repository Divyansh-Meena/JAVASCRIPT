/* let, const, var ki kahani*/

const accountId = 144553
let accountEmail = "divyanshmeena@gmail.com"
var accountPassword = "12345"
let accountCity = "Bhopal"
let accountState

// accountId = 2
accountEmail = "hc@hc.com"
accountPassword = "67890"
accountCity = "Hyderabad"

console.log(accountId);

/* 
prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
