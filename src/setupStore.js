import { getStorageItems, setStorageItems } from "./utils.js";

let store = getStorageItems("store");

const setupStore = (products) => {
    store = products.map((item) => {
        const {id} = item;
        const {name, featured, company, price, colors, image:img} = item.fields
        const image = img[0].thumbnails.large.url
        return {id, name, featured, company, price, colors, image}
    })
    setStorageItems("store", store)
};

const findProduct = (id) => {
    let product = store.find((product) => product.id === id )
    return product
};

export {store,
        setupStore,
        findProduct}