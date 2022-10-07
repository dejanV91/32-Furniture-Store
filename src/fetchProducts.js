import { allProductsUrl } from "./utils.js"

const fetchProducts = async () => {
    const response = await fetch(allProductsUrl);
    const data = response.json();
    return data
} 

export {fetchProducts}