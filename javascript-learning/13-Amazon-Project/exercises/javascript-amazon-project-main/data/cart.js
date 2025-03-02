export const cart = [];

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
            quantity: selectQuantity
        });
    };

}
