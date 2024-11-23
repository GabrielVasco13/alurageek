async function showProducts() {
    const API = await fetch('http://localhost:3000/products');
    const products = await API.json();
    const productsContainer = document.querySelector('.produtos__container');
    if (productsContainer) {
        products.forEach(product => {
            addProductCard(product.image, product.name, product.price, productsContainer);
        });
    } else {
        console.error('Products container not found');
    }
}

function addProductCard(imageSrc, productName, productPrice, container) {
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
}

window.onload = showProducts;