const product1 = {
    name: 'p1',
    price: 255
}

const product2 = {
    name: 'p2',
    price: 155
}
function comparePrice(product1, product2) {
    return product1.price <= product2.price ? product1 : product2;
}

console.log(comparePrice(product1,product2));
