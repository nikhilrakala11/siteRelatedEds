export default async function decorate(block) {
  block.innerHTML = '<p>Loading products...</p>';

  try {
    const response = await fetch('http://localhost:4502/bin/products');

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const products = await response.json();

    const container = document.createElement('div');
    container.className = 'products';

    products.forEach((product) => {
      const card = document.createElement('div');
      card.className = 'product-card';

      const title = document.createElement('h2');
      title.textContent = product.title;

      const description = document.createElement('p');
      description.textContent = product.description;

      card.append(title, description);
      container.append(card);
    });

    block.replaceChildren(container);
  } catch (error) {
    console.error('Failed to load products:', error);
    block.innerHTML = '<p>Unable to load products.</p>';
  }
}