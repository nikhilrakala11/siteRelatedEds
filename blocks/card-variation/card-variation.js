export default function decorate(block) {
    console.log('Decorating card variation block', block);
    const ul = document.createElement('ul');
    const rows = [...block.children];
   rows.forEach((row) => {
    const columns = [...row.children];
        const li = document.createElement('li');
        li.append(...columns);
        ul.append(li);
        console.log('Added row to ul', ul);
    });
  }