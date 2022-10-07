import { findProduct } from "../setupStore.js";
import { getElement, getStorageItems } from "../utils.js";
import { addToCartDOM } from "./addToCartDOM.js";
import { openCart } from "./toggleCart.js";

const cartItemCountDOM = getElement('.cart-item-count');
const cartItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');

let cart = getStorageItems("cart");

const addToCart = (id) => {
    let element = cart.find((cartItem) => cartItem.id === id);

    if (!element) {
        let product = findProduct(id);
        product = {...product, amount: 1}
        cart = [...cart, product]
        addToCartDOM(product);
    }else{
        const amount = increaseAmount(id);  
        const item = [...cartItemsDOM.querySelectorAll(".cart-item-amount")]
        const newAmount = item.find((elem) => elem.dataset.id === id); 
        newAmount.textContent = amount;
    }



    openCart();
    
}

const increaseAmount = (id) => {
    let newAmount;
    cart = cart.map((item) => {
        if (item.id === id) {
            newAmount = item.amount + 1;
            item = {...item, amount: newAmount}
        }
        return item
    });
    return newAmount
}

export {addToCart,
        }