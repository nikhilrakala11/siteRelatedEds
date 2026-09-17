export default function decorate(block) {
    console.log('Decorating card variation block', block);
    const ul = document.createElement('ul');
    const rows = [...block.children];

    rows.forEach((row) => {
        console.log(row);
    });
}