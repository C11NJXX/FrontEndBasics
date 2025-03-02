export const cart = [];

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

}
