import { cart, removeFromCart, saveCartToLocalStorage, updateCartQuantity, cartQuantity } from "../data/cart.js";
import { products } from '../data/products.js';
import convertMoney from './utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import deliveryOptions from '../data/deliveryOptions.js'
let cartSummaryHTML = '';

cart.forEach((cartItem) => {
    // get the attribute that we need
    const { productId, quantity, deliveryOptionId } = cartItem;
    // use quantity to search the rest of the attributes;
    let matchingItem;
    products.forEach((product) => {
        if (product.id === productId) {
            matchingItem = product;
        }
    });
    //get the rest of the attributes
    const { image, name, priceCents } = matchingItem;
    let deliveryOptionHTML = '';
    //Loop the delivery options and generate the html
    deliveryOptions.forEach((deliveryOption) => {
        // generate the date
        const today = dayjs();
        const {id, deliveryDays, priceCents} = deliveryOption;
        const deliveryDate = today.add(deliveryDays, 'days');
        const dateString = deliveryDate.format('dddd, MMMM D');
        const deliveryCost = convertMoney(priceCents);
        console.log(`Id inside cart ${deliveryOptionId} Id in the ratio ${id}`);
        
        deliveryOptionHTML += `
            <div class="delivery-option">
                <input type="radio" class="delivery-option-input"
                name="delivery-option-${productId}" ${id === deliveryOptionId ? 'checked' : ''}>
                <div>
                <div class="delivery-option-date">
                    ${dateString}
                </div>
                <div class="delivery-option-price">
                    ${deliveryCost === 0 ? 'Free' : `$${deliveryCost}`} Shipping
                </div>
                </div>
            </div>
        `
    });
    
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
                <input class="quantity-input js-quantity-input js-quantity-input-${productId}" data-product-id = ${productId}>
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
            ${deliveryOptionHTML}
            </div>
        </div>
    </div>
    `
});
//update the page
document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
document.querySelector('.js-return-to-home-link').innerHTML = `${cartQuantity} items`;

// delete product from cart and update the page
document.querySelectorAll('.js-delete-quantity-link').forEach((button) => {
    button.addEventListener('click', () => {
        // find out which product need to be removed
        const { productId } = button.dataset;
        //removed from the cart
        removeFromCart(productId);
        document.querySelector('.js-return-to-home-link').innerHTML = `${cartQuantity} items`;
        //update the page(remove the container with unique product id)
        document.querySelector(`.cart-item-container-${productId}`).remove();
    });
});

//update product when clicking update and update the page
document.querySelectorAll('.js-update-quantity-link').forEach((button) => {
    button.addEventListener('click', () => {
        // find out which product need to be updated
        const { productId } = button.dataset;
        //get the container and add a class
        document.querySelector(`.cart-item-container-${productId}`).classList.add('is-editing-quantity');
    })
});

//add eventListener to Save
document.querySelectorAll('.js-save-quantity-link').forEach((button) => {
    button.addEventListener('click', () => {
        update(button);
    });
});

//add eventListener to input
document.querySelectorAll('.js-quantity-input').forEach((button) => {
    button.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            update(button);
        }
    });
});

function update(button) {
    // find out which product need to be updated
    const { productId } = button.dataset;
    //get the container and remove the class
    document.querySelector(`.cart-item-container-${productId}`).classList.remove('is-editing-quantity');
    //get the newQuantity from the input
    const newQuantity = Number(document.querySelector(`.js-quantity-input-${productId}`).value);
    console.log(`new quantity = ${newQuantity}`);
    if (newQuantity >= 0 && newQuantity < 1000) {
        //update the cart
        //update the label HTML
        document.querySelector(`.quantity-label-${productId}`).innerHTML = newQuantity;
        let matchingItem;
        cart.forEach((cartItem) => {
            if (cartItem.productId === productId) {
                matchingItem = cartItem;
                return;
            };
        });
        //store the original quantity of the product
        const originalQuantity = matchingItem.quantity;
        //update the quantity of the specific product
        matchingItem.quantity = newQuantity;
        //saved to localStorage
        saveCartToLocalStorage();
        //update the cartQuantity
        updateCartQuantity(originalQuantity, newQuantity);
        //update the HTML where display the cart quantity
        document.querySelector('.js-return-to-home-link').innerHTML = `${cartQuantity} items`;
    }else {
        alert('newQuantity must be [0,1000)!');
    }
}