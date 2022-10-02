import { formatPrice } from "./utils.js";

const display = (products,element, filters) => {
    // dislay products
    element.innerHTML = products
        .map((product) => {
            const {id, name, image, price} = product;
            return `<div class="single-item">
                        <div class="image">
                            <img class="items-images" src="${image}" alt="${name}">
                            <div class="products-icons">
                                <a href="singleProduct.html?id=${id}"><div class="function-icon search-icon">
                                    <span class="material-symbols-outlined">search</span>
                                </div></a>
                                <div data-id="${id}" onclick="addToCart(${id})" class="function-icon shopping-icon">
                                    <span class="material-symbols-outlined">shopping_cart</span>
                                </div>
                            </div>
                        </div>
                        <h3 class="item-title">${name}</h3>
                        <p class="price">${formatPrice(price)}</p>
                    </div>`
        })
        .join("");
    
    if (filters) return;

}

export default display;