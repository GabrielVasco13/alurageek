export async function fetchProducts() {
    try {
        const response = await fetch('https://67414bf7e4647499008d4cba.mockapi.io/api/v1/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.record.products;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}