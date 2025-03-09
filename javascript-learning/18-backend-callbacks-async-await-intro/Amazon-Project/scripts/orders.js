import { orders } from "../data/orders.js";
import { products, loadProductsFetch } from "../data/products.js";

import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import convertMoney from "./utils/money.js";
import { cart } from '../data/cart-class.js';
loadOrdersPage();

async function loadOrdersPage() {
    await loadProductsFetch();
    let ordersHTML = '';
    orders.forEach((order) => {
        //get the data (Model)
        const { id, orderTime, totalCostCents } = order;
        const orderProducts = order.products;
        console.log(orderProducts);
        //format the date
        //TODO:Use function to handle the date
        const orderDateBeforeFormat = new dayjs(orderTime);
        const orderDate = orderDateBeforeFormat.format('MMMM D');

        const orderHeaderHTML = `
            <div class="order-header">
                    <div class="order-header-left-section">
                    <div class="order-date">
                        <div class="order-header-label">Order Placed:</div>
                        <div>${orderDate}</div>
                    </div>
                    <div class="order-total">
                        <div class="order-header-label">Total:</div>
                        <div>$${convertMoney(totalCostCents)}</div>
                    </div>
                    </div>

                    <div class="order-header-right-section">
                    <div class="order-header-label">Order ID:</div>
                    <div>${id}</div>
                    </div>
            </div>
        `;
        let ordersDetailsHTML = '';

        orderProducts.forEach((orderProduct) => {
            const { productId, quantity, estimatedDeliveryTime, variation } = orderProduct;
            //TODO:Use function to handle the date
            const estimatedDeliveryTimeBeforeFormat = new dayjs(estimatedDeliveryTime);
            const estimatedDeliveryDate = estimatedDeliveryTimeBeforeFormat.format('MMMM DD');
            //get more info about product
            let matchingProduct;
            // console.log(products);
            products.forEach((product) => {
                if (product.id === productId) {
                    matchingProduct = product;
                }
            });
            const { image, name } = matchingProduct;
            const orderDetailsHTML = `
            <div class="order-details-grid">
                <div class="product-image-container">
                <img src=${image}>
                </div>

                <div class="product-details">
                <div class="product-name">
                    ${name}
                </div>
                <div class="product-delivery-date">
                    Arriving on: ${estimatedDeliveryDate}
                </div>
                <div class="product-quantity">
                    Quantity: ${quantity}
                </div>
                <button class="buy-again-button button-primary js-buy-again-button" data-product-id=${productId}>
                    <img class="buy-again-icon" src="images/icons/buy-again.png">
                    <span class="buy-again-message">Buy it again</span>
                </button>
                </div>

                <div class="product-actions">
                <a href="tracking.html?orderId=${id}&productId=${productId}">
                    <button class="track-package-button button-secondary">
                    Track package
                    </button>
                </a>
                </div>
            </div>
    `;
            ordersDetailsHTML += orderDetailsHTML;
        });
        const orderHTML = `
                <div class="order-container">
                ${orderHeaderHTML}
                ${ordersDetailsHTML}
                </div>
        `
        ordersHTML += orderHTML;
    });
    document.querySelector('.js-cart-quantity').innerHTML = `${cart.cartQuantity}`
    document.querySelector('.js-orders-grid').innerHTML = ordersHTML;
    //after generating HTML, add eventListener
    document.querySelectorAll('.js-buy-again-button').forEach((button) => {
        const { productId } = button.dataset;
        button.addEventListener('click', () => {
            cart.addToCart(productId);
        })
    });
}

