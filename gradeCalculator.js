document.addEventListener("DOMContentLoaded", () => {
  const gradeCalculatorSection = document.getElementById("gradeCalculator");
  const gradesContainer = document.createElement("div");
  gradesContainer.id = "grades-container";
  gradeCalculatorSection.appendChild(gradesContainer);

  function updateMedian() {
    const gradeValues = Array.from(gradesContainer.querySelectorAll(".grade-input"))
      .map(input => parseFloat(input.value) || 0)
      .filter(value => value !== 0)
      .sort((a, b) => a - b);

    let median = 0;
    const mid = Math.floor(gradeValues.length / 2);

    if (gradeValues.length > 0) {
      median = gradeValues.length % 2 !== 0
        ? gradeValues[mid]
        : (gradeValues[mid - 1] + gradeValues[mid]) / 2;
    }

    document.getElementById("median-grade").textContent = median.toFixed(2);
  }

  function updateAverage() {
    const gradeInputs = gradesContainer.querySelectorAll(".grade-input");
    const weightInputs = gradesContainer.querySelectorAll(".weight-input");
    let total = 0, weightSum = 0;

    gradeInputs.forEach((gradeInput, index) => {
      const grade = parseFloat(gradeInput.value) || 0;
      const weight = parseFloat(weightInputs[index].value) || 1;
      if (grade <= 7 && grade >= 1) {
        total += grade * weight;
        weightSum += weight;
      }
    });

    const average = weightSum ? (total / weightSum).toFixed(2) : 0;
    document.getElementById("average-grade").textContent = average;
  }

  function deleteLastGrade() {
    const lastGradeWrapper = gradesContainer.lastElementChild;
    if (lastGradeWrapper) {
      gradesContainer.removeChild(lastGradeWrapper);
      updateAverage();
    }
  }

  function addGradeInput() {
    const gradeWrapper = document.createElement("div");
    const gradeInput = document.createElement("input");
    gradeInput.type = "number";
    gradeInput.placeholder = "Grade";
    gradeInput.min = 1;
    gradeInput.max = 7;
    gradeInput.className = "grade-input";

    const weightInput = document.createElement("input");
    weightInput.type = "number";
    weightInput.placeholder = "Weight";
    weightInput.className = "weight-input";
    weightInput.value = 1;

    const weightDescription = document.createElement("small");
    weightDescription.textContent = "Weight: 1 = 100%, 0.5 = 50%, 2 = 200%";
    weightDescription.style.display = "block";

    gradeWrapper.appendChild(gradeInput);
    gradeWrapper.appendChild(weightInput);
    gradeWrapper.appendChild(weightDescription);
    gradesContainer.appendChild(gradeWrapper);

    gradeInput.addEventListener("input", updateAverage);
    weightInput.addEventListener("input", updateAverage);
  }

  const addGradeButton = document.createElement("button");
  addGradeButton.textContent = "Add Grade";
  addGradeButton.addEventListener("click", addGradeInput);
  gradeCalculatorSection.appendChild(addGradeButton);

  const deleteGradeButton = document.createElement("button");
  deleteGradeButton.textContent = "Delete Last Grade";
  deleteGradeButton.addEventListener("click", deleteLastGrade);
  gradeCalculatorSection.appendChild(deleteGradeButton);

  const averageDisplay = document.createElement("div");
  averageDisplay.innerHTML = '<strong>Average Grade:</strong> <span id="average-grade">0</span>';
  gradeCalculatorSection.appendChild(averageDisplay);

  const medianDisplay = document.createElement("div");
  medianDisplay.innerHTML = '<strong>Median Grade:</strong> <span id="median-grade">0</span>';
  gradeCalculatorSection.appendChild(medianDisplay);

  addGradeInput();
});
