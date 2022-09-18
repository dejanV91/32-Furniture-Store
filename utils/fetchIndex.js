const allProductsUrl = 'https://course-api.com/javascript-store-products'

const fetchProducts = async () => {
    const response = await fetch(allProductsUrl);
    const json = await response.json();
    return json
}

export default fetchProducts;