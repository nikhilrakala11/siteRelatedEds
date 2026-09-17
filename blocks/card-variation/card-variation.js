export default function decorate(block) {

  const ul = document.createElement('ul');

  const rows = [...block.children].slice(2);

  rows.forEach((row) => {

    const columns = [...row.children];

    const li = document.createElement('li');
    li.classList.add('course-card');

    const course = document.createElement('div');
    course.classList.add('course-title');
    course.textContent = columns[0].textContent.trim();

    const duration = document.createElement('div');
    duration.classList.add('course-duration');
    duration.textContent = columns[1].textContent.trim();

    const location = document.createElement('div');
    location.classList.add('course-location');
    location.textContent = columns[2].textContent.trim();

    const cta = document.createElement('div');
    cta.classList.add('course-cta');
    cta.textContent = columns[3].textContent.trim();

    li.append(course, duration, location, cta);

    ul.append(li);
  });

  block.replaceChildren(ul);
}