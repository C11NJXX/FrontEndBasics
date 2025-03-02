export let cart = JSON.parse(localStorage.getItem('cart')) || [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:3
},
{
    productId: "d2785924-743d-49b3-8f03-ec258e640503",
    quantity:2
}];

function saveToLocalStorage() {
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId) {
    // add to cart(check if already added)
    let matchingItem;
    cart.forEach((product) => {
        if (productId === product.productId) {
            matchingItem = product;
        };
    });
    if (matchingItem) {
        // matchingItem = product actually store a reference of product so it is worded here
        matchingItem.quantity++;
    } else {
        cart.push({
            productId,
            quantity: 1
        });
    };
    saveToLocalStorage();
}

export function removeFromCart(productId) {
    const newCart = [];
    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });
    cart = newCart;
    saveToLocalStorage();
}