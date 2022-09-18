const allProductsUrl = 'https://course-api.com/javascript-store-products'
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  'https://course-api.com/javascript-store-single-product'

import fetchProducts from "./utils/fetchIndex.js";

const toggleBtn = document.querySelector(".toggle");
const cartIcon = document.querySelector(".cart-div");
const itemsDiv = document.querySelector(".items-div");

toggleBtn.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  modal.classList.add("show");

  const closeModal = document.querySelector(".modal-close");
  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
  })
});

cartIcon.addEventListener("click", () => {
  const cartModal = document.querySelector(".cart-modal");
  const cartOverlay = document.querySelector(".cart-overlay");
  cartModal.classList.add("show");
  cartOverlay.classList.add("show");

  const closeModalCart = document.querySelector("#close-modal-cart");
  closeModalCart.addEventListener("click", () => {
      cartModal.classList.remove("show");
      cartOverlay.classList.remove("show");
  });
});

// set product on index page
const products = async () => {
  const items = await fetchProducts();
  const setItem = items.slice(0,3)
    .map((item) => {
      const{name,price,} = item.fields;
      let image = item.fields.image[0].url
      return `<div class="single-item">
                  <div class="image">
                      <img class="items-images" src="${image}" alt="${name}">
                      <div class="products-icons">
                          <div id="search-icon" class="function-icon">
                              <span class="material-symbols-outlined">search</span>
                          </div>
                          <div id="shopping-icon" class="function-icon">
                              <span class="material-symbols-outlined">shopping_cart</span>
                          </div>
                      </div>
                  </div>
                  <h3 class="item-title">${name}</h3>
                  <p class="price">$${price/100}</p>
              </div>`
    }).join("");
  itemsDiv.innerHTML = setItem;
}

// call function
products();




  

