const allProductsUrl = 'https://course-api.com/javascript-store-products'
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  'https://course-api.com/javascript-store-single-product'

// IMPORTS
import products from "./utils/setProductsIndex.js";
import { cartModalToggle, getElement, toggleElement } from "./utils/functions.js";

// CONSTANTS
const toggleBtn = getElement(".toggle");
const cartIcon = getElement(".cart-div");

// FUNCTIONS
// nav bar toggle
toggleElement(toggleBtn,getElement(".modal"),
                getElement(".modal-close"),"show")

// toggle cart modal
cartModalToggle(cartIcon,"show");

// call function to set products on index page 
products();




  

