// global imports
import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';
// specific imports
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProducts.js';
import { getElement } from './src/utils.js';

const init = async () => {
  // return data JS objects
  const products = await fetchProducts();
  if (products) {
    // add all products to the local storage (name is store)
    setupStore(products);
    // variable with datas from local storage(store) which have data fetured
    const featured = store.filter((product) => product.featured === true);
    // display product on indes.html (3 products)
    display(featured, getElement('.featured-center'));
  }
};

window.addEventListener('DOMContentLoaded', init);