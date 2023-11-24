// timetable

document.addEventListener('DOMContentLoaded', async () => {
    const classesUrl = './classes.json';
    const timetablesUrl = './timetables.json';

    // Initialize class list on page load
    try {
        const classes = await fetchClasses();
        initializeClassList(classes);
    } catch (err) {
        console.error('Error fetching classes', err);
    }

    function fetchClasses() {
        return fetch(classesUrl).then(response => response.json());
    }

    function initializeClassList(classes) {
        const classList = document.getElementById('class-list');
        classList.innerHTML = '';

        classes.forEach(className => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = className;
            link.addEventListener('click', () => loadTimetable(className));
            li.appendChild(link);
            classList.appendChild(li);
        });
    }

    async function loadTimetable(className) {
        try {
            const timetableSection = document.getElementById('stundenplan');

            const timetable = await fetchTimetable(className);

            if (timetable) {
                timetableSection.innerHTML = ''; // Clear previous timetable content

                const h2 = document.createElement('h2');
                h2.textContent = `Stundenplan für ${className}`;
                timetableSection.appendChild(h2);

                const ul = document.createElement('ul');
                timetable.hours.forEach(hour => {
                    const li = document.createElement('li');
                    li.textContent = `${hour.time}: ${hour.subject}`;
                    ul.appendChild(li);
                });
                timetableSection.appendChild(ul);
            } else {
                const p = document.createElement('p');
                p.textContent = 'Stundenplan nicht verfügbar.';
                timetableSection.innerHTML = ''; // Clear previous timetable content
                timetableSection.appendChild(p);
            }
        } catch (err) {
            console.error('Error loading timetable', err);
        }
    }

    function fetchTimetable(className) {
        return fetch(timetablesUrl).then(response => response.json())
            .then(timetables => timetables.find(entry => entry.className === className));
    }
});
