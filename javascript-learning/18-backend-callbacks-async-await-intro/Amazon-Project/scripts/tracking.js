import { getOrder } from "../data/orders.js";
import {getProduct, loadProductsFetch} from '../data/products.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

async function loadPage() {
    await loadProductsFetch();
    const url = new URL(window.location.href);
    const orderId = url.searchParams.get('orderId');
    const productId = url.searchParams.get('productId');
    const order = getOrder(orderId);

    const product = getProduct(productId);
    const { image, name } = product;
    let matchingProduct;
    order.products.forEach((product) => {
        if(product.productId === productId) {
            matchingProduct = product;
        }
    });
    const {quantity, estimatedDeliveryTime, variation } = matchingProduct;
    const deliveryTime = dayjs(estimatedDeliveryTime);
    const orderTime = dayjs(order.orderTime);
    const today = dayjs();
    const progress = ((today-orderTime)/(deliveryTime-orderTime))*100;    
    
    //TODO:as same use function later
    const estimatedDeliveryDate = dayjs(estimatedDeliveryTime).format('dddd, MMMM D');
    const trackingHTML = `
            <div class="order-tracking">
            <a class="back-to-orders-link link-primary" href="orders.html">
            View all orders
            </a>

            <div class="delivery-date">
            Arriving on ${estimatedDeliveryDate}
            </div>

            <div class="product-info">
            ${name}
            </div>

            <div class="product-info">
            Quantity: ${quantity}
            </div>

            <img class="product-image" src=${image}>

            <div class="progress-labels-container">
            <div class="progress-label ${(progress >= 0 && progress <=49) ? 'current-status' : ''}">
                Preparing
            </div>
            <div class="progress-label ${(progress >= 50 && progress <=99) ? 'current-status' : ''}">
                Shipped
            </div>
            <div class="progress-label ${(progress >= 100) ? 'current-status' : ''} ">
                Delivered
            </div>
            </div>

            <div class="progress-bar-container">
            <div class="progress-bar" style="width:${progress}%"></div>
            </div>
        </div>
    `;
    document.querySelector('.js-order-tracking').innerHTML = trackingHTML;
}

loadPage();