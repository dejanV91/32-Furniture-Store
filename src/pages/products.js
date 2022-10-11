import "../cart/addCart.js";
import "../cart/toggleCart.js";
import "../toggleSidebar.js";
import { setupSearch } from "../filters/search.js";
import { store } from "../setupStore.js";
import { display } from "../display.js"
import { getElement } from "../utils.js";
import { setupCompanies } from "../filters/companies.js";
import { setupPrice } from "../filters/price.js";

// Constants
const loading = getElement(".page-loading");
const productsContainer = getElement(".products-container");

// Code
window.addEventListener("DOMContentLoaded", () => {
   display(productsContainer, store);
   setupSearch(store);
   setupCompanies(store);
   setupPrice(store);
});

loading.style.display = "none";

//Functions