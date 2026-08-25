export default async function decorate(block) {
  // Show loading message
  block.innerHTML = '<p>Loading products...</p>';

  try {
    // Call your AEM Servlet
    const response = await fetch('/bin/products');

    // Check whether the API call was successful
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    // Convert response to JSON
    const products = await response.json();

    // Create container
    const container = document.createElement('div');
    container.className = 'products';

    // Create a card for each product
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

    // Replace loading message with products
    block.replaceChildren(container);
  } catch (error) {
    console.error('Failed to load products:', error);

    block.innerHTML = '<p>Unable to load products.</p>';
  }
}