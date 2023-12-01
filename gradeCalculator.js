document.addEventListener("DOMContentLoaded", () => {
  const gradeCalculatorSection = document.getElementById("gradeCalculator");
  const gradesContainer = document.createElement("div");
  const notenrechnerLink = document.getElementById("notenrechner-link");
  gradesContainer.id = "grades-container";
  gradeCalculatorSection.appendChild(gradesContainer);

  gradeCalculatorSection.style.display = "none";

  // Function to update the average grade
  function updateAverage() {
    const gradeInputs = gradesContainer.querySelectorAll(".grade-input");
    const weightInputs = gradesContainer.querySelectorAll(".weight-input");
    let total = 0,
      weightSum = 0;

    gradeInputs.forEach((gradeInput, index) => {
      const grade = parseFloat(gradeInput.value) || 0;
      const weight = parseFloat(weightInputs[index].value) || 0;
      total += grade * weight;
      weightSum += weight;
    });

    const average = weightSum ? (total / weightSum).toFixed(2) : 0;
    document.getElementById("average-grade").textContent = average;
  }

  function toggleGradeCalculator() {
    if (gradeCalculatorSection.style.display === "none") {
      gradeCalculatorSection.style.display = "block";
    } else {
      gradeCalculatorSection.style.display = "none";
    }
  }
  notenrechnerLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default anchor action
    toggleGradeCalculator();
  });
  function deleteLastGrade() {
    const lastGradeWrapper = gradesContainer.lastElementChild;
    if (lastGradeWrapper) {
      gradesContainer.removeChild(lastGradeWrapper);
      updateAverage();
    }
  }

  // Function to add a grade input
  function addGradeInput() {
    const gradeInput = document.createElement("input");
    gradeInput.type = "number";
    gradeInput.placeholder = "Grade";
    gradeInput.min = 1; // Set minimum grade to 1
    gradeInput.max = 7; // Set maximum grade to 7
    gradeInput.className = "grade-input";

    const weightInput = document.createElement("input");
    weightInput.type = "number";
    weightInput.placeholder = "Weight";
    weightInput.className = "weight-input";

    const gradeWrapper = document.createElement("div");
    gradeWrapper.appendChild(gradeInput);
    gradeWrapper.appendChild(weightInput);
    gradeWrapper.appendChild(weightDescription);
    gradesContainer.appendChild(gradeWrapper);

    gradeInput.addEventListener("input", updateAverage);
    weightInput.addEventListener("input", updateAverage);
  }
  const weightDescription = document.createElement("small");
  weightDescription.textContent = "Weight: 1 = 100%, 0.5 = 50%, 2 = 200%";
  weightDescription.style.display = "block";

  // Create 'Add Grade' button
  const addGradeButton = document.createElement("button");
  addGradeButton.textContent = "Add Grade";
  addGradeButton.addEventListener("click", addGradeInput);
  gradeCalculatorSection.appendChild(addGradeButton);

  // Create 'Delete Grade' button
  const deleteGradeButton = document.createElement("button");
  deleteGradeButton.textContent = "Delete Last Grade";
  deleteGradeButton.addEventListener("click", deleteLastGrade);
  gradeCalculatorSection.appendChild(deleteGradeButton);

  // Create average display
  const averageDisplay = document.createElement("div");
  averageDisplay.innerHTML =
    '<strong>Average Grade:</strong> <span id="average-grade">0</span>';
  gradeCalculatorSection.appendChild(averageDisplay);

  // Initialize with one grade input
  addGradeInput();
});
