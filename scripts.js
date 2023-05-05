const scenarios = [
  {
    question: 'Your are preparing to take over as President from your father. How should you prepare for your transition?',
    option1: 'Market yourself towards political elites, young politicians, and buisness interests.',
    option2: 'Serve a military position first, and build your relationship to the military.',
    effect1: { appointment: -1, economic: 0, social: 0 },
    effect2: { appointment: 1, economic: 0, social: 0 },
    explanation: "As an heir to an authoritarian state, building a strong relationship to the military can help keep the military tied to the leader of the country"
  },
  {
    question: 'You are now President, and have the option to reshuffle your officers. How long should officers in your armed forces serve?',
    option1: 'A few years.',
    option2: 'Until they are no longer necessary, such as during a transfer of power.',
    effect1: { appointment: -2, economic: 0, social: 0 },
    effect2: { appointment: 2, economic: 0, social: 0 },
    explanation: "Officers should only be rotated at critical junctures. Rotating officers too frequently can lead to a generational divide between you and your officers."
  },
  {
    question: 'Some officers in your army are retiring. How will you place them post-military careers?',
    option1: 'Place officers in positions based their position in the military',
    option2: 'Hand pick officers for their new careers.',
    effect1: { appointment: 0, economic: -1, social: 0 },
    effect2: { appointment: 0, economic: 1, social: 0 },
    explanation: "Hand picking post-military career paths makes officers dependent on you for their career outside of the military."
  },
  {
    question: 'You face pressure to reward your officers. How should you reward them?',
    option1: 'Reward officers individually and informally.',
    option2: 'Let the military as an institution control a part of the economy',
    effect1: { appointment: 0, economic: 2, social: 0 },
    effect2: { appointment: 0, economic: -2, social: 0 },
    explanation: "Giving the military autonomous control of a part of the economy makes officers more independent of you. Instead, officers should need to rely on you for favors."
  },
  {
    question: 'You seek to promote some soldiers into new officers. How should you decide who is promoted?',
    option1: 'Promote based on ethnicity and religion.',
    option2: 'Promote only meritocratically.',
    effect1: { appointment: 0, economic: 0, social: 2 },
    effect2: { appointment: 0, economic: 0, social: -2 },
    explanation: "Selecting officers that align with your ethnicity and religion keeps them motivated to keep you in power, especially if you are in the minority."
  },
  {
    question: 'Soldiers are calling on you to diversify your imperial guard, which largely aligns with your religion. Do you diversify?',
    option1: 'No, keep the soldiers religiously aligned with you',
    option2: 'Yes, diversify the guard.',
    effect1: { appointment: 0, economic: 0, social: 1 },
    effect2: { appointment: 0, economic: 0, social: -1 },
    explanation: "Again, officers of your religious and ethnic background have more motivation to keep you in power personally."
  }, 
  {
    question: 'An uprising has started. How do you prevent mutanies and defections?',
    option1: 'Recruit more soldiers through rank-and-file (broad base) conscription',
    option2: 'Monitor stationed units, and dissolve those not loyal.',
    effect1: { appointment: 0, economic: 0, social: -2 },
    effect2: { appointment: 0, economic: 0, social: 2 },
    explanation: "In times of uprising, it is important to prevent disloyalty and solder defections."
  }
  /*
  {
    question: 'You are facing economic difficulties. What do you do?',
    option1: 'Increase military spending to coup-proof your regime.',
    option2: 'Invest in social programs to address public grievances.',
    effect1: { stability: -1, coupRisk: -1 },
    effect2: { stability: 1, coupRisk: 1 }
  },
  {
    question: 'There is a growing opposition movement. How do you respond?',
    option1: 'Crack down on dissent and arrest opposition leaders.',
    option2: 'Engage in dialogue and address their concerns.',
    effect1: { stability: -1, coupRisk: -1 },
    effect2: { stability: 1, coupRisk: 1 }
  },
  {
    question: 'A neighboring country is experiencing a military coup. What is your course of action?',
    option1: 'Increase surveillance and strengthen internal security forces.',
    option2: 'Offer diplomatic assistance to the neighboring country.',
    effect1: { stability: 0, coupRisk: -1 },
    effect2: { stability: 0, coupRisk: 1 }
  },
  {
    question: 'Corruption is rampant in your administration. How do you address it?',
    option1: 'Purge the government and replace corrupt officials with loyalists.',
    option2: 'Implement anti-corruption measures and strengthen rule of law.',
    effect1: { stability: 0, coupRisk: -1 },
    effect2: { stability: 1, coupRisk: 0 }
  },
  {
    question: 'Your military is demanding higher salaries and better equipment. What do you do?',
    option1: 'Meet their demands to maintain loyalty.',
    option2: 'Deny their demands, fearing they might pose a threat.',
    effect1: { stability: 0, coupRisk: -1 },
    effect2: { stability: -1, coupRisk: 1 }
  },
  {
    question: 'You have discovered a coup plot within your military. What is your reaction?',
    option1: 'Arrest the conspirators and replace them with loyalists.',
    option2: 'Engage in dialogue with the plotters to understand their grievances.',
    effect1: { stability: 1, coupRisk: -2 },
    effect2: { stability: 0, coupRisk: 0 }
  },
  {
    question: 'A terrorist organization is threatening your regime. How do you respond?',
    option1: 'Increase cooperation with the military to address the threat.',
    option2: 'Strengthen internal security forces to counter the threat.',
    effect1: { stability: 1, coupRisk: 1 },
    effect2: { stability: 1, coupRisk: -1 }
  },
  {
    question: 'Protests have erupted in a major city. What is your course of action?',
    option1: 'Deploy the military to suppress the protests.',
    option2: 'Address the protesters’ concerns through negotiation and reforms.',
    effect1: { stability: -1, coupRisk: 0 },
    effect2: { stability: 1, coupRisk: 0 }
  },
  {
    question: 'There is a power struggle within your ruling party. How do you handle it?',
    option1: 'Consolidate power by sidelining rivals and promoting loyalists.',
    option2: 'Encourage dialogue and compromise within the party.',
    effect1: { stability: 0, coupRisk: -1 },
    effect2: { stability: 1, coupRisk: 0 }
  },
  {
    question: 'Your regime is facing international pressure over human rights abuses. What do you do?',
    option1: 'Ignore the pressure and maintain strict control over the population.',
    option2: 'Implement reforms to improve the human rights situation.',
    effect1: { stability: -1, coupRisk: -1 },
    effect2: { stability: 1, coupRisk: 1 }
  },
  {
    question: 'Your intelligence service has uncovered a foreign plot to destabilize your regime. How do you respond?',
    option1: 'Increase internal security measures and target foreign agents.',
    option2: 'Strengthen diplomatic ties with allies to counter the foreign threat.',
    effect1: { stability: 1, coupRisk: -1 },
    effect2: { stability: 1, coupRisk: 0 }
  },
  {
    question: 'There is a risk of a popular uprising inspired by events in other countries. What is your reaction?',
    option1: 'Implement preemptive reforms to address public grievances.',
    option2: 'Strengthen security forces to suppress any potential uprisings.',
    effect1: { stability: 1, coupRisk: 1 },
    effect2: { stability: -1, coupRisk: -1 }
  },
  {
    question: 'Your country is experiencing an economic boom. How do you allocate resources?',
    option1: 'Invest in the military to secure your regime.',
    option2: 'Invest in infrastructure and public services to improve living standards.',
    effect1: { stability: 1, coupRisk: -1 },
    effect2: { stability: 2, coupRisk: 1 }
  },
  {
    question: 'A powerful general is becoming increasingly popular. What do you do?',
    option1: 'Promote the general to a higher position to secure their loyalty.',
    option2: 'Sideline the general to prevent them from becoming a threat.',
    effect1: { stability: 0, coupRisk: -1 },
    effect2: { stability: -1, coupRisk: 1 }
  },
  {
    question: 'Your country is involved in an international conflict. How do you ensure internal stability?',
    option1: 'Rally the population around the conflict and maintain strong military support.',
    option2: 'Focus on diplomatic solutions and address internal issues.',
    effect1: { stability: 1, coupRisk: 0 },
    effect2: { stability: 1, coupRisk: 1 }
  }
  */
];
const scenarioElem = document.querySelector('.statement');
const option1Btn = document.getElementById('left-btn');
const option2Btn = document.getElementById('right-btn');
const continueBtn = document.getElementById('continue-btn');
const startBtn = document.getElementById('start-btn')
const instructionsButton = document.getElementById('instructions-btn')
const timerElem = document.getElementById('time');
const endingElem = document.getElementById('ending');
var progressBars = {};
progressBars["appointment"] = 0;
progressBars["social"] = 0;
progressBars["economic"] = 0;
const barNames = Object.keys(progressBars);
let currentIndex = 0;
let timeLeft = 180;
let timedOut = 0;

