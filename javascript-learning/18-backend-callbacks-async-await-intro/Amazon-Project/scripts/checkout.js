import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
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

/*
//Promise version3
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        cart.loadCart(() => {
            resolve('v2');
        });
    })
]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
//Promise version2
Promise.all([
    new Promise((resolve) => {
        loadProducts(() => {
            resolve('v1');
        });
    }),
    new Promise((resolve) => {
        cart.loadCart(() => {
            resolve('v2');
        });
    })
]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
*/

//Promise version1
/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1');
    });
}).then((value1) => {
    console.log(value1);
    return new Promise((resolve) => {
        cart.loadCart(() => {
            loadProducts(() => {
                resolve('value2');
            });
        });
    });
}).then((value2) => {
    console.log(value2);
    renderOrderSummary();
    renderPaymentSummary();
});
*/

// callback version
/*
loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/