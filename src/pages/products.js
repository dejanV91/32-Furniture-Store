import "../cart/addCart.js";
import "../cart/toggleCart.js";
import "../toggleSidebar.js";
import { setupSearch } from "../filters/search.js";
import { store } from "../setupStore.js";
import { display } from "../display.js"
import { getElement } from "../utils.js";
import { setupCompanies } from "../filters/companies.js";

// Constants
const loading = getElement(".page-loading");
const productsContainer = getElement(".products-container");

// Code
window.addEventListener("DOMContentLoaded", () => {
   display(productsContainer, store);
   setupSearch(store);
   setupCompanies(store);
});

loading.style.display = "none";

//Functions