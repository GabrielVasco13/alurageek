import { showProducts } from './getProducts.js';

export async function deleteProduct(productId) {
    const API = await fetch(`http://localhost:3000/products/${productId}`, {
        method: 'DELETE'
    });
    if (API.ok) {
        showProducts();
    } else {
        const response = await API.json();
        alert(response.message || 'Erro ao deletar produto');
    }
}