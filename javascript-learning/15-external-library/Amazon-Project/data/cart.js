export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export let cartQuantity = Number(localStorage.getItem('cartQuantity')) || 0;
export function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    // add to cart(check if already added)
    let matchingItem;
    cart.forEach((product) => {
        if (productId === product.productId) {
            matchingItem = product;
        };
    });
    //get the value inside the selectElement
    const selectQuantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
    if (matchingItem) {
        // matchingItem = product actually store a reference of product so it is worded here
        matchingItem.quantity += selectQuantity;
    } else {
        cart.push({
            productId,
            quantity: selectQuantity,
            // add a default check option
            deliveryOptionId: '1'
        });
    };
    //save cart to localStorage
    saveCartToLocalStorage();
    //update cartQuantity
    cartQuantity += selectQuantity;
    localStorage.setItem('cartQuantity', cartQuantity);
    //update the page where display the cartQuantity
    //update cartQuantity HTML
    document.querySelector('.js-cart-quantity').innerHTML = `${cartQuantity}`;
}
export function removeFromCart(productId) {
    const newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        } else if (cartItem.productId === productId) {
            cartQuantity -= cartItem.quantity;
            //saved to local storage            
            localStorage.setItem('cartQuantity', cartQuantity);
            // console.log("cQ after delete:" + cartQuantity);
            // console.log("local cart:" + localStorage.getItem('cartQuantity'));
        }
    });
    cart = newCart;
    saveCartToLocalStorage();
}
export function updateCartQuantity(originalQuantity,newCartQuantity) {
    cartQuantity = cartQuantity - originalQuantity + newCartQuantity;
    localStorage.setItem('cartQuantity',cartQuantity);
}