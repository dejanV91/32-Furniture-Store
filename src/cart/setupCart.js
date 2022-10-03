import { findProduct } from "../store.js";
import { getElement, getStorageItem } from "../utils.js";
import addToCartDOM from "./addToCartDOM.js";

const cartItemDOM = getElement("#cart");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement('.price');

let cart = getStorageItem('cart');

export const addToCart = (id) => {
    let item = cart.find((cartItem) => cartItem.id === id);

    if (!item) {
        let product = findProduct(id);
        //add item
        product = {...product, amount:1};
        cart = [...cart, product];
        // add item to the DOM
        addToCartDOM(product);
    }else{
        // update values
        const amount = increaseAmount(id);
    }
}
function increaseAmount(id) {
    let newAmount;
    cart = cart.map((cartItem) => {
        if (cartItem.id === id) {
            newAmount = cartItem.amount + 1;
            cartItem = {...cartItem, amount: newAmount}
        }
        return cartItem
    })
}


