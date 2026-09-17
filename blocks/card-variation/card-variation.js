export default function decorate(block) {
    console.log('Decorating card variation block', block);
    const ul = document.createElement('ul');
    const rows = [...block.children];
   rows.forEach((row) => {
    const columns = [...row.children];

    const course = columns[0].textContent;
    console.log('Course:', course);
});
    };