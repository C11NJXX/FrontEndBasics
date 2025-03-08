/*
{   
    productId: -,
    quantity: -,
    deliveryOptionId: -
}
*/
import { isValidOptionId } from './deliveryOptions.js'

function Cart(cartKey, cartQuantityKey) {
    const cart = {
        cartItems: undefined,
        cartQuantity: Number(localStorage.getItem(cartQuantityKey)) || 0,
        loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];
        },
        saveCartToLocalStorage() {
            localStorage.setItem(cartKey, JSON.stringify(this.cartItems));
        },
        addToCart(productId) {
            // add to cart(check if already added)
            let matchingItem;
            this.cartItems.forEach((product) => {
                if (productId === product.productId) {
                    matchingItem = product;
                };
            });
            //get the value inside the selectElement
            let selectQuantity;
            if (document.querySelector(`.js-quantity-selector-${productId}`)) {
                selectQuantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
            } else {
                selectQuantity = 1;
            }

            if (matchingItem) {
                // matchingItem = product actually store a reference of product so it is worded here
                matchingItem.quantity += selectQuantity;
            } else {
                this.cartItems.push({
                    productId,
                    quantity: selectQuantity,
                    // add a default check option
                    deliveryOptionId: '1'
                });
            };
            //save cart to localStorage
            this.saveCartToLocalStorage();
            //update cartQuantity
            this.cartQuantity += selectQuantity;
            localStorage.setItem(cartQuantityKey, this.cartQuantity);
            //update the page where display the cartQuantity
            //update cartQuantity HTML
            if (document.querySelector('.js-cart-quantity'))
                document.querySelector('.js-cart-quantity').innerHTML = `${this.cartQuantity}`;
        },
        removeFromCart(productId) {
            const newCart = [];
            this.cartItems.forEach((cartItem) => {
                if (cartItem.productId !== productId) {
                    newCart.push(cartItem);
                } else if (cartItem.productId === productId) {
                    this.cartQuantity -= cartItem.quantity;
                    //saved to local storage            
                    localStorage.setItem(cartQuantityKey, this.cartQuantity);
                }
            });
            this.cartItems = newCart;
            this.saveCartToLocalStorage();
        },
        updateCartQuantity(originalQuantity, newCartQuantity) {
            this.cartQuantity = this.cartQuantity - originalQuantity + newCartQuantity;
            localStorage.setItem(cartQuantityKey, this.cartQuantity);
        },
        updateDeliveryOptions(productId, deliveryOptionId) {
            let matchingItem;
            this.cartItems.forEach((product) => {
                if (productId === product.productId) {
                    matchingItem = product;
                };
            });
            if (matchingItem === undefined) return;
            if (!isValidOptionId(deliveryOptionId)) return;
            matchingItem.deliveryOptionId = deliveryOptionId;
            this.saveCartToLocalStorage();
        }


    };
    return cart;
}
const cart = Cart('cart-oop', 'cartQuantity-oop');
const businessCart = Cart('cart-business', 'cartQuantity-business');

cart.loadFromStorage();
cart.addToCart('');
console.log(cart);
businessCart.loadFromStorage();
console.log(businessCart);
