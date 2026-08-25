export default async function decorate(block) {
  const loading = document.createElement('p');
  loading.textContent = 'Loading products...';
  block.replaceChildren(loading);

  try {
    const response = await fetch('http://localhost:4502/bin/products', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    console.log('API status:', response.status);
    console.log('API content type:', response.headers.get('content-type'));

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    // Read the response as text first.
    // This prevents "Unexpected end of JSON input"
    // when AEM returns an empty response.
    const text = await response.text();

    console.log('API response:', text);

    if (!text.trim()) {
      throw new Error('AEM API returned an empty response');
    }

    const products = JSON.parse(text);

    if (!Array.isArray(products)) {
      throw new Error('Expected the API response to be an array');
    }

    const container = document.createElement('div');
    container.className = 'products';

    products.forEach((product) => {
      const card = document.createElement('div');
      card.className = 'product-card';

      const title = document.createElement('h2');
      title.textContent = product.title || 'No title';

      const description = document.createElement('p');
      description.textContent = product.description || 'No description';

      card.append(title, description);
      container.append(card);
    });

    block.replaceChildren(container);
  } catch (error) {
    console.error('Failed to load products:', error);

    const errorMessage = document.createElement('p');
    errorMessage.textContent = `Unable to load products: ${error.message}`;

    block.replaceChildren(errorMessage);
  }
}