import { formatPrice, getElement } from "../utils.js";

const cartItemsDOM = getElement(".cart-items");
const addToCartDOM = ({id, name, price, image, amount}) => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.setAttribute("data-id", id);
    div.innerHTML = `<div class="image-item-div">
                        <img src="${image}" alt="${name}">
                    </div>
                    <div class="content-item-div">
                        <h3 class="item-title">${name}</h3>
                        <p class="item-price"><span>$</span>${formatPrice(price)}</p>
                        <button class="remove-item" data-id="${id}">remove</button>
                    </div>
                    <div class="number-item-div">
                        <button class="plus-item item-btn" data-id="${id}">
                            <span class="material-symbols-outlined">expand_less</span>
                        </button>
                        <p class="number" data-id="${id}">${amount}</p>
                        <button class="minus-item item-btn" data-id="${id}">
                            <span class="material-symbols-outlined">expand_more</span>
                        </button>
                    </div>`;
    cartItemsDOM.appendChild(div);
};

export default addToCartDOM;