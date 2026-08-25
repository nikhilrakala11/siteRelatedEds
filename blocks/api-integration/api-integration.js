export default async function decorate(block) {
  try {
    const response = await fetch('http://localhost:4502/bin/products');

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const message = await response.text();

    const heading = document.createElement('h2');
    heading.textContent = message;

    block.replaceChildren(heading);
  } catch (error) {
    console.error('Failed to load AEM API:', error);

    block.textContent = 'Unable to load AEM API.';
  }
}