function progressElementTransform(rawScore) {
    return 3 * rawScore + 15;
}

let interval;

function transitionToEnding(timedOut) {
  window.onbeforeunload = function(event) {
  };
  putSavedElements(false, timedOut);
  window.location.href = 'ending.html';
}

function updateProgressBars(effect) {
  for (let bar of barNames) {
      change = effect[bar];
      const progressElement = document.getElementById(bar + '-progress')
      const changeElement = document.getElementById(bar + '-change');
      progressBars[bar] += change;
      progressElement.value = progressElementTransform(progressBars[bar]);
      changeElement.textContent = change > 0 ? `+${change}` : change;
      changeElement.textContent = change == 0 ? "" : changeElement.textContent;
      changeElement.classList.toggle('increase', change > 0);
      changeElement.classList.toggle('decrease', change < 0);
      setTimeout(() => {
        changeElement.textContent = '';
      }, 2000);
  }
}

function chooseOption(option) {
  const scenario = scenarios[currentIndex];
  const effect = scenario[`effect${option}`];
  updateProgressBars(effect);
  showExplanation(currentIndex);
  currentIndex++;
}

function showExplanation(index) {
  option1Btn.style.display = "none";
  option2Btn.style.display = "none";
  continueBtn.style.display = "block";
  instructionsButton.style.display = "none";
  const scenario = scenarios[index];
  const statementElement = document.querySelector('.statement');
  statementElement.textContent = scenario.explanation;
  localStorage.setItem('timeLeft', timeLeft);
  clearInterval(interval);
}

