const allProductsUrl = 'https://course-api.com/javascript-store-products'

const singleProductUrl = 'https://course-api.com/javascript-store-single-product'

const getStorageItems = (name) => {
  let storageItems = localStorage.getItem(name);
  if (storageItems) {
      storageItems = JSON.parse(localStorage.getItem(name))
  }else{
      storageItems = []
  }
  return storageItems;
}

const setStorageItems = (name , items) => {
  localStorage.setItem(name, JSON.stringify(items))
}

const getElement = (selection) => {
  let element = document.querySelector(selection)
  return element;
}

const formattedPrice = (price) => {
  var formatted = new Intl.NumberFormat('en-US', {
      style: "currency",
      currency: "USD",
  });
  return formatted.format(price / 100);
}


export {allProductsUrl,
    singleProductUrl,
    getStorageItems,
    setStorageItems,
    getElement,
    formattedPrice}