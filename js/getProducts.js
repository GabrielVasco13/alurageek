import { deleteProduct } from './deleteProducts.js';

export async function showProducts() {
    const API = await fetch('http://localhost:3000/products');
    const products = await API.json();
    const productsContainer = document.querySelector('.produtos__container');
    if (productsContainer) {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            addProductCard(product.image, product.name, product.price, product.id, productsContainer);
        });
    } else {
        console.error('Products container not found');
    }
}

function addProductCard(imageSrc, productName, productPrice, productId, container) {
    const productCard = document.createElement('div');
    productCard.classList.add('produto__card');
    productCard.innerHTML = `
        <img class="produto__item" src="${imageSrc}" alt="${productName}">
        <h2>${productName}</h2>
        <div class="produto__info">
            <p>R$${productPrice}</p>
            <button class="produto__delete"><img src="assets/trash.svg" alt="Deletar o item"></button>
        </div>
    `;

    container.appendChild(productCard);

    const deleteButton = productCard.querySelector('.produto__delete');
    deleteButton.addEventListener('click', async () => {
        await deleteProduct(productId);
    });
}


showProducts();