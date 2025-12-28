`use strict`

let n = prompt("Enter Number"); // string
n = Number(n)// number
console.log(typeof(n))// number
//console.log(typeof(typeof(n)))
console.log(typeof(NaN))
while(typeof(n) === "NaN" && n !== ){// isNaN(n)
    console.log("input error")
    n = Number(prompt("Enter Number"));
}

for (let i=1 ; i <= 10 ; i++)
    console.log(`${n}*${i}=${i*n}`)