import { getElement, getStorageItem } from "../utils.js";

const cartItemDOM = getElement("#cart");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement('.price');

let cart = getStorageItem('cart');

export const addToCart = (id) => {
    let item = cart.find((cartItem) => cartItem.id === id);

    if (!item) {
        let product
    }
}

