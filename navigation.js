document.addEventListener("DOMContentLoaded", function () {
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

  function handleNavLinkClick(event, section) {
    event.preventDefault();
    showOnlySelectedSection(section);
  }

  document.getElementById("library-link").addEventListener("click", (event) => {
    handleNavLinkClick(event, librarySection);
  });

  document.getElementById("gradeCalculator-link").addEventListener("click", (event) => {
    handleNavLinkClick(event, gradeCalculatorSection);
  });

  document.getElementById("timetable-link").addEventListener("click", (event) => {
    handleNavLinkClick(event, timetableSection);
  });
});
