import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { cart } from "../data/cart-class.js"

//async await version
async function loadPage() {
    try {
        await Promise.all([
            loadProductsFetch(),
            cart.loadCartFetch()
        ]);
    } catch (error) {
        console.log(error);
    }
    renderOrderSummary();
    renderPaymentSummary();
};
loadPage();