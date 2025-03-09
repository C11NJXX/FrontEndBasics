// import { cart, loadFromStorage, addToCart, removeFromCart, updateDeliveryOptions } from "../../../data/cart.js";

import { cart } from '../../../data/cart-class.js'
describe('test suite: addToCart', () => {

    beforeEach(() => {
        spyOn(localStorage, 'setItem');
    });

    it('adds a product into an empty cart', () => {
        cart.cartItems = [];
        cart.addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(cart.cartItems.length).toEqual(1);
        expect(cart.cartItems[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(cart.cartItems[0].quantity).toEqual(1);
        expect(cart.cartItems[0].deliveryOptionId).toEqual('1');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 1,
            deliveryOptionId: '1'
        }]));
    });

    it('adds an existing product into cart', () => {
        cart.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }];
        cart.addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(cart.cartItems.length).toEqual(1);
        expect(cart.cartItems[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(cart.cartItems[0].quantity).toEqual(2);
        expect(cart.cartItems[0].deliveryOptionId).toEqual('1');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([
            {
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
            }]))
    });
});

describe('test suite: removeFromCart', () => {
    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
    beforeEach(() => {
        spyOn(localStorage, 'setItem');
        cart.cartItems = [{
            productId: productId1,
            quantity: 1,
            deliveryOptionId: '1'
        },
        {
            productId: productId2,
            quantity: 2,
            deliveryOptionId: '3'
        }]
    });

    it('remove existing product from cart', () => {
        cart.removeFromCart(productId1);
        expect(cart.cartItems.length).toEqual(1);
        expect(cart.cartItems[0].productId).toEqual(productId2);
        expect(cart.cartItems[0].quantity).toEqual(2);
        expect(cart.cartItems[0].deliveryOptionId).toEqual('3');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{
            productId: productId2,
            quantity: 2,
            deliveryOptionId: '3'
        }]));
    });

    it('remove a product that is not in the cart', () => {
        cart.removeFromCart('hahahahahhahhahahaha');
        expect(cart.cartItems.length).toEqual(2);
        expect(cart.cartItems[0].productId).toEqual(productId1);
        expect(cart.cartItems[1].productId).toEqual(productId2);
        expect(cart.cartItems[0].quantity).toEqual(1);
        expect(cart.cartItems[1].quantity).toEqual(2);
        expect(cart.cartItems[0].deliveryOptionId).toEqual('1');
        expect(cart.cartItems[1].deliveryOptionId).toEqual('3');
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{
            productId: productId1,
            quantity: 1,
            deliveryOptionId: '1'
        }
            , {
            productId: productId2,
            quantity: 2,
            deliveryOptionId: '3'
        }]));
    });
});

describe('test suite: updateDeliveryOption', () => {
    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    beforeEach(() => {
        spyOn(localStorage, 'setItem');
        cart.cartItems = [{
            productId: productId1,
            quantity: 1,
            deliveryOptionId: '1'
        }]
    });

    it('updates the delivery option', () => {
        cart.updateDeliveryOptions(productId1, '3');
        expect(cart.cartItems[0].deliveryOptionId).toEqual('3');
        expect(cart.cartItems.length).toEqual(1);
        expect(cart.cartItems[0].productId).toEqual(productId1);
        expect(cart.cartItems[0].quantity).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([
            {
                productId: productId1,
                quantity: 1,
                deliveryOptionId: '3'
            }
        ]))
    });

    it('edge test: update the delivery option of a productId that is not in the cart', () => {
        cart.updateDeliveryOptions('hahaha', '3');
        expect(cart.cartItems[0].deliveryOptionId).toEqual('1');
        expect(cart.cartItems.length).toEqual(1);
        expect(cart.cartItems[0].productId).toEqual(productId1);
        expect(cart.cartItems[0].quantity).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(0);
    });

    it('edge test: update the delivery option but the deliveryOptionId is not valid', () => {
        cart.updateDeliveryOptions(productId1, '666');
        expect(cart.cartItems[0].deliveryOptionId).toEqual('1');
        expect(cart.cartItems.length).toEqual(1);
        expect(cart.cartItems[0].productId).toEqual(productId1);
        expect(cart.cartItems[0].quantity).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(0);
    })
});