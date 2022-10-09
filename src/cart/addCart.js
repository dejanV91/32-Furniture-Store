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

const decreaseAmount = (id) => {
    let newAmount;
    cart = cart.map((item) => {
        if (item.id === id) {
            newAmount = item.amount - 1;
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

function displayCartItemsDOM(){
    cart.forEach((cartItem) => {
        addToCartDOM(cartItem);
    });
};

function setupCartFunctionality(){
    cartItemsDOM.addEventListener("click", (e) => {
        const element = e.target;
        const parent = e.target.parentElement;
        const id = e.target.dataset.id;
        const parentID = e.target.parentElement.dataset.id

        // remove item DOM
        if (element.classList.contains("cart-item-remove-btn")){
            removeItem(id);
            parent.parentNode.remove();
        }

        // increase product on cart
        if (parent.classList.contains("cart-item-increase-btn")){
            const newAmount = increaseAmount(parentID);
            parent.nextElementSibling.textContent = newAmount;
        }

        // decrease product on cart
        if (parent.classList.contains("cart-item-decrease-btn")){
           const newAmount = decreaseAmount(parentID);
           if (newAmount === 0) {
                parent.parentNode.parentNode.remove()
                removeItem(parentID)
           }else{
                parent.previousElementSibling.textContent = newAmount
           }
        }

        displayCartItemsCount();

        displayCartTotal()

        setStorageItems("cart", cart);
    });
}

const init = () => {
    displayCartItemsCount();
    displayCartTotal();
    displayCartItemsDOM();
    setupCartFunctionality();
}

init();

export {addToCart, cart}