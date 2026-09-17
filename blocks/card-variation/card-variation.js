export default function decorate(block) {
    console.log('Decorating card variation block', block);
    const ul = document.createElement('ul');
    const rows = [...block.children];
   rows.forEach((row) => {
    const columns = [...row.children];

    console.log(columns[0]);
    console.log(columns[1]);
    console.log(columns[2]);
    console.log(columns[3]);
});
    };