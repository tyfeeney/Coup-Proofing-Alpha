const scenarios = [
  {
    question: 'You are facing economic difficulties. What do you do?',
    option1: 'Increase military spending to coup-proof your regime.',
    option2: 'Invest in social programs to address public grievances.',
    effect1: { stability: -1, coupRisk: -1 },
    effect2: { stability: 1, coupRisk: 1 }
  },
  // Add more scenarios as needed
];

const scenarioElem = document.querySelector('.statement');
const option1Btn = document.getElementById('left-btn');
const option2Btn = document.getElementById('right-btn');
const timerElem = document.getElementById('time');
const endingElem = document.getElementById('ending');

let currentIndex = 0;
let timeLeft = 300;
let stability = 0;
let coupRisk = 0;

function setScenario(index) {
  if (index >= scenarios.length) {
    showEnding();
    return;
  }
  scenarioElem.textContent = scenarios[index].question;
  option1Btn.textContent = scenarios[index].option1;
  option2Btn.textContent = scenarios[index].option2;
}

function chooseOption(option) {
  const scenario = scenarios[currentIndex];
  const effect = scenario[`effect${option}`];
  stability += effect.stability;
  coupRisk += effect.coupRisk;
  currentIndex++;
  setScenario(currentIndex);
}

function showEnding() {
  scenarioElem.remove();
  option1Btn.remove();
  option2Btn.remove();

  if (stability > 0 && coupRisk <= 0) {
    endingElem.textContent = 'Your country remains stable and avoids a coup.';
  } else if (stability <= 0 && coupRisk <= 0) {
    endingElem.textContent = 'Your country faces economic and political challenges but avoids a coup.';
  } else if (stability > 0 && coupRisk > 0) {
    endingElem.textContent = 'Your country experiences a coup despite relative stability.';
  } else {
    endingElem.textContent = 'Your country collapses due to instability and a coup.';
  }

  endingElem.hidden = false;
}

// Timer countdown
function startTimer() {
  const interval = setInterval(() => {
    timeLeft--;
    timerElem.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(interval);
      showEnding();
    }
  }, 1000);
}

// Initialize game
function init() {
  setScenario(currentIndex);
  startTimer();

  option1Btn.addEventListener('click', () => {
    chooseOption(1);
  });

  option2Btn.addEventListener('click', () => {
    chooseOption(2);
  });
}

init();
