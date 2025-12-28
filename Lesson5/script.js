`use strict`

const firstName = "Muhammad"
const lastName = "Bsoul"
const birthYear = 1993
const currentYear =new Date().getFullYear()// 2025
const employment = false
let salary = null
let bestFriend = null
const age = currentYear - birthYear
const fullName = firstName + " " + lastName
console.log(fullName, typeof(fullName))
console.log(age, typeof(age))
console.log(employment, typeof(employment))
console.log(salary, typeof(salary))
console.log(bestFriend, typeof(bestFriend))
console.log(`My name is ${fullName} and my age is ${age}`)
