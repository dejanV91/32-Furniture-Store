import { display } from "./src/display.js";
import { fetchProducts } from "./src/fetchProducts.js";
import { setupStore, store } from "./src/setupStore.js";
import { getElement } from "./src/utils.js"

const featuredDiv = getElement(".featured-center");

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    setupStore(products);
    const featured = store.filter((product) => product.featured === true)
    display(featuredDiv,featured)
  }
}

init();