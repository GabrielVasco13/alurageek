export async function fetchProducts() {
    try {
        const response = await fetch('https://api.jsonbin.io/v3/b/674151c9e41b4d34e45905ba');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.record.products;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}