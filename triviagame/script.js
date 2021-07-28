'use strict';

//..............................Selector variables....................................
const confirmContainer = document.querySelector('.confirm__container');
const container = document.querySelector('.container');
const containerIcon = document.querySelector('.container__icon');
const scoreNumEl = document.querySelector('.score__num');
const iconAnswer = document.querySelector('.right__answer');
const gokuIcon = document.querySelector('.goku__icon');
const gokuHoverBox = document.querySelector('.goku__hover');
const yoruichiIcon = document.querySelector('.yoruichi__icon');
const yoruichiHoverBox = document.querySelector('.yoruichi__hover');
const laxusIcon = document.querySelector('.laxus__icon');
const laxusHoverBox = document.querySelector('.laxus__hover');
const scoreBox = document.querySelector('.score__box');
const icons = document.querySelectorAll('.icons');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close__window');
const btnStart = document.querySelector('.start');
const answerBox = document.querySelectorAll('.answer');
const restartBtn = document.querySelector('.restart');

// Misc variables

let body = document.body;
let html = '';
let scoreNum = 3;
let gameStartedKey = '';
//..............................Question bank........................................
const questionGokuOne = {
  question: 'What planet was Goku born on?',
  questionAnswers: ['Earth', 'Vegeta', 'Saiyan', 'Namek'],
};

const questionGokuTwo = {
  question: 'What technique can only Goku use?',
  questionAnswers: [
    'Instant Transmission',
    'Solar Flare',
    'Super Saiyan 3',
    'Kamehameha',
  ],
};

const questionGokuThree = {
  question: 'Which character did Goku first use Super Saiyan 3 against?',
  questionAnswers: ['Kid Buu', 'Fat Buu', 'Super Buu', 'Evil Buu'],
};

const questionYoruichiOne = {
  question: 'What technique did Yoruichi create?',
  questionAnswers: ['Sokatsui', 'Haien', 'Shunko', 'Raikoho'],
};

const questionYoruichiTwo = {
  question: 'Yoruichi is also known as?',
  questionAnswers: [
    'Black Cat',
    'Goddess of Flash',
    'Shunko Master',
    'Captain of Squad Two',
  ],
};

const questionYoruichiThree = {
  question: 'Yoruichi is from which noble clan?',
  questionAnswers: ['Shihoin', 'Shiba', 'Kuchiki', 'Omaeda'],
};

const questionLaxusOne = {
  question: 'The founder of Fairy Tail is what to Laxus?',
  questionAnswers: [
    'His grandfather',
    'His father',
    'His brother',
    'His sister',
  ],
};

const questionLaxusTwo = {
  question: "What is Laxus' power?",
  questionAnswers: ['Fire', 'Water', 'Lightning', 'Ice'],
};

const questionLaxusThree = {
  question: "Where is Laxus' guild mark location?",
  questionAnswers: ['His chest', 'His thigh', 'His abdomen', 'His arm'],
};
//..............................Functions.............................................
// Subtract score on wrong answer
const scoreCounter = function () {
  scoreNum--;
  scoreNumEl.textContent = scoreNum;
};

// Restart game
const restartGame = function () {
  location.reload();
};

// Hide character snippet
const hideHoverBox = function () {
  gokuHoverBox.classList.add('hidden');
  yoruichiHoverBox.classList.add('hidden');
  laxusHoverBox.classList.add('hidden');
};

// Show confirm window
const generateConfirmWindow = function (charName, charSeries) {
  return `<div class="confirm__window">
  <btn class="close__window">X</btn>
    <h1 class="confirm__selection">Confirm Selection</h1>
    <p class="confirm__paragraph">
      Your trivia questions will be based on ${charName} from the ${charSeries} series.
      Click start to begin the trivia game!
    </p>
    <button class="start ${charName}">Start</button>
    </div>`;
};

// Show lost window on game over
const generateLostWindow = function () {
  return `<div class="confirm__window">
    <h1 class="confirm__selection">You lost!</h1>
    <button class="start">RETRY</button>
    </div>`;
};
// Show won window on game win
const generateWonWindow = function () {
  return `<div class="confirm__window">
  <h1 class="confirm__selection">You won!</h1>
  <button class="start">Restart</button>
  </div>`;
};

// Close window and go back to main page
const closeConfirmWindow = function () {
  overlay.classList.add('hidden');
  confirmContainer.innerHTML = '';
};

// Change icon and icon text
const changeIcon = function (charName, imgType, iconStr) {
  containerIcon.innerHTML = `<img
  class="start__icon"
  type="image"
  src="/imgs/${charName}_${imgType}.png"
  alt="Start ${charName[0].toUpperCase() + charName.slice(1)}"
/>`;
  iconAnswer.classList.remove('hidden');
  iconAnswer.textContent = iconStr;
};

// Start game and go to first question
const startGame = function (charQuestions, questionNum) {
  container.innerHTML = '';
  scoreBox.classList.remove('hidden');
  overlay.classList.add('hidden');
  container.innerHTML = `<div>
  <span class='question__field'>
  <h1 class='question'>Question ${questionNum}
<p class='question__text'>${charQuestions.question}</p>
  </h1>
  </span>
  <div class='answer__field'>
<input class ='answer answer__one' type='button' value='${charQuestions.questionAnswers[0]}'>
<input class ='answer answer__two' type='button' value='${charQuestions.questionAnswers[1]}'>
<input class ='answer answer__three' type='button' value='${charQuestions.questionAnswers[2]}'>
<input class ='answer answer__four' type='button' value='${charQuestions.questionAnswers[3]}'>
  </div>
    <span class="restart">Restart</span>
</div>`;
};
//..................................Script............................................

