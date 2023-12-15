document.addEventListener("DOMContentLoaded", function () {
    // Function to show only the selected section
    function showOnlySelectedSection(selectedSection) {
      const sections = [librarySection, gradeCalculatorSection, timetableSection];
      sections.forEach(section => {
        section.style.display = (section === selectedSection) ? "block" : "none";
      });
    }
  
    const librarySection = document.getElementById("library");
    const gradeCalculatorSection = document.getElementById("gradeCalculator");
    const timetableSection = document.getElementById("timetable");
  
    librarySection.style.display = "none";
    gradeCalculatorSection.style.display = "none";
    timetableSection.style.display = "none";
  
    document.getElementById("library-link").addEventListener("click", (event) => {
      event.preventDefault();
      showOnlySelectedSection(librarySection);
    });
  
    document.getElementById("gradeCalculator-link").addEventListener("click", (event) => {
      event.preventDefault();
      showOnlySelectedSection(gradeCalculatorSection);
    });
  
    document.getElementById("timetable-link").addEventListener("click", (event) => {
      event.preventDefault();
      showOnlySelectedSection(timetableSection);
    });
  });
  