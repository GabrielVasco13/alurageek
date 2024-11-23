import { showProducts } from './getProducts.js';

export async function deleteProduct(productId) {
    const API = await fetch(`https://67414bf7e4647499008d4cba.mockapi.io/api/v1/products/${productId}`, {
        method: 'DELETE'
    });
    if (API.ok) {
        showProducts();
    } else {
        const response = await API.json();
        alert(response.message || 'Erro ao deletar produto');
    }
}