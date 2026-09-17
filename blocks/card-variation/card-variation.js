export default function decorate(block) {

    console.log('Decorating card variation block', block);

    const ul = document.createElement('ul');

    const rows = [...block.children];

    rows.forEach((row) => {

        const columns = [...row.children];

        const course = columns[0].textContent.trim();
        const duration = columns[1].textContent.trim();
        const location = columns[2].textContent.trim();
        const cta = columns[3].textContent.trim();

        console.log('COURSE:', course);
        console.log('DURATION:', duration);
        console.log('LOCATION:', location);
        console.log('CTA:', cta);

    });
}