// Event handler for character icons
for (const icon of icons) {
  // Show character snippet on hover
  icon.addEventListener('mouseover', function (e) {
    if (e.target.alt === 'Goku') gokuHoverBox.classList.remove('hidden');
    if (e.target.alt === 'Yoruichi')
      yoruichiHoverBox.classList.remove('hidden');
    if (e.target.alt === 'Laxus') laxusHoverBox.classList.remove('hidden');
  });
  // Hide character snippet on mouseout
  icon.addEventListener('mouseout', function () {
    hideHoverBox();
  });
  // Show confirmation box on click
  icon.addEventListener('click', function (e) {
    if (e.target.alt === 'Goku') {
      overlay.classList.remove('hidden');
      html = generateConfirmWindow('Goku', 'Dragon Ball');
      confirmContainer.insertAdjacentHTML('afterbegin', html);
    }
    if (e.target.alt === 'Yoruichi') {
      overlay.classList.remove('hidden');
      html = generateConfirmWindow('Yoruichi', 'Bleach');
      confirmContainer.insertAdjacentHTML('afterbegin', html);
    }

    if (e.target.alt === 'Laxus') {
      overlay.classList.remove('hidden');
      html = generateConfirmWindow('Laxus', 'Fairy Tail');
      confirmContainer.insertAdjacentHTML('afterbegin', html);
    }
  });
}

// Close confirmation window
document.addEventListener('click', function (e) {
  if (
    e.target.className === 'overlay' ||
    e.target.className === 'close__window'
  ) {
    closeConfirmWindow();
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
      closeConfirmWindow();
    }
  });

  //Begin game with Goku
  if (e.target.className === 'start Goku') {
    startGame(questionGokuOne, 'One');
    changeIcon('goku', 'base', "Let's start with an easy one.");
    gameStartedKey = 1;
  }
  // On right answer move to question 2 and change icon
  if (e.target.defaultValue === 'Vegeta') {
    startGame(questionGokuTwo, 'Two');
    changeIcon('goku', 'right', 'Alright! Onto the next question.');
    // On right answer move to question 3 and change icon
  } else if (e.target.defaultValue === 'Instant Transmission') {
    startGame(questionGokuThree, 'Three');
    changeIcon('goku', 'right', 'This is it. Show me what you got!');
    // On right answer win game and bring up window
  } else if (e.target.defaultValue === 'Fat Buu') {
    overlay.classList.remove('hidden');
    scoreBox.classList.add('hidden');
    iconAnswer.classList.add('hidden');
    containerIcon.innerHTML = '';
    container.innerHTML = generateWonWindow();
    // On wrong answer subtract score and change icon
  } else if (gameStartedKey === 1 && e.target.classList.contains('answer')) {
    scoreCounter();
    changeIcon('goku', 'wrong', 'Aww man. I guess you need to train more.');
  }

  //Begin game with Yoruichi
  if (e.target.className === 'start Yoruichi') {
    startGame(questionYoruichiOne, 'One');
    changeIcon('yoruichi', 'base', 'Show me what you got!');
    gameStartedKey = 2;
  }
  // On right answer move to question 2 and change icon
  if (e.target.defaultValue === 'Shunko') {
    startGame(questionYoruichiTwo, 'Two');
    changeIcon('yoruichi', 'right', "I guess you're pretty fast after all.");
    // On right answer move to question 3 and change icon
  } else if (e.target.defaultValue === 'Goddess of Flash') {
    startGame(questionYoruichiThree, 'Three');
    changeIcon(
      'yoruichi',
      'right',
      "You've got some skills, but this is the real test!"
    );
    // On right answer win game and bring up window
  } else if (e.target.defaultValue === 'Shihoin') {
    overlay.classList.remove('hidden');
    scoreBox.classList.add('hidden');
    iconAnswer.classList.add('hidden');
    containerIcon.innerHTML = '';
    container.innerHTML = generateWonWindow();
    // On wrong answer subtract score and change icon
  } else if (gameStartedKey === 2 && e.target.classList.contains('answer')) {
    scoreCounter();
    changeIcon(
      'yoruichi',
      'wrong',
      "Is that all you've got? I'm disappointed."
    );
  }

  //Begin game with Laxus
  if (e.target.className === 'start Laxus') {
    startGame(questionLaxusOne, 'One');
    changeIcon('laxus', 'base', "Don't disappoint me.");
    gameStartedKey = 3;
  }

  // On right answer move to question 2 and change icon
  if (e.target.defaultValue === 'His grandfather') {
    startGame(questionLaxusTwo, 'Two');
    changeIcon('laxus', 'base', 'Not bad');
    // On right answer move to question 3 and change icon
  } else if (e.target.defaultValue === 'Lightning') {
    startGame(questionLaxusThree, 'Three');
    changeIcon('laxus', 'base', "Don't celebrate just yet!");
    // On right answer win game and bring up window
  } else if (e.target.defaultValue === 'His abdomen') {
    overlay.classList.remove('hidden');
    scoreBox.classList.add('hidden');
    iconAnswer.classList.add('hidden');
    containerIcon.innerHTML = '';
    container.innerHTML = generateWonWindow();
    // On wrong answer subtract score and change icon
  } else if (gameStartedKey === 3 && e.target.classList.contains('answer')) {
    scoreCounter();
    changeIcon('laxus', 'wrong', 'You suck');
  }

  // Restart game
  if (e.target.className === 'restart' || e.target.className === 'start') {
    restartGame();
    scoreNum = 3;
  }

  // Game over
  if (scoreNum === 0) {
    overlay.classList.remove('hidden');
    scoreBox.classList.add('hidden');
    containerIcon.innerHTML = '';
    html = generateLostWindow();
    container.innerHTML = html;
  }
});
