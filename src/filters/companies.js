import { display } from "../display.js";
import { store } from "../setupStore.js";
import { getElement } from "../utils.js";

const companiesList = getElement(".companies")
const productsContainer = getElement(".products-container");

const setupCompanies = (store) => {
    let companies = ["all", ...new Set(store.map((item) => item.company))];
    
    // add list companies DOM
    companiesList.innerHTML = companies.map((item) => {
        return `<button class="company-btn">${item}</button>`
    })
    .join("");

    // dislay products by company
    companiesList.addEventListener("click", (e) => {
        let productsByCompany = store.filter((product) => {
            if (product.company === e.target.textContent) {
                return product
            }
        });
        
        if (productsByCompany.length < 1) {
            display(productsContainer, store, true);
        }else{
            display(productsContainer, productsByCompany, true)
        }
    });
};

export {setupCompanies}