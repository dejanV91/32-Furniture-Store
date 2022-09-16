const allProductsUrl = 'https://course-api.com/javascript-store-products'
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  'https://course-api.com/javascript-store-single-product'

  const toggleBtn = document.querySelector(".toggle");

  toggleBtn.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.classList.add("show");

    const closeModal = document.querySelector(".modal-close");
    closeModal.addEventListener("click", () => {
      modal.classList.remove("show");
    })
  });