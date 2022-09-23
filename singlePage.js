// IMPORTS
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