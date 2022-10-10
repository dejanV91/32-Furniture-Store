import { display } from "../display.js";
import { store } from "../setupStore.js";
import { getElement } from "../utils.js";

const inputForm = getElement(".input-form");
const searchInput = getElement(".search-input");
const productsContainer = getElement(".products-container");

const setupSearch = (store) => {
    inputForm.addEventListener("keyup", () => {
        let products = store.filter((product) => {
            const {name} = product;
            let searchName = name.toUpperCase();
            let check = searchInput.value.toUpperCase();
            
            let include = searchName.startsWith(check);
        
            if (include) {
                return product
            }
        });

        display(productsContainer, products, true);

        if (products.length < 1) {
            productsContainer.innerHTML = `<h3 class="filter-error">
                sorry, no products matched your search</h3>;`
            }
        
    });
};

export {setupSearch};