const statements = [
  { text: 'Coup proofing is a strategy to prevent military coups.', answer: true },
  { text: 'Coup proofing involves weakening the military to reduce its capacity to stage a coup.', answer: true },
  { text: 'Middle Eastern states have never experienced military coups.', answer: false },
  { text: 'Leaders in the Middle East often rely on personalistic networks to maintain power.', answer: true },
  { text: 'Coup proofing may involve creating multiple competing security forces.', answer: true },
  { text: 'Coup proofing always results in more stable and democratic governments.', answer: false },
  { text: 'The use of patronage and loyalty networks is a common aspect of coup proofing.', answer: true },
  { text: 'All Middle Eastern states practice coup proofing to the same extent.', answer: false },
  { text: 'Hinnebusch argues that the Middle East is particularly prone to military coups.', answer: true },
  { text: 'Coup proofing in the Middle East never involves foreign support or intervention.', answer: false },
  { text: 'Coup proofing may lead to lower military effectiveness in external conflicts.', answer: true },
  { text: 'Coup-proofed regimes are always more stable than non-coup-proofed regimes.', answer: false },
  { text: 'Middle Eastern regimes may rely on minority groups for support in coup proofing efforts.', answer: true },
  { text: 'Coup proofing measures can negatively affect economic growth and development.', answer: true },
  { text: 'There are no negative consequences of coup proofing for regime stability.', answer: false },
  { text: 'Coup proofing often results in the centralization of power in the hands of the leader.', answer: true },
  { text: 'The Middle East has a higher rate of military coups compared to other regions.', answer: true },
  { text: 'External threats can sometimes justify coup proofing measures in the eyes of the public.', answer: true },
  { text: 'Coup proofing measures have no impact on civil-military relations.', answer: false },
  { text: 'Surveillance and intelligence networks are often used for coup proofing purposes.', answer: true },
  { text: 'Coup proofing always leads to better international relations for a country.', answer: false },
  { text: 'Coup proofing measures are always visible and easy to identify.', answer: false },
  { text: 'Coup proofing can involve promoting loyal officers over competent ones.', answer: true },
  { text: 'Coup proofing has no impact on the balance of power within a regime.', answer: false },
  { text: 'Coup proofing measures can sometimes backfire and lead to instability.', answer: true }
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
    