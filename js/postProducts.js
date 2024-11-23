import { showProducts } from './getProducts.js';

async function postProduct() {
    const form = document.querySelector('.form');
    if (form) {
        form.addEventListener('submit', async e => {
            e.preventDefault();
            const nameField = document.querySelector('.form__name');
            const priceField = document.querySelector('.form__price');
            const imageField = document.querySelector('.form__image');
            const name = nameField.value;
            const price = priceField.value;
            const image = imageField.value;
            const newProduct = { name, price, image };
            const API = await fetch('https://67414bf7e4647499008d4cba.mockapi.io/api/v1/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            });
            if (API.ok) {
                showProducts();
                nameField.value = '';
                priceField.value = '';
                imageField.value = '';
            } else {
                alert('Erro ao adicionar produto');
            }
        });
    } else {
        console.error('Form not found');
    }
}

postProduct();