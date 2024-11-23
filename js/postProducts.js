import { showProducts } from './getProducts.js';

async function postProduct() {
    const form = document.querySelector('.form');
    if (form) {
        form.addEventListener('submit', async e => {
            e.preventDefault();
            const name = document.querySelector('.form__name').value;
            const price = document.querySelector('.form__price').value;
            const image = document.querySelector('.form__image').value;
            const newProduct = { name, price, image };
            const API = await fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            });
            if (API.ok) {
                showProducts();
            } else {
                alert('Erro ao adicionar produto');
            }
        });
    } else {
        console.error('Form not found');
    }
}

postProduct();