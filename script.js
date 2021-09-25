const angleInputs = document.querySelectorAll(".angle-input");
const triangleBtn = document.querySelector("#triangle-btn");
const TriangleOutput = document.querySelector("#output-triangle");

triangleBtn.addEventListener("click", isTriangle);

function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(angleInputs[0].value),
    Number(angleInputs[1].value),
    Number(angleInputs[2].value)
  );
  if (sumOfAngles === 180) {
    TriangleOutput.innerText = "Yay The angles form a triangles";
  } else {
    TriangleOutput.innerText = "Oh Oh! the angles don't form a triangle";
  }
}

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

// quiz
const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#sumbit-answer-btn");
const quizOutput = document.querySelector("#quiz-output");
const correctAnswers = ["90°", "right angled"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResult = new FormData(quizForm);
  for (let value of formResult.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  quizOutput.innerText = "Your score is :" + score;
}

submitButton.addEventListener("click", calculateScore);

// hypotenuse
const hypotenuseInputs = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const hypotenuseOutput = document.querySelector("#hypotenuse-output");

function calculateSumOfSquare(a, b) {
  const sumOfSquare = a * a + b * b;
  return sumOfSquare;
}

function calculateHypotenuse() {
  const sumOfSquare = calculateSumOfSquare(
    Number(hypotenuseInputs[0].value),
    Number(hypotenuseInputs[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
  hypotenuseOutput.innerText =
    "The length of hypotenuse : " + lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);

// areaoftriangle
const areaInput = document.querySelectorAll(".area-input");
const areaBtn = document.querySelector("#calculate-area");
const showArea = document.querySelector("#output-area");

function productSides(base, height) {
  const productOfSides = base * height;
  console.log(productOfSides);
  return productOfSides;
}

function calculateArea() {
  const productOfSides = productSides(
    Number(areaInput[0].value),
    Number(areaInput[1].value)
  );
  const areaOfTriangle = 0.5 * productOfSides;
  console.log(areaOfTriangle);
  showArea.innerText = "Area of Triangle: " + areaOfTriangle + "cm square";
}

areaBtn.addEventListener("click", calculateArea);
