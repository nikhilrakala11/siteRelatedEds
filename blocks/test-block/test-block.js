export default function decorate(block) {
  block.innerHTML = `
    <div class="test-block-content">
      <h2>Hello EDS!</h2>
      <p>This is hardcoded data from my block.</p>
      <button>Click Me</button>
    </div>
  `;
}