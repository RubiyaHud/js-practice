/** NOTE:
 * Prefer not to use var
 * becuase of issue in Block Scope and Functional Scope
 */

const accountId = 123456
let accountEmail = "r@gmail.com"
var accountPassword = "123"
accountCity = "Dhaka"
let accountState;


console.log("varibales in table format:")
console.table([accountId, accountEmail,accountPassword,accountCity,accountState])