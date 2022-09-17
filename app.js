const allProductsUrl = 'https://course-api.com/javascript-store-products'
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  'https://course-api.com/javascript-store-single-product'

const toggleBtn = document.querySelector(".toggle");
const cartIcon = document.querySelector(".cart-div");

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
});

  

