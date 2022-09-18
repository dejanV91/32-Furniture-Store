import fetchProducts from "./fetchIndex.js";

const itemsDiv = document.querySelector(".items-div");

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

  export default products