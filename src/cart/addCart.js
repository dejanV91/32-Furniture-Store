import { findProduct } from "../setupStore.js";
import { formattedPrice, getElement, getStorageItems, setStorageItems } from "../utils.js";
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

    // display number of products in cart
    displayCartItemsCount();

    //displa product total price in cart
    displayCartTotal();

    // set cart on local Storage
    setStorageItems("cart", cart)

    openCart();
    
}

function removeItem (id) {
    cart = cart.filter((cartItem) => cartItem.id !==id)
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

function displayCartItemsCount(){
    const amount = cart.reduce((total, cartItem) => {
        return (total += cartItem.amount)
    }, 0);
    cartItemCountDOM.textContent = amount
}

function displayCartTotal(){
    const total = cart.reduce((total, cartItem) => {
        return (total += cartItem.amount * cartItem.price)
    },0);
    cartTotalDOM.textContent = formattedPrice(total);
}

function setupCartFunctionality(){
    cartItemsDOM.addEventListener("click", (e) => {
        const element = e.target;
        const parent = e.target.parentNode;
        const id = e.target.dataset.id;
        const parentID = e.target.parentNode.parentNode.dataset.id

        

        // if (element.classList.contains("cart-item-remove-btn")){
        //     removeItem(parentID);
        //     // remove item DOM
        //     parent.remove();
        // }

        // if (element.parentNode.classList.contains("cart-item-increase-btn")){

        //     const newAmountparent = increaseAmount(parent.parentNode.dataset.id);

        //     console.log(element);
        // }

        setStorageItems("cart", cart);
    });
}

setupCartFunctionality();

// const init = () => {
//     setupCartFunctionality();
// }

// init();

export {addToCart}