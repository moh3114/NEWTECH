`use strict`

let cartTotal = prompt("Enter cart total: ")
let membershipStatus = prompt("Are you a member? (yes/no): ")

let finalPrice;

if(cartTotal>=200 && membershipStatus==="yes"){
    finalPrice = cartTotal*0.8
} else if (cartTotal < 200 && membershipStatus === "yes"){
    finalPrice = cartTotal*0.9
} else if(cartTotal >= 200 && membershipStatus==="no"){
    finalPrice = cartTotal*0.95
} else{
    finalPrice = cartTotal
}

console.log(typeof(cartTotal))
console.log(`Final price : ${finalPrice.toFixed(2)}`)
