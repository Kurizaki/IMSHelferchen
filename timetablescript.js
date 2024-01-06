document.addEventListener("DOMContentLoaded", async () => {
  const classesUrl = "./classes.json";
  const timetablesUrl = "./timetables.json";

  const timetableLink = document.getElementById("timetable-link");
  timetableLink.addEventListener("click", async () => {
    try {
      const classes = await fetchClasses();
      showClassList(classes);
    } catch (err) {
      console.error("Error fetching classes", err);
    }
  });

  document.getElementById("timetable").addEventListener("click", async (event) => {
    const timetableSection = document.getElementById("timetable");
    if (event.target.id === "back-button") {
      showClassList(await fetchClasses());
    } else if (event.target.tagName === "LI") {
      const className = event.target.textContent.trim();
      await loadTimetable(className);
    }
  });

  async function fetchClasses() {
    return fetch(classesUrl).then((response) => response.json());
  }

  function showClassList(classes) {
    const timetableSection = document.getElementById("timetable");
    timetableSection.innerHTML = "";
    const classList = document.createElement("ul");

    classes.forEach((className) => {
      const li = document.createElement("li");
      li.textContent = className;
      classList.appendChild(li);
    });

    timetableSection.appendChild(classList);
  }

  async function loadTimetable(className) {
    try {
      const timetableSection = document.getElementById("timetable");
      const timetable = await fetchTimetable(className);
      timetableSection.innerHTML = "";

      if (timetable) {
        const backButton = document.createElement("button");
        backButton.textContent = "Zurück";
        backButton.id = "back-button";

        const noteText = document.createElement("p");
        noteText.textContent = "Die Aufgeführten Daten sind Beispielsdaten aufgrund von der zugänglichkeit der Stundenpläne der IMS Schüler";
        timetableSection.appendChild(noteText);

        backButton.addEventListener("click", async () => {
          showClassList(await fetchClasses());
        });
        
        timetableSection.appendChild(backButton);

        const h2 = document.createElement("h2");
        h2.textContent = `Timetable for ${className}`;
        timetableSection.appendChild(h2);

        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        const headerRow = document.createElement("tr");
        const thTime = document.createElement("th");
        thTime.textContent = "Time";
        const thSubject = document.createElement("th");
        thSubject.textContent = "Subject";

        headerRow.appendChild(thTime);
        headerRow.appendChild(thSubject);
        thead.appendChild(headerRow);
        table.appendChild(thead);

        timetable.hours.forEach((hour) => {
          const tr = document.createElement("tr");
          const tdTime = document.createElement("td");
          const tdSubject = document.createElement("td");

          tdTime.textContent = hour.time;
          tdSubject.textContent = hour.subject;

          tr.appendChild(tdTime);
          tr.appendChild(tdSubject);
          tbody.appendChild(tr);
        });

        table.appendChild(tbody);
        timetableSection.appendChild(table);
      } else {
        const p = document.createElement("p");
        p.textContent = "Timetable not available.";
        timetableSection.appendChild(p);
      }
    } catch (err) {
      console.error("Error loading timetable", err);
    }
  }

  function fetchTimetable(className) {
    return fetch(timetablesUrl)
      .then((response) => response.json())
      .then((timetables) => timetables.find((entry) => entry.className === className));
  }
});
