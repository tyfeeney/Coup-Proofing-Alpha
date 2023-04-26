const statements = [
  {
    scenario: "Egypt",
    questions: [
      { text: 'Egypt has a history of military coups.', answer: true },
      { text: 'Egypt successfully coup-proofed its regime during the 2011 Arab Spring.', answer: false },
      { text: 'The Egyptian military plays a significant role in the country\'s economy.', answer: true },
      // Add more Egypt-related questions as needed
    ],
    outcomes: {
      positive: 'Egypt managed to maintain stability.',
      negative: 'Egypt faced political turmoil and regime collapse.',
    },
  },
  {
    scenario: "Syria",
    questions: [
      { text: 'Syria has been successful in coup proofing its regime.', answer: true },
      { text: 'The Alawite minority plays a significant role in the Syrian military.', answer: true },
      { text: 'Syria\'s economy has not been affected by coup proofing measures.', answer: false },
      // Add more Syria-related questions as needed
    ],
    outcomes: {
      positive: 'Syria managed to maintain regime stability.',
      negative: 'Syria faced internal conflict and regime collapse.',
    },
  },
];

// Add your statements array here

let currentScenarioIndex = Math.floor(Math.random() * statements.length);
let currentQuestionIndex = 0;

function setStatement() {
  if (currentQuestionIndex >= statements[currentScenarioIndex].questions.length) {
    gameOver();
    return;
  }
  statementElem.textContent = statements[currentScenarioIndex].questions[currentQuestionIndex].text;
}

function checkAnswer(answer) {
  if (answer === statements[currentScenarioIndex].questions[currentQuestionIndex].answer) {
    score++;
  }
  currentQuestionIndex++;
  setStatement();
}

function gameOver() {
  statementElem.remove();
  leftBtn.remove();
  rightBtn.remove();
  scoreElem.textContent = score;

  const outcomeText = score >= (statements[currentScenarioIndex].questions.length / 2)
    ? statements[currentScenarioIndex].outcomes.positive
    : statements[currentScenarioIndex].outcomes.negative;

  const outcomeElem = document.createElement('div');
  outcomeElem.textContent = `Outcome: ${outcomeText}`;
  outcomeElem.style.marginTop = '20px';
  scoreContainer.parentElement.insertBefore(outcomeElem, scoreContainer);

  scoreContainer.hidden = false;
}

function init() {
  setStatement();

  leftBtn.addEventListener('click', () => {
    checkAnswer(false);
  });

  rightBtn.addEventListener('click', () => {
    checkAnswer(true);
  });
}

init();
