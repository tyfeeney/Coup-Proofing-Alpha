const statements = [
    { text: 'Coup proofing is a strategy to prevent military coups.', answer: true },
    // Add more statements as needed
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
    