import {cart} from '../data/cart.js';
let productsHTML = '';
let addedToCartId;
products.forEach((product) => {
    productsHTML += `
            <div class="product-container">
        <div class="product-image-container">
            <img class="product-image" src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
        ${product.name}
        </div>

        <div class="product-rating-container">
            <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
            ${product.rating.count}
            </div>
        </div>

        <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart-button" data-product-id="${product.id}">
            Add to Cart
        </button>
        </div>
    `
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

// add event listener to all add to cart buttons
document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
    button.addEventListener('click', () => {
        //get data from button
        const { productId } = button.dataset;
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

        let cartQuantity = 0;
        cart.forEach((product) => {
            cartQuantity += product.quantity;
        });
        //update cartQuantity HTML
        document.querySelector('.js-cart-quantity').innerHTML = `${cartQuantity}`;
        //show added when click
        const addedToCartElement = document.querySelector(`.js-added-to-cart-${productId}`);
        addedToCartElement.classList.add('show-added-to-cart');
        //remove added after 2 seconds
        
        if(addedToCartId) {
            clearTimeout(addedToCartId);
        }
        const timeoutId = setTimeout(() => {
            addedToCartElement.classList.remove('show-added-to-cart');
        },2000);

        //saved timeoutId in addedToCartId
        addedToCartId = timeoutId;
        
    });
})