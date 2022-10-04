import { getStorageItem, setStorageItem } from './utils.js';
// get data from local storage
let store = getStorageItem('store');
// set products on local storage
const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, featured, name, price, company, colors, image };
  });
  setStorageItem('store', store);
};

// find product by id from store in local storeg where is all products
const findProduct = (id) => {
  let product = store.find((product) => product.id === id);
  return product;
};

export { store, setupStore, findProduct };
