import display from "./src/displayProducts.js";
import fetchProducts from "./src/fetchProducts.js";
import { setupStore, store } from "./src/store.js";
import { getElement } from "./src/utils.js";


const init = async () => {
  const products = await fetchProducts();
  if (products) {
    // add products to the store
    setupStore(products);
    const featured = store.filter((product) => product.featured === true)
    display(featured, getElement(".items-div"));
  }
}

window.addEventListener('DOMContentLoaded', init);








  

