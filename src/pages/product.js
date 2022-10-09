import "../cart/addCart.js";
import "../cart/toggleCart.js";
import { fetchProducts } from "../fetchProducts.js";
import "../toggleSidebar.js";
import { formattedPrice, getElement, singleProductUrl } from "../utils.js";

const loading = getElement(".page-loading");
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');


window.addEventListener("DOMContentLoaded", async () => {
    const urlSearchURL = window.location.search;

    try {
        const product = await fetch(`${singleProductUrl}${urlSearchURL}`);
        if (product.status >= 200 && product.status <= 299 ) {
            const item = await product.json();
            const {id, fields} = item;
            const {company,colors, description, image:img, name, price} = fields
            const image = img[0].thumbnails.large.url;

            loading.style.display = "none";
            document.title = `${name.toUpperCase()} | Comfy`;
            pageTitleDOM.textContent = `Home / ${name}`;
            imgDOM.src = image;
            titleDOM.textContent = name;
            companyDOM.textContent = `BY ${company}`;
            priceDOM.textContent = formattedPrice(price);
            descDOM.textContent = description;
            colors.forEach((color) => {
                const span = document.createElement("span");
                span.classList.add("product-color")
                span.setAttribute("style", `background-color:${color}`)
                colorsDOM.appendChild(span);
            });
        }else{
            console.log(response.status, response.statusText);
            centerDOM.innerHTML = `
                <div>
                    <h3 class="error">sorry, something went wrong</h3>
                    <a href="index.html" class="btn">back home</a>
                </div> `;
        }
    } catch (error) {
        console.log(error);
    }
})