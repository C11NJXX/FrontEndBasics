// import { addToCart, cartQuantity } from '../data/cart.js';
import { cart } from '../data/cart-class.js'
import { products, loadProductsFetch } from '../data/products.js';
let addedToCartId;

loadProductsFetch().then(() => {
    let productsHTML = '';
    const url = new URL(window.location.href);
    const searchContent = url.searchParams.get('search');
    let filterProducts = products;
    if (searchContent) {
        filterProducts = products.filter((product) => {
            return product.name.includes(searchContent);
        });
    }
    filterProducts.forEach((product) => {
        productsHTML += `
                <div class="product-container">
            <div class="product-image-container">
                <img class="product-image" src="${product.image}">
            </div>
    
            <div class="product-name limit-text-to-2-lines">
            ${product.name}
            </div>
    
            <div class="product-rating-container">
                <img class="product-rating-stars" src=${product.getStarsURL()}>
                <div class="product-rating-count link-primary">
                ${product.rating.count}
                </div>
            </div>
    
            <div class="product-price">
                ${product.getPrice()}
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
            ${product.extraInfoHTML()}
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
    document.querySelector('.js-cart-quantity').innerHTML = cart.cartQuantity;
    // add event listener to all add to cart buttons
    document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
        button.addEventListener('click', () => {
            //get data from button
            const { productId } = button.dataset;
            cart.addToCart(productId);
            showAddHint(productId);
        });
    });
    //add eventListener to search button
    document.querySelector('.js-search-button').addEventListener('click', () => {
        //get the value inside input and set the url
        const searchContent = document.querySelector('.js-search-bar').value;
        window.location.href = `amazon.html?search=${searchContent}`;
    });
    document.querySelector('.js-search-bar').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            //get the value inside input and set the url
            const searchContent = document.querySelector('.js-search-bar').value;
            window.location.href = `amazon.html?search=${searchContent}`;
        }
    });
});

function showAddHint(productId) {
    //show added when click
    const addedToCartElement = document.querySelector(`.js-added-to-cart-${productId}`);
    addedToCartElement.classList.add('show-added-to-cart');
    //remove added after 2 seconds

    if (addedToCartId) {
        clearTimeout(addedToCartId);
    }
    const timeoutId = setTimeout(() => {
        addedToCartElement.classList.remove('show-added-to-cart');
    }, 2000);

    //saved timeoutId in addedToCartId
    addedToCartId = timeoutId;
}