/*
{   
    productId: -,
    quantity: -,
    deliveryOptionId: -
}
*/
import { isValidOptionId } from './deliveryOptions.js'

class Cart {
    cartItems;
    #cartKey;
    #cartQuantityKey;
    cartQuantity;
    constructor(cartKey, cartQuantityKey) {
        this.#cartKey = cartKey;
        this.#cartQuantityKey = cartQuantityKey;
        this.cartQuantity = Number(localStorage.getItem(cartQuantityKey)) || 0;
        this.#loadFromStorage();
    }
    getCartQuantityKey() {
        return this.#cartQuantityKey;
    }

    #loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(this.#cartKey)) || [];
    }

    saveCartToLocalStorage() {
        localStorage.setItem(this.#cartKey, JSON.stringify(this.cartItems));
    }

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
        localStorage.setItem(this.#cartQuantityKey, this.cartQuantity);
        //update the page where display the cartQuantity
        //update cartQuantity HTML
        if (document.querySelector('.js-cart-quantity'))
            document.querySelector('.js-cart-quantity').innerHTML = `${this.cartQuantity}`;
    }

    removeFromCart(productId) {
        const newCart = [];
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            } else if (cartItem.productId === productId) {
                this.cartQuantity -= cartItem.quantity;
                //saved to local storage            
                localStorage.setItem(this.getCartQuantityKey(), this.cartQuantity);
            }
        });
        this.cartItems = newCart;
        this.saveCartToLocalStorage();
    }

    updateCartQuantity(originalQuantity, newCartQuantity) {
        this.cartQuantity = this.cartQuantity - originalQuantity + newCartQuantity;
        localStorage.setItem(this.#cartQuantityKey, this.cartQuantity);
    }

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

    loadCart(fun) {
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('load', () => {
            console.log(xhr.response);
            fun();
        });

        xhr.open('GET', 'https://supersimplebackend.dev/cart');
        xhr.send();
    }

    async loadCartFetch() {
        const response = await fetch('https://supersimplebackend.dev/cart');
        const text = await response.text();
        console.log(text);
    }
}
export const cart = new Cart('cart-oop', 'cartQuantity-oop');

