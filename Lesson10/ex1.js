`use strict`

const orders = [
    { id: 1, user: "Ahmad", total: 120, items: ["Laptop", "Mouse"] },
    { id: 2, user: "Lina", total: 45, items: ["Notebook"] },
    { id: 3, user: "Omar", total: 300, items: ["Phone", "Headphones"] },
    { id: 4, user: "Sara", total: 75, items: ["Keyboard", "Mouse"] },
    { id: 5, user: "Yousef", total: 15, items: ["Pen"] },
];

let totalGreaterThan50 = orders.filter((item) => item.total > 50)

console.log(totalGreaterThan50);

totalGreaterThan50 = totalGreaterThan50.map(item => {
    let itemsCount = item.items.length
    let user = item.user
    let total = item.total
    return {user, total, itemsCount}
})

totalGreaterThan50 = totalGreaterThan50.sort((a,b)=>{
    return b.total - a.total
})

console.log(totalGreaterThan50);

totalGreaterThan50.forEach(item => console.log(`User: ${item.user} | Total: ${item.total}`));

console.log("First order > 200:", totalGreaterThan50.find(item => item.total > 200))

console.log(`Has order < 20: ${orders.some(item => item.total < 20)}`)

console.log(`All orders have items: ${orders.every(item => item.total > 0)}`)

console.log(`Total revenue: ${orders.reduce((acc, current) => acc += current.total,0)}`);

console.log(typeof(1+"2"+3))
