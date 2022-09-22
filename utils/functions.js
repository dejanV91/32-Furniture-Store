
// get ELEMENT
export function getElement(className){
    try {
        return document.querySelector(className)
    } catch (error) {
        console.log("element not found");
    }
}

// loading Hide
export function loadingToggleHidde(element,className){
    return element.classList.add(className)
}
// loading show
export function loadingToggleShow(element,className){
    return element.classList.remove(className)
}

//TOGGLE function
export function toggleElement(elementBtn,element,closeElement,classShow){
    elementBtn.addEventListener("click", () =>{
        const modal = element;
        modal.classList.add(classShow);

        const close = closeElement;
        close.addEventListener("click", () => {
        modal.classList.remove(classShow)
    })
})};

// cart icon toggle
export function cartModalToggle(cartIconElem,classShow){
    cartIconElem.addEventListener("click", () => {
        const cartModal = getElement(".cart-modal");
        const cartOverlay = getElement(".cart-overlay");
        cartModal.classList.add(classShow);
        cartOverlay.classList.add(classShow);

        const closeModalCart = getElement("#close-modal-cart");
        closeModalCart.addEventListener("click", () => {
            cartModal.classList.remove(classShow);
            cartOverlay.classList.remove(classShow);
        });
    })
}



export default {
    getElement, 
    toggleElement,
    cartModalToggle,
    loadingToggleHidde,
    loadingToggleShow
};