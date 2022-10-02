const allProductsUrl = 'https://course-api.com/javascript-store-products';

const getStorageItem = (item) => {
    let storageItem = localStorage.getItem(item);
    if (storageItem) {
        storageItem = JSON.parse(localStorage.getItem(item));
    }else{
        storageItem = [];
    }
    return storageItem
}

const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
}

const formatPrice = (price) => {
    let formattedPrice = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD",
    }).format((price / 100).toFixed(2))
    return formattedPrice
}

const getElement = (selection) => {
    const element = document.querySelector(selection)
    if (element) return element
    throw new Error(`Please check "${selection}" selector, no such element exist`)
}

export {
    allProductsUrl,
    getStorageItem,
    setStorageItem,
    formatPrice,
    getElement,
}