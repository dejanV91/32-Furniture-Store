import { display } from "../display.js";
import { store } from "../setupStore.js";
import { getElement } from "../utils.js";

const priceFilter = getElement(".price-filter");
const priceValue = getElement(".price-value");
const productsContainer = getElement(".products-container");

// setup input
let list = store.map((prices) => {
    return prices.price / 100;
});
// max price of all products
let maxPrice = Math.max(...list);
// input max and value attributes in input filter
priceFilter.max = Math.ceil(maxPrice);
priceFilter.value = Math.ceil(maxPrice);
priceValue.innerHTML = `Value: $${priceFilter.value}`

const setupPrice = (store) => {
    priceFilter.addEventListener("input", (e) => {
        let currentValue = e.target.value;
        let products = store.filter((product)=>{
            if (product.price / 100 <= currentValue ) {
                return product
            }
        });
        priceValue.innerHTML = `Value: $${priceFilter.value}` 
        display(productsContainer, products, true)
        if (products.length < 1) {
            productsContainer.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
          }
    });
};

export { setupPrice };