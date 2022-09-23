import fetchProducts from "./fetchIndex.js";
import { getElement } from "./functions.js";

const itemsDiv = getElement(".items-div")

const allProductsFetch = async () => {
    const items = await fetchProducts();
    const setItem = items
        .map((item) => {
            const {id} = item;
            const{name,price} = item.fields;
            let image = item.fields.image[0].url;
            return `<div data-id="${id}" class="single-item">
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
        })
        .join("");
        itemsDiv.innerHTML = setItem;
  };

export default allProductsFetch;