import { cart } from '../../data/cart-class.js'
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import convertMoney from '../utils/money.js';
import { addOrder } from '../../data/orders.js';
export function renderPaymentSummary() {
    let productPriceCents = 0;
    let shippingPriceCents = 0;
    let paymentSummaryHTML = '';
    cart.cartItems.forEach((cartItem) => {
        const { productId, quantity, deliveryOptionId } = cartItem;
        const matchingItem = getProduct(productId);
        const { priceCents } = matchingItem;
        const matchingDeliveryOption = getDeliveryOption(deliveryOptionId);
        //calculate the total price
        productPriceCents += priceCents * quantity;
        //calculate the shipping price
        shippingPriceCents += matchingDeliveryOption.priceCents;
        //calculate the total price before tax
        const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
        //calculate the tax
        const taxCents = totalBeforeTaxCents * 0.1;
        //calculate the total
        const totalCents = totalBeforeTaxCents + taxCents;

        //generate the HTML
        paymentSummaryHTML = `
            <div class="payment-summary-title">
            Order Summary
            </div>

            <div class="payment-summary-row">
            <div>Items (${cart.cartQuantity}):</div>
            <div class="payment-summary-money">$${convertMoney(productPriceCents)}</div>
            </div>

            <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money js-payment-summary-money-shipping">$${convertMoney(shippingPriceCents)}</div>
            </div>

            <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${convertMoney(totalBeforeTaxCents)}</div>
            </div>

            <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${convertMoney(taxCents)}</div>
            </div>

            <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money js-payment-summary-money-total">$${convertMoney(totalCents)}</div>
            </div>

            <button class="place-order-button button-primary js-place-order">
            Place your order
            </button>
        `
    });
    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
    if (document.querySelector('.js-place-order')) {
        document.querySelector('.js-place-order').addEventListener('click', async () => {
            try {
                const response = await fetch('https://supersimplebackend.dev/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        cart: cart
                    })
                });
                const order = await response.json();
                addOrder(order);
            } catch (error) {
                console.log(error);
            }
            cart.resetCart();
            window.location.href = 'orders.html'
        });
    }
};