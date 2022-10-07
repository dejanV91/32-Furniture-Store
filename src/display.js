
const display = (element, items) => {
    const products = items.map((item) => {
        console.log(item);
    })
    element.innerHTML = products;
}

export {display}