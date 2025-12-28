`use strict`

const productsExample = [
    {
        id: "P001",
        name: "Wireless Mouse",
        category: "Electronics",
        price: 29.99,
        stock: 12,
    },
    {
        id: "P002",
        name: "JavaScript Guide",
        category: "Books",
        price: 19.99,
        stock: 0,
    },
    { id: "P003", name: "T-Shirt", category: "Clothing", price: 15.0, stock: 3 },
    {
        id: "P004",
        name: "Noise-Cancel Head",
        category: "Electronics",
        price: 199.99,
        stock: 5,
    },
];

function computeTotalValue(products) {
    let totalPrice = 0
    for (let i = 0; i < products.length; i++) {
        totalPrice += products[i].price * products[i].stock
    }
    return totalPrice;
}

function computeCategorySummary(products) {
    const categorySummary = {};
    for (let i = 0; i < products.length; i++) {
        let cat = products[i].category
        if (!categorySummary[cat]) {
            categorySummary[cat] = 0;
        }
        categorySummary[cat] += products[i].stock * products[i].price;
    }
    return categorySummary
}

console.log(`the total value of products = ${computeTotalValue(productsExample)}`);
console.log(computeCategorySummary(productsExample));

function flagLowStock(products, threshold) {
    for (let i = 0; i < products.length; i++) {
        products[i].threshold = (products[i].stock < threshold);  
        if (products[i].threshold) {
            console.log("Low stock alert for product: " + products[i].name);
        }
    }
}

flagLowStock(productsExample, 7)

function applyDiscountToCategory(products, category, discountPercent){
    for(let i=0 ; i<products.length ; i++){
        products[i].category == category ? products[i].price*=(100-discountPercent)/100 : products[i].price
    }
}

applyDiscountToCategory(productsExample, "Electronics" , 5)

console.log(productsExample);
