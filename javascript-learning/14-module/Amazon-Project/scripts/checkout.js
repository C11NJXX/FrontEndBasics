import { cart, removeFromCart, cartQuantity } from "../data/cart.js";
import { products } from '../data/products.js';
import { convertMoney } from './utils/money.js'
let cartSummaryHTML = '';

console.log("cQ in checkout" + cartQuantity);
console.log("ck:" + localStorage.getItem('cartQuantity'));
if (localStorage.getItem('cartQuantity') === null) localStorage.setItem('cartQuantity', cartQuantity);
console.log("ck:" + localStorage.getItem('cartQuantity'));

cart.forEach((cartItem) => {
    // get the attribute that we need
    const { productId, quantity } = cartItem;
    // use quantity to search the rest of the attributes;
    let matchingItem;
    products.forEach((product) => {
        if (product.id === productId) {
            matchingItem = product;
        }
    });
    //get the rest of the attributes
    const { image, name, priceCents } = matchingItem;
    //generate the HTML;
    cartSummaryHTML += `
    <div class="cart-item-container cart-item-container-${productId}">
        <div class="delivery-date">
            Delivery date: Wednesday, June 15
        </div>

        <div class="cart-item-details-grid">
            <img class="product-image"
            src=${image}>

            <div class="cart-item-details">
            <div class="product-name">
                ${name}
            </div>
            <div class="product-price">
                $${convertMoney(priceCents)}
            </div>
            <div class="product-quantity">
                <span>
                Quantity: <span class="quantity-label-${productId}">${quantity}</span>
                </span>
                <input class="quantity-input js-quantity-input">
                <span class="save-quantity-link link-primary js-save-quantity-link" data-product-id = ${productId}>Save</span>
                <span class="update-quantity-link link-primary js-update-quantity-link" data-product-id = ${productId}>
                Update
                </span>
                <span class="delete-quantity-link link-primary js-delete-quantity-link" data-product-id = ${productId}>
                Delete
                </span>
            </div>
            </div>

            <div class="delivery-options">
            <div class="delivery-options-title">
                Choose a delivery option:
            </div>

            <div class="delivery-option">
                <input type="radio" class="delivery-option-input"
                name="delivery-option-${productId}">
                <div>
                <div class="delivery-option-date">
                    Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                    FREE Shipping
                </div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio" checked class="delivery-option-input"
                name="delivery-option-${productId}">
                <div>
                <div class="delivery-option-date">
                    Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                    $4.99 - Shipping
                </div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio" class="delivery-option-input"
                name="delivery-option-${productId}">
                <div>
                <div class="delivery-option-date">
                    Monday, June 13
                </div>
                <div class="delivery-option-price">
                    $9.99 - Shipping
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    `
});
//update the page
document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;


document.querySelector('.js-return-to-home-link').innerHTML = `${cartQuantity} items`

// delete product from cart and update the page
document.querySelectorAll('.js-delete-quantity-link').forEach((button) => {
    button.addEventListener('click', () => {
        // find out which product need to be removed
        const { productId } = button.dataset;
        //removed from the cart
        removeFromCart(productId);
        //update the page(remove the container with unique product id)
        document.querySelector(`.cart-item-container-${productId}`).remove();
        document.querySelector('.js-return-to-home-link').innerHTML = `${cartQuantity} items`;
    });
});

//update product when clicking update and update the page
document.querySelectorAll('.js-update-quantity-link').forEach((button) => {
    button.addEventListener('click', () => {
        // find out which product need to be removed
        const { productId } = button.dataset;
        //get the container and add a class
        document.querySelector(`.cart-item-container-${productId}`).classList.add('is-editing-quantity');
    })
});

//add eventListener to Save
document.querySelectorAll('.js-save-quantity-link').forEach((button) => {
    button.addEventListener('click', () => {
        // find out which product need to be removed
        const { productId } = button.dataset;
        //get the container and remove the class
        document.querySelector(`.cart-item-container-${productId}`).classList.remove('is-editing-quantity');
        //get and update the quantity of the specific product
        const newQuantity = Number(document.querySelector('.quantity-input').value);
        if (newQuantity >= 0 && newQuantity < 1000) {
            document.querySelector(`.quantity-label-${productId}`).innerHTML = newQuantity;
            let matchingItem;
            cart.forEach((cartItem) => {
                if (cartItem.productId === productId) {
                    matchingItem = cartItem;
                }
            });
            const newCartQuantity = cartQuantity - matchingItem.quantity + newQuantity;
            document.querySelector('.js-return-to-home-link').innerHTML = `${newCartQuantity} items`;
            localStorage.setItem('cartQuantity', newCartQuantity);
            matchingItem.quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.reload();
        } else {
            alert('new quantity [0,1000)');
        };

        // matchingItem.quantity = newQuantity;
        // cartQuantity = cartQuantity - matchingItem.quantity + newQuantity;

        // localStorage.setItem('cartQuantity',cartQuantity);
        // document.querySelector('.js-return-to-home-link').innerHTML = `${cartQuantity} items`;
        // localStorage.setItem('cart',JSON.stringify(cart));
    });
    document.querySelector('.quantity-input').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            // find out which product need to be removed
            const { productId } = button.dataset;
            //get the container and remove the class
            document.querySelector(`.cart-item-container-${productId}`).classList.remove('is-editing-quantity');
            //get and update the quantity of the specific product
            const newQuantity = Number(document.querySelector('.quantity-input').value);
            if (newQuantity >= 0 && newQuantity < 1000) {
                document.querySelector(`.quantity-label-${productId}`).innerHTML = newQuantity;
                let matchingItem;
                cart.forEach((cartItem) => {
                    if (cartItem.productId === productId) {
                        matchingItem = cartItem;
                    }
                });
                const newCartQuantity = cartQuantity - matchingItem.quantity + newQuantity;
                document.querySelector('.js-return-to-home-link').innerHTML = `${newCartQuantity} items`;
                localStorage.setItem('cartQuantity', newCartQuantity);
                matchingItem.quantity = newQuantity;
                localStorage.setItem('cart', JSON.stringify(cart));
                window.location.reload();
            } else {
                alert('new quantity [0,1000)');
            };
        }
    })
});