// Timer countdown
function startTimer() {
  timerElem.textContent = timeLeft;
  interval = setInterval(() => {
    timeLeft--;
    timerElem.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(interval);
      transitionToEnding(1);
    }
  }, 1000);
}

function setScenario(index) {
  option1Btn.style.display = "block";
  option2Btn.style.display = "block";
  continueBtn.style.display = "none";
  instructionsButton.style.display = "block";

  if (index >= scenarios.length) {
    transitionToEnding(0);
    return;
  }
  const scenario = scenarios[index];
  const statementElement = document.querySelector('.statement');
  const leftButton = document.getElementById('left-btn');
  const rightButton = document.getElementById('right-btn');
  statementElement.textContent = scenario.question;
  leftButton.textContent = scenario.option1;
  rightButton.textContent = scenario.option2;
}

function getSavedElements() {
  timeString = localStorage.getItem('timeLeft');
  if (timeString != "NaN" && timeString != "null" && timeString != null) {
    timeLeft = parseInt(timeString);
  }
  progressBarsString = localStorage.getItem('progressBars')
  if (progressBarsString != "NaN" && progressBarsString != "null" && progressBarsString != null) {
    progressBars = JSON.parse(progressBarsString)
  }
  currentIndexString = localStorage.getItem('currentIndex')
  if (currentIndexString != "NaN" && currentIndexString != "null" && currentIndexString != null) {
    currentIndex = parseInt(currentIndexString);
  }
  timedOutString = localStorage.getItem('timedOut');
  if (timedOutString != "NaN" && timedOutString != "null" && timedOutString != null) {
    timedOut = parseInt(timedOutString);
  }
}

function putSavedElements(isEnd, timedOut = null) {
  if (!isEnd) {
    localStorage.setItem('timeLeft', timeLeft);
    localStorage.setItem('progressBars', JSON.stringify(progressBars));
    localStorage.setItem('currentIndex', currentIndex);
  } else {
    localStorage.clear();
  }
  localStorage.setItem('timedOut', timedOut);
}
// Initialize game
function init() {
  for (let bar of barNames) {
    const progressElement = document.getElementById(bar + '-progress')
    progressElement.value = progressElementTransform(progressBars[bar]);
  }
  setScenario(currentIndex);
  startTimer();

  continueBtn.style.display = "none";

  option1Btn.addEventListener('click', () => {
    chooseOption(1);
  });

  option2Btn.addEventListener('click', () => {
    chooseOption(2);
  });

  instructionsButton.addEventListener('click', () => {
    transitionToInstructions();
  });

  continueBtn.addEventListener('click' , () => {
    startTimer();
    setScenario(currentIndex);
  });
}

function transitionToInstructions() {
  window.onbeforeunload = function(event) {
  };
  putSavedElements(false);
  window.location.href = 'instructions.html'
}

function transitionToStart() {
  putSavedElements(true);
  window.location.href = 'index.html'
}

window.onbeforeunload = function(event) {
  putSavedElements(true);
};

getSavedElements();
if (window.location.pathname.includes('ending.html')) {
  const endingElement = document.getElementById('ending');
  const timeoutEndingElement = document.getElementById('ending-timeout');
  startBtn.addEventListener('click', () => {
    transitionToStart();
  })
  var timeoutMessage = ''
  var message = ''
  var sum = 0;
  for (let bar of barNames) {
    sum += progressBars[bar];
  }
  console.log(sum);

  if (timedOut) {
    timeoutMessage += "You ran out of time to complete all scenarios, but based on your progress so far:";
  }

  if (sum > 0) {
    message += 'Congratulations! Your have made decisions to keep your officers loyal to you, and you have coup-proofed your regime successfully.';
  } else if (sum == 0){
    message += 'Your have made coup-proofing decisions of mixed effectiveness.';
  } else {
    message += "You have not made decisions that will keep your officers loyal. Your coup-proofing is ineffective, risking your regime."
  }

  endingElement.textContent = message;
  timeoutEndingElement.textContent = timeoutMessage;
} else {
  init();
}