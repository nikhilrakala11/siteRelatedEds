export default function decorate(block) {
    console.log('Decorating card variation block', block);
    const ul = document.createElement('ul');
    const rows = [...block.children];
   rows.forEach((row) => {
    const columns = [...row.children];
    columns.forEach((column) => {
      console.log('Columnnnnnnnnnnnnnnnnnnnnnnnn:', column);
    });
  });
};