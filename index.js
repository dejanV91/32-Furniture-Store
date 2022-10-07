import { fetchProducts } from "./src/fetchProducts.js";
import { setupStore, store } from "./src/setupStore.js";
import { getElement } from "./utils.js"

const featuredDiv = getElement(".featured-center");

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    setupStore(products);
    const featured = store.filter((product) => product.featured === true)
    display()
  }
}

init();