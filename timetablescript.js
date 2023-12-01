document.addEventListener('DOMContentLoaded', async () => {
    const classesUrl = './classes.json';
    const timetablesUrl = './timetables.json';

    // Add event listener to the "Stundenplan" link
    const stundenplanLink = document.getElementById('stundenplan-link');
    stundenplanLink.addEventListener('click', async () => {
        try {
            const classes = await fetchClasses();
            showClassList(classes);
        } catch (err) {
            console.error('Error fetching classes', err);
        }
    });

    // Add event listener to dynamically created class list items
    document.getElementById('stundenplan').addEventListener('click', async (event) => {
        try {
            if (event.target.tagName === 'LI') {
                const className = event.target.textContent.trim();
                await loadTimetable(className);
            }
        } catch (err) {
            console.error('Error executing timetablescript.js', err);
        }
    });

    async function fetchClasses() {
        return fetch(classesUrl).then(response => response.json());
    }

    function showClassList(classes) {
        const timetableSection = document.getElementById('stundenplan');
        timetableSection.innerHTML = ''; // Clear previous content

        const classList = document.createElement('ul');

        classes.forEach(className => {
            const li = document.createElement('li');
            li.textContent = className;
            classList.appendChild(li);
        });

        timetableSection.appendChild(classList);
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

                const table = document.createElement('table');
                const tbody = document.createElement('tbody');

                timetable.hours.forEach(hour => {
                    const tr = document.createElement('tr');
                    const tdTime = document.createElement('td');
                    const tdSubject = document.createElement('td');

                    tdTime.textContent = hour.time;
                    tdSubject.textContent = hour.subject;

                    tr.appendChild(tdTime);
                    tr.appendChild(tdSubject);
                    tbody.appendChild(tr);
                });

                table.appendChild(tbody);
                timetableSection.appendChild(table);
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
        return fetch(timetablesUrl)
            .then(response => response.json())
            .then(timetables => timetables.find(entry => entry.className === className));
    }
});
