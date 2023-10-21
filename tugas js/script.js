// Background Color Changer
const colorInput = document.getElementById("color");
const body = document.body;

colorInput.addEventListener("input", () => {
  body.style.backgroundColor = colorInput.value;
});

// Counter
const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const countDisplay = document.getElementById("count");

let count = 1;

decrementBtn.addEventListener("click", () => {
  count = Math.max(count - 1, 1);
  countDisplay.textContent = count;
});

incrementBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// For Loop
const startLoopBtn = document.getElementById("startLoop");
const loopCountInput = document.getElementById("loopCount");
const resultsDiv = document.querySelector(".results");

startLoopBtn.addEventListener("click", () => {
  resultsDiv.innerHTML = "";
  const loopCount = parseInt(loopCountInput.value) || 5;

  for (let i = 1; i <= loopCount; i++) {
    const paragraph = document.createElement("p");
    paragraph.textContent = `Paragraph ${i}`;
    resultsDiv.appendChild(paragraph);
  }
});

// Region Selector
const regionSelect = document.getElementById("region");
const selectedRegion = document.getElementById("selectedRegion");

regionSelect.addEventListener("change", () => {
  selectedRegion.textContent = `Selected Region: ${
    regionSelect.options[regionSelect.selectedIndex].text
  }`;
});

// Age Checker
const checkAgeBtn = document.getElementById("checkAge");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", () => {
  const age = parseInt(prompt("Enter your age:"));

  if (isNaN(age)) {
    ageResult.textContent = "Please enter a valid age.";
  } else {
    if (age < 18) {
      ageResult.textContent = "You are under 18.";
    } else if (age >= 18 && age < 60) {
      ageResult.textContent = "You are an adult.";
    } else {
      ageResult.textContent = "You are a senior citizen.";
    }
  }
});
