import { addToCart } from "./cart/addCart.js";
import { formattedPrice } from "./utils.js";

const display = (element, items) => {
    const products = items.map((item) => {
        const {id, image, name, price} = item;
        return `<article class="product">
                <div class="product-container">
                    <img src="${image}" class="product-img img" alt="${name}" />
                
                    <div class="product-icons">
                    <a href="product.html?id='${id}'" class="product-icon">
                        <i class="fas fa-search"></i>
                    </a>
                    <button class="product-cart-btn product-icon" data-id="${id}">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                    </div>
                </div>
                <footer>
                    <p class="product-name">${name}</p>
                    <h4 class="product-price">${formattedPrice(price)}</h4>
                </footer>
                </article>`;
    })
    .join(" ");
    element.innerHTML = products;


    element.addEventListener("click", (e) => {
        let cartButton = e.target.parentNode;
        if (cartButton.classList.contains("product-cart-btn")) {
            const id = cartButton.dataset.id;
            addToCart(id);
        }
    })
}

export {display}