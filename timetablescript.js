document.addEventListener("DOMContentLoaded", async () => {
  // URLs for fetching classes and timetables.
  const classesUrl = "./classes.json";
  const timetablesUrl = "./timetables.json";

  // Add event listener to the timetable link.
  const timetableLink = document.getElementById("timetable-link");
  timetableLink.addEventListener("click", async () => {
    try {
      // Fetch classes and display them when the timetable link is clicked.
      const classes = await fetchClasses();
      showClassList(classes);
    } catch (err) {
      console.error("Error fetching classes", err);
    }
  });

  // Event listener for clicks within the timetable section.
  document.getElementById("timetable").addEventListener("click", async (event) => {
    const timetableSection = document.getElementById("timetable");
    // Handle click events based on target elements.
    if (event.target.id === "back-button") {
      // Show class list when the back button is clicked.
      showClassList(await fetchClasses());
    } else if (event.target.tagName === "LI") {
      // Load timetable for the selected class name.
      const className = event.target.textContent.trim();
      await loadTimetable(className);
    }
  });

  // Function to fetch classes from JSON.
  async function fetchClasses() {
    return fetch(classesUrl).then((response) => response.json());
  }

  // Function to display the list of classes.
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

  // Function to load timetable based on class name.
  async function loadTimetable(className) {
    try {
      const timetableSection = document.getElementById("timetable");
      const timetable = await fetchTimetable(className);
      timetableSection.innerHTML = "";

      if (timetable) {
        // Create and append back button.
        const backButton = document.createElement("button");
        backButton.textContent = "Zurück";
        backButton.id = "back-button";

        const noteText = document.createElement("p");
        noteText.textContent = "Die angegebenen Daten stammen von der BBBaden. Die Kanti Baden veröffentlicht keine Stundenpläne im Internet. :(";
        backButton.addEventListener("click", async () => {
          showClassList(await fetchClasses());
        });

        // Add note text and back button to the timetable section.
        timetableSection.appendChild(backButton);
        timetableSection.appendChild(noteText);

        // Create and append header, table, and rows to display the timetable.
        const h2 = document.createElement("h2");
        h2.textContent = `Stundenplan für ${className}`;
        timetableSection.appendChild(h2);

        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        const headerRow = document.createElement("tr");
        const thTime = document.createElement("th");
        thTime.textContent = "Zeit";
        const thSubject = document.createElement("th");
        thSubject.textContent = "Unterricht";

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

  // Function to fetch timetable data from JSON based on class name.
  function fetchTimetable(className) {
    return fetch(timetablesUrl)
      .then((response) => response.json())
      .then((timetables) => timetables.find((entry) => entry.className === className));
  }
});
//comments are generated by ChatGPT