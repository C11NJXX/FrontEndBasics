import { loadFromStorage } from "../../../../data/cart.js";
import { renderOrderSummary } from "../../../../scripts/checkout/orderSummary.js";
import { renderPaymentSummary } from "../../../../scripts/checkout/paymentSummary.js";
describe('test suite: renderPaymentSummary', () => {
    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

    beforeEach(() => {

        document.querySelector('.js-test-container').innerHTML = `
            <div class="js-order-summary"></div>
            <div class="js-payment-summary"></div>
            `

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: productId1,
                quantity: 2,
                deliveryOptionId: '3'
            }, {
                productId: productId2,
                quantity: 1,
                deliveryOptionId: '2'
            }]);
        });
        loadFromStorage();
        renderOrderSummary();
        renderPaymentSummary();
    });
    afterEach(() => {
        document.querySelector('.js-test-container').innerHTML = '';
    });

    it('updates the price', () => {
        expect(document.querySelector('.js-payment-summary-money-shipping').innerText).toEqual('$14.98');
        expect(document.querySelector('.js-payment-summary-money-total').innerText).toEqual('$63.5')
    });
});