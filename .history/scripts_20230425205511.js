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

  const statementElem = document.querySelector('.statement');
  const leftBtn = document.getElementById('left-btn');
  const rightBtn = document.getElementById('right-btn');
  const timerElem = document.getElementById('time');
  const scoreElem = document.getElementById('score');
  const scoreContainer = document.querySelector('.score');
  
  let currentIndex = 0;
  let score = 0;
  let timeLeft = 300;
  
  function setStatement(index) {
    if (index >= statements.length) {
      gameOver();
      return;
    }
    statementElem.textContent = statements[index].text;
  }
  
  function checkAnswer(answer) {
    if (answer === statements[currentIndex].answer) {
      score++;
    }
    currentIndex++;
    setStatement(currentIndex);
  }
  
  function gameOver() {
    statementElem.remove();
    leftBtn.remove();
    rightBtn.remove();
    scoreElem.textContent = score;
    scoreContainer.hidden = false;
  }
  
// Timer countdown
function startTimer() {
    const interval = setInterval(() => {
      timeLeft--;
      timerElem.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(interval);
        gameOver();
      }
    }, 1000);
  }
  
  // Initialize game
  function init() {
    setStatement(currentIndex);
    startTimer();
  
    leftBtn.addEventListener('click', () => {
      checkAnswer(false);
    });
  
    rightBtn.addEventListener('click', () => {
      checkAnswer(true);
    });
  }
  
  init();
    