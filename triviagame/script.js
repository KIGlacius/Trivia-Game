'use strict';

//..............................Selector variables....................................
const confirmContainer = document.querySelector('.confirm__container');
const container = document.querySelector('.container');
const containerIcon = document.querySelector('.container__icon');
const scoreNumEl = document.querySelector('.score__num');

const gokuIcon = document.querySelector('.goku__icon');
const gokuHoverBox = document.querySelector('.goku__hover');

const yoruichiIcon = document.querySelector('.yoruichi__icon');
const yoruichiHoverBox = document.querySelector('.yoruichi__hover');

const laxusIcon = document.querySelector('.laxus__icon');
const laxusHoverBox = document.querySelector('.laxus__hover');

// const startIcon = document.querySelector('.start__icon');
const scoreBox = document.querySelector('.score__box');
const icons = document.querySelectorAll('.icons');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close__window');
const btnStart = document.querySelector('.start');
const answerBox = document.querySelectorAll('.answer');
const restartBtn = document.querySelector('.restart');

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
  question: 'The founder of Fairy Tail is what to Laxus?',
  questionAnswers: [
    'His grandfather',
    'His father',
    'His brother',
    'His sister',
  ],
};

const questionLaxusThree = {
  question: 'The founder of Fairy Tail is what to Laxus?',
  questionAnswers: [
    'His grandfather',
    'His father',
    'His brother',
    'His sister',
  ],
};
//..............................Functions.............................................

const scoreCounter = function () {
  scoreNum--;
  scoreNumEl.textContent = scoreNum;
};
const restartGame = function () {
  location.reload();
};
const hideHoverBox = function () {
  // Hide character snippet
  gokuHoverBox.classList.add('hidden');
  yoruichiHoverBox.classList.add('hidden');
  laxusHoverBox.classList.add('hidden');
};

const generateConfirmWindow = function (charName, charSeries) {
  // Show confirm window
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

const generateLostWindow = function () {
  // Show lost window on game over
  return `<div class="confirm__window">
    <h1 class="confirm__selection">You lost!</h1>
    <button class="start">RETRY</button>
    </div>`;
};

const generateWonWindow = function () {
  return `<div class="confirm__window">
  <h1 class="confirm__selection">You won!</h1>
  <button class="start">Restart</button>
  </div>`;
};

const closeConfirmWindow = function () {
  // Close window and go back to main page
  overlay.classList.add('hidden');
  confirmContainer.innerHTML = '';
};

const changeIcon = function (charName, imgType) {
  containerIcon.innerHTML = `<img
  class="start__icon"
  type="image"
  src="/imgs/${charName}_${imgType}.png"
  alt="Start ${charName[0].toUpperCase() + charName.slice(1)}"
/>`;
};
const startGame = function (charName, charQuestions, questionNum, imgType) {
  // Start game and go to first question
  container.innerHTML = '';
  scoreBox.classList.remove('hidden');
  overlay.classList.add('hidden');
  changeIcon(charName, imgType);

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
for (const icon of icons) {
  // Event handler for character icons
  icon.addEventListener('mouseover', function (e) {
    // Show character snippet on hover
    if (e.target.alt === 'Goku') gokuHoverBox.classList.remove('hidden');
    if (e.target.alt === 'Yoruichi')
      yoruichiHoverBox.classList.remove('hidden');
    if (e.target.alt === 'Laxus') laxusHoverBox.classList.remove('hidden');
  });

  icon.addEventListener('mouseout', function () {
    // Hide character snippet on mouseout
    hideHoverBox();
  });

  icon.addEventListener('click', function (e) {
    // Show confirmation box on click
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

document.addEventListener('click', function (e) {
  console.log(e);
  // Close confirmation window
  if (
    e.target.className === 'overlay' ||
    e.target.className === 'close__window'
  ) {
    closeConfirmWindow();
  }

  //Begin game with Goku
  if (e.target.className === 'start Goku') {
    startGame('goku', questionGokuOne, 'One', 'base');
    gameStartedKey = 1;
  }

  if (e.target.defaultValue === 'Vegeta') {
    startGame('goku', questionGokuTwo, 'Two', 'right');
    html = `<p class='right__answer'>Alright! Onto the next question.</p>`;
    container.insertAdjacentHTML('afterbegin', html);
  } else if (e.target.defaultValue === 'Instant Transmission') {
    startGame('goku', questionGokuThree, 'Three', 'right');
    html = `<p class='right__answer'>Alright! Onto the next question.</p>`;
    container.insertAdjacentHTML('afterbegin', html);
  } else if (e.target.defaultValue === 'Fat Buu') {
    overlay.classList.remove('hidden');
    scoreBox.classList.add('hidden');
    containerIcon.innerHTML = '';
    container.innerHTML = generateWonWindow();
  } else if (gameStartedKey === 1 && e.target.classList.contains('answer')) {
    scoreCounter();
    changeIcon('goku', 'wrong');
    html = `<p class='right__answer'>Aww man. I guess you need to train more.</p>`;
    container.insertAdjacentHTML('afterbegin', html);
  }

  //Begin game with Yoruichi
  if (e.target.className === 'start Yoruichi') {
    startGame('yoruichi', questionYoruichiOne, 'One', 'base');
    gameStartedKey = 2;
  }

  if (e.target.defaultValue === 'Shunko') {
    startGame('yoruichi', questionYoruichiTwo, 'Two', 'right');
    html = `<p class='right__answer'>I guess you're fast after all!</p>`;
    container.insertAdjacentHTML('afterbegin', html);
  } else if (e.target.defaultValue === 'Goddess of Flash') {
    startGame('yoruichi', questionYoruichiThree, 'Three', 'right');
    html = `<p class='right__answer'>I guess you're fast after all!</p>`;
    container.insertAdjacentHTML('afterbegin', html);
  } else if (e.target.defaultValue === 'Shihoin') {
    overlay.classList.remove('hidden');
    scoreBox.classList.add('hidden');
    containerIcon.innerHTML = '';
    container.innerHTML = generateWonWindow();
  } else if (gameStartedKey === 2 && e.target.classList.contains('answer')) {
    scoreCounter();
    changeIcon('yoruichi', 'wrong');
    html = `<p class='right__answer'>Is that all you've got? I'm disappointed.</p>`;
    container.insertAdjacentHTML('afterbegin', html);
  }

  //Begin game with  Laxus
  if (e.target.className === 'start Laxus') {
    startGame('laxus', questionLaxusOne, 'One', 'base');
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

document.addEventListener('keydown', function (e) {
  // Close confirmation window
  if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
    closeConfirmWindow();
  }
});

//.................................refactoring with classes?................................

// class Character {
//   constructor(charName, charIcon, charHover) {
//     this.charName = charName;
//     this.charIcon = charIcon;
//     this.charHover = charHover;
//   }

//   hideHoverBox() {
//     this.charHover.classList.add('hidden');
//   }
// }
