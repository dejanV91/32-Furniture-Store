import { findProduct } from "../setupStore.js";
import { getStorageItems } from "../utils.js";

let cart = getStorageItems("cart");

const addToCart = (id) => {
    let element = cart.find((cartItem) => cartItem.id === id);

    if (!element) {
        let product = findProduct(id);
        product = {...product, amount: 1}
        cart = [...cart, product]
        
    }
    
}

export {addToCart,
        }