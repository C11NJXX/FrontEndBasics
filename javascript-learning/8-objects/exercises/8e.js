const product1 = {
    name: 'p1',
    price: 255
}

const product2 = {
    name: 'p1',
    price: 255
}

function isSameProduct(p1, p2) {
    if(p1.name === p2.name && p1.price === p2.price) {
        return true;
    }else {
        return false;
    }
}

if(isSameProduct(product1,product2)) {
    console.log('Same');
}else {
    console.log('Not Same');
}