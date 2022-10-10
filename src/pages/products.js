import "../cart/addCart.js";
import "../cart/toggleCart.js";
import "../toggleSidebar.js";
import "../filters/search.js"
import { store } from "../setupStore.js";
import { display } from "../display.js"
import { getElement } from "../utils.js";

// Constants
const loading = getElement(".page-loading");
const productsContainer = getElement(".products-container");

// Code
window.addEventListener("DOMContentLoaded", () => {
   display(productsContainer, store);
    
});

loading.style.display = "none";

//Functions