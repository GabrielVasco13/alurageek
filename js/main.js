async function showProducts() {
    const API = await fetch('http://localhost:3000/products');
    const products = await API.json();
    const productsContainer = document.querySelector('.produtos__container'); // Correct class name

    try {
        if (productsContainer) {
            products.forEach(product => {
                addProductCard(product.image, product.name, productsContainer);
            });
        } else {
            throw new Error('Products container not found');
        }
    }
    catch (error) {
        console.error(error);
    }
}

function addProductCard(imageSrc, productName, container) {
    const productCard = document.createElement('div');
    productCard.classList.add('produto__card');
    productCard.innerHTML = `
        <img class="produto__item" src="${imageSrc}" alt="${productName}">
        <h2>${productName}</h2>
        <button class="produto__delete"><img src="assets/trash.svg" alt="Deletar o item"></button>
    `;

    container.appendChild(productCard);
}

document.addEventListener('DOMContentLoaded', showProducts);