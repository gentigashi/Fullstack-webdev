const inventory= [];

const item1 = {
    name: "Keyboard",
    model: "HyperX",
    cost: 80,
    qty: 5
}

const item2 = {
    name: "Laptop",
    model: "HP",
    cost: 450,
    qty: 25
}

const item3 = {
    name: "Phone",
    model: "Iphone"
    cost: 800,
    qty: 40
}

const item4 = {
    name: "Camera",
    model: "Nikon",
    cost: 1200,
    qty: 14
}

inventory.push(item1,item2,item3,item4);
console.log(inventory);

console.log(inventory[1].qty);