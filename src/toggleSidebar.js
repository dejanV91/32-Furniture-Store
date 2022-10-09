import { getElement } from "./utils.js";

const toggleNavButton = getElement('.toggle-nav');
const closeSidebar = getElement('.sidebar-close');
const sidebarOverlay = getElement('.sidebar-overlay');

toggleNavButton.addEventListener("click", () => {
    sidebarOverlay.classList.add("show");
})

closeSidebar.addEventListener("click", () => {
    sidebarOverlay.classList.remove("show");
})

const openSidebar = () => {
    sidebarOverlay.classList.add("show");
}

export {openSidebar}