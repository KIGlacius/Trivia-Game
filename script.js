import imgGokuBase from "/imgs/goku_base.png";
import imgGokuRight from "/imgs/goku_right.png";
import imgGokuWrong from "/imgs/goku_wrong.png";
import imgYoruichiBase from "/imgs/yoruichi_base.png";
import imgYoruichiRight from "/imgs/yoruichi_right.png";
import imgYoruichiWrong from "/imgs/yoruichi_wrong.png";
import imgLaxusBase from "/imgs/laxus_base.png";
import imgLaxusRight from "/imgs/laxus_right.png";
import imgLaxusWrong from "/imgs/laxus_wrong.png";
import imgVegetaBase from "/imgs/vegeta_base.png";
import imgVegetaRight from "/imgs/vegeta_right.png";
import imgVegetaWrong from "/imgs/vegeta_wrong.png";
import imgIchigoBase from "/imgs/ichigo_base.png";
import imgIchigoRight from "/imgs/ichigo_right.png";
import imgIchigoWrong from "/imgs/ichigo_wrong.png";
import imgSaitoBase from "/imgs/saito_base.png";
import imgSaitoRight from "/imgs/saito_right.png";
import imgSaitoWrong from "/imgs/saito_wrong.png";

//..............................Selector variables....................................
const confirmContainer = document.querySelector(".confirm__container");
const container = document.querySelector(".container");
const startIcon = document.querySelector(".container__icon");
const scoreNumEl = document.querySelector(".score__num");
const iconAnswer = document.querySelector(".right__answer");
const gokuIcon = document.querySelector(".goku__icon");
const gokuHoverBox = document.querySelector(".goku__hover");
const yoruichiIcon = document.querySelector(".yoruichi__icon");
const yoruichiHoverBox = document.querySelector(".yoruichi__hover");
const laxusIcon = document.querySelector(".laxus__icon");
const laxusHoverBox = document.querySelector(".laxus__hover");
const vegetaHoverBox = document.querySelector(".vegeta__hover");
const vegetaIcon = document.querySelector(".vegeta__icon");
const ichigoHoverBox = document.querySelector(".ichigo__hover");
const ichigoIcon = document.querySelector(".ichigo__icon");
const saitoHoverBox = document.querySelector(".saito__hover");
const saitoIcon = document.querySelector(".saito__icon");
const scoreBox = document.querySelector(".score__box");
const icons = document.querySelectorAll(".icons");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close__window");
const btnStart = document.querySelector(".start");
const answerBox = document.querySelectorAll(".answer");
const restartBtn = document.querySelector(".restart");

// Misc variables

let body = document.querySelector("body");
let html = "";
let scoreNum = 3;
let gameStartedKey = "";
//..............................Question bank........................................
const questionGokuOne = {
  question: "What planet was Goku born on?",
  questionAnswers: ["Earth", "Vegeta", "Saiyan", "Namek"],
};

const questionGokuTwo = {
  question: "What technique can only Goku use?",
  questionAnswers: [
    "Instant Transmission",
    "Solar Flare",
    "Super Saiyan 3",
    "Kamehameha",
  ],
};

const questionGokuThree = {
  question: "Which character did Goku first use Super Saiyan 3 against?",
  questionAnswers: ["Kid Buu", "Fat Buu", "Super Buu", "Evil Buu"],
};

const questionYoruichiOne = {
  question: "What technique did Yoruichi create?",
  questionAnswers: ["Sokatsui", "Haien", "Shunko", "Raikoho"],
};

const questionYoruichiTwo = {
  question: "Yoruichi is also known as?",
  questionAnswers: [
    "Black Cat",
    "Goddess of Flash",
    "Shunko Master",
    "Captain of Squad Two",
  ],
};

const questionYoruichiThree = {
  question: "Yoruichi is from which noble clan?",
  questionAnswers: ["Shihoin", "Shiba", "Kuchiki", "Omaeda"],
};

const questionLaxusOne = {
  question: "The founder of Fairy Tail is what to Laxus?",
  questionAnswers: [
    "His grandfather",
    "His father",
    "His brother",
    "His sister",
  ],
};

const questionLaxusTwo = {
  question: "What is Laxus' power?",
  questionAnswers: ["Fire", "Water", "Lightning", "Ice"],
};

const questionLaxusThree = {
  question: "Where is Laxus' guild mark location?",
  questionAnswers: ["His chest", "His thigh", "His abdomen", "His arm"],
};

const questionVegetaOne = {
  question:
    "Against which opponent did Vegeta use his signature move Final Flash?",
  questionAnswers: ["Frieza", "Cell", "Majin Buu", "Android 18"],
};

const questionVegetaTwo = {
  question: "Why did Vegeta attack Beerus after Beerus first arrived on Earth?",
  questionAnswers: [
    "Beerus threatened Earth",
    "Vegeta wanted to fight",
    "Beerus slapped Bulma",
    "Beerus is a joke character",
  ],
};

const questionVegetaThree = {
  question: "Why did Vegeta lose to Frost?",
  questionAnswers: [
    "Frost was stronger",
    "Frost cheated",
    "Vegeta was arrogant",
    "Someone intervened",
  ],
};

const questionIchigoOne = {
  question: "What is the name of Ichigo's bankai?",
  questionAnswers: [
    "Senbonzakura Kageyoshi",
    "Daiguren Hyorinmaru",
    "Tensa Zangetsu",
    "Jakuho Raikoben",
  ],
};

const questionIchigoTwo = {
  question: "Who is Ichigo's wife?",
  questionAnswers: [
    "Rukia Kuchiki",
    "Orihime Inoue",
    "Neliel Tu Odershvank",
    "Soi Fon",
  ],
};

const questionIchigoThree = {
  question: "What is the source of Ichigo's power?",
  questionAnswers: ["Shinigami", "Hollow", "Quincy", "All of the above"],
};

const questionSaitoOne = {
  question: "What pro-shogunate force is Saito a member of?",
  questionAnswers: [
    "Shinsengumi",
    "Chosu rebels",
    "Satsuma domain",
    "Tosa domain",
  ],
};

const questionSaitoTwo = {
  question: "What is Saito known as?",
  questionAnswers: [
    "The bear of Japan",
    "The wolf of Mibu",
    "The flying swordsman",
    "The claw",
  ],
};

const questionSaitoThree = {
  question: "What name did Saito choose after going into hiding?",
  questionAnswers: [
    "Akechi Goro",
    "Mishima Eiji",
    "Fujita Goro",
    "Sagara Sanosuke",
  ],
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
  gokuHoverBox.style.visibility = "hidden";
  yoruichiHoverBox.style.visibility = "hidden";
  laxusHoverBox.style.visibility = "hidden";
  vegetaHoverBox.style.visibility = "hidden";
  ichigoHoverBox.style.visibility = "hidden";
  saitoHoverBox.style.visibility = "hidden";
};

// Show confirm window
const generateConfirmWindow = function (charName, charSeries) {
  return `<div class="confirm__window">
  <btn class="close__window">X</btn>
    <h1 class="confirm__selection">Confirm Selection</h1>
    <p class="confirm__paragraph">
      Your trivia questions will be based on <strong class='highlight'>${charName}</strong> from the <strong class='highlight'>${charSeries}</strong> series.
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
  overlay.classList.add("hidden");
  confirmContainer.innerHTML = "";
};

// Change icon and icon text
const changeIcon = function (charName, imgType, iconStr, charImg) {
  startIcon.innerHTML = `<img
  class="icon start__icon"
  type="image"
  src="${charImg}"
  alt="Start ${charName[0].toUpperCase() + charName.slice(1)}"
/>`;
  iconAnswer.classList.remove("hidden");
  iconAnswer.textContent = iconStr;
};

// Start game and go to first question
const startGame = function (charQuestions, questionNum) {
  container.innerHTML = "";
  scoreBox.style.visibility = "visible";
  overlay.classList.add("hidden");
  container.innerHTML = `<div class='game'>
  <span class="restart">Restart</span>
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
`;
};
//..................................Script............................................

// Event handler for character icons
for (const icon of icons) {
  // Show character snippet on hover
  icon.addEventListener("mouseover", function (e) {
    if (e.target.alt === "Goku") gokuHoverBox.style.visibility = "visible";
    if (e.target.alt === "Yoruichi")
      yoruichiHoverBox.style.visibility = "visible";
    if (e.target.alt === "Laxus") laxusHoverBox.style.visibility = "visible";
    if (e.target.alt === "Vegeta") vegetaHoverBox.style.visibility = "visible";
    if (e.target.alt === "Ichigo") ichigoHoverBox.style.visibility = "visible";
    if (e.target.alt === "Saito") saitoHoverBox.style.visibility = "visible";
  });
  // Hide character snippet on mouseout
  icon.addEventListener("mouseout", function () {
    hideHoverBox();
  });
  // Show confirmation box on click
  icon.addEventListener("click", function (e) {
    if (e.target.alt === "Goku") {
      overlay.classList.remove("hidden");
      html = generateConfirmWindow("Goku", "Dragon Ball");
      confirmContainer.insertAdjacentHTML("afterbegin", html);
    }
    if (e.target.alt === "Yoruichi") {
      overlay.classList.remove("hidden");
      html = generateConfirmWindow("Yoruichi", "Bleach");
      confirmContainer.insertAdjacentHTML("afterbegin", html);
    }

    if (e.target.alt === "Laxus") {
      overlay.classList.remove("hidden");
      html = generateConfirmWindow("Laxus", "Fairy Tail");
      confirmContainer.insertAdjacentHTML("afterbegin", html);
    }

    if (e.target.alt === "Vegeta") {
      overlay.classList.remove("hidden");
      html = generateConfirmWindow("Vegeta", "Dragon Ball");
      confirmContainer.insertAdjacentHTML("afterbegin", html);
    }
    if (e.target.alt === "Ichigo") {
      overlay.classList.remove("hidden");
      html = generateConfirmWindow("Ichigo", "Bleach");
      confirmContainer.insertAdjacentHTML("afterbegin", html);
    }
    if (e.target.alt === "Saito") {
      overlay.classList.remove("hidden");
      html = generateConfirmWindow("Saito", "Rurouni Kenshin");
      confirmContainer.insertAdjacentHTML("afterbegin", html);
    }
  });
}

// Close confirmation window
document.addEventListener("click", function (e) {
  if (
    e.target.className === "overlay" ||
    e.target.className === "close__window"
  ) {
    closeConfirmWindow();
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.classList.contains("hidden")) {
      closeConfirmWindow();
    }
  });

  //Begin game with Goku
  if (e.target.className === "start Goku") {
    closeConfirmWindow();
    startGame(questionGokuOne, "One");
    changeIcon("goku", "base", "Let's start with an easy one.", imgGokuBase);
    gameStartedKey = 1;
  }
  // On right answer move to question 2 and change icon
  if (e.target.defaultValue === "Vegeta") {
    startGame(questionGokuTwo, "Two");
    changeIcon(
      "goku",
      "right",
      "Alright! Onto the next question.",
      imgGokuRight
    );
    // On right answer move to question 3 and change icon
  } else if (e.target.defaultValue === "Instant Transmission") {
    startGame(questionGokuThree, "Three");
    changeIcon(
      "goku",
      "right",
      "This is it. Show me what you got!",
      imgGokuRight
    );
    // On right answer win game and bring up window
  } else if (e.target.defaultValue === "Fat Buu") {
    overlay.classList.remove("hidden");
    scoreBox.style.visibility = "hidden";
    iconAnswer.classList.add("hidden");
    startIcon.innerHTML = "";
    container.innerHTML = generateWonWindow();
    // On wrong answer subtract score and change icon
  } else if (gameStartedKey === 1 && e.target.classList.contains("answer")) {
    scoreCounter();
    changeIcon(
      "goku",
      "wrong",
      "Aww man. I guess you need to train more.",
      imgGokuWrong
    );
  }

  //Begin game with Yoruichi
  if (e.target.className === "start Yoruichi") {
    closeConfirmWindow();
    startGame(questionYoruichiOne, "One");
    changeIcon("yoruichi", "base", "Show me what you got!", imgYoruichiBase);
    gameStartedKey = 2;
  }
  // On right answer move to question 2 and change icon
  if (e.target.defaultValue === "Shunko") {
    startGame(questionYoruichiTwo, "Two");
    changeIcon(
      "yoruichi",
      "right",
      "I guess you're pretty fast after all.",
      imgYoruichiRight
    );
    // On right answer move to question 3 and change icon
  } else if (e.target.defaultValue === "Goddess of Flash") {
    startGame(questionYoruichiThree, "Three");
    changeIcon(
      "yoruichi",
      "right",
      "You've got some skills, but this is the real test!",
      imgYoruichiRight
    );
    // On right answer win game and bring up window
  } else if (e.target.defaultValue === "Shihoin") {
    overlay.classList.remove("hidden");
    scoreBox.style.visibility = "hidden";
    iconAnswer.classList.add("hidden");
    startIcon.innerHTML = "";
    container.innerHTML = generateWonWindow();
    // On wrong answer subtract score and change icon
  } else if (gameStartedKey === 2 && e.target.classList.contains("answer")) {
    scoreCounter();
    changeIcon(
      "yoruichi",
      "wrong",
      "Is that all you've got? I'm disappointed.",
      imgYoruichiWrong
    );
  }

  //Begin game with Laxus
  if (e.target.className === "start Laxus") {
    closeConfirmWindow();
    startGame(questionLaxusOne, "One");
    changeIcon("laxus", "base", "Don't disappoint me.", imgLaxusBase);
    gameStartedKey = 3;
  }

  // On right answer move to question 2 and change icon
  if (e.target.defaultValue === "His grandfather") {
    startGame(questionLaxusTwo, "Two");
    changeIcon("laxus", "base", "Not bad.", imgLaxusRight);
    // On right answer move to question 3 and change icon
  } else if (e.target.defaultValue === "Lightning") {
    startGame(questionLaxusThree, "Three");
    changeIcon("laxus", "base", "Don't celebrate just yet!", imgLaxusRight);
    // On right answer win game and bring up window
  } else if (e.target.defaultValue === "His abdomen") {
    overlay.classList.remove("hidden");
    scoreBox.style.visibility = "hidden";
    iconAnswer.classList.add("hidden");
    startIcon.innerHTML = "";
    container.innerHTML = generateWonWindow();
    // On wrong answer subtract score and change icon
  } else if (gameStartedKey === 3 && e.target.classList.contains("answer")) {
    scoreCounter();
    changeIcon("laxus", "wrong", "You suck.", imgLaxusWrong);
  }

  //Begin game with Vegeta
  if (e.target.className === "start Vegeta") {
    closeConfirmWindow();
    startGame(questionVegetaOne, "One");
    changeIcon("vegeta", "base", "Prove your worth to me.", imgVegetaBase);
    gameStartedKey = 4;
  }
  // On right answer move to question 2 and change icon
  if (e.target.defaultValue === "Cell") {
    startGame(questionVegetaTwo, "Two");
    changeIcon("vegeta", "right", "So you think you've won?", imgVegetaRight);
    // On right answer move to question 3 and change icon
  } else if (e.target.defaultValue === "Beerus slapped Bulma") {
    startGame(questionVegetaThree, "Three");
    changeIcon("vegeta", "right", "Show me your true power!", imgVegetaRight);
    // On right answer win game and bring up window
  } else if (e.target.defaultValue === "Frost cheated") {
    overlay.classList.remove("hidden");
    scoreBox.style.visibility = "hidden";
    iconAnswer.classList.add("hidden");
    startIcon.innerHTML = "";
    container.innerHTML = generateWonWindow();
    // On wrong answer subtract score and change icon
  } else if (gameStartedKey === 4 && e.target.classList.contains("answer")) {
    scoreCounter();
    changeIcon("vegeta", "wrong", "Pathetic.", imgVegetaWrong);
  }
  //Begin game with Ichigo
  if (e.target.className === "start Ichigo") {
    closeConfirmWindow();
    startGame(questionIchigoOne, "One");
    changeIcon(
      "ichigo",
      "base",
      "I'll take it easy on you for now.",
      imgIchigoBase
    );
    gameStartedKey = 5;
  }
  // On right answer move to question 2 and change icon
  if (e.target.defaultValue === "Tensa Zangetsu") {
    startGame(questionIchigoTwo, "Two");
    changeIcon(
      "ichigo",
      "right",
      "You might even make me use bankai!",
      imgIchigoRight
    );
    // On right answer move to question 3 and change icon
  } else if (e.target.defaultValue === "Orihime Inoue") {
    imgIchigoRight;
    startGame(questionIchigoThree, "Three");
    changeIcon(
      "ichigo",
      "right",
      "Whoa. I didn't know this was your true power!",
      imgIchigoRight
    );
    // On right answer win game and bring up window
  } else if (e.target.defaultValue === "All of the above") {
    overlay.classList.remove("hidden");
    scoreBox.style.visibility = "hidden";
    iconAnswer.classList.add("hidden");
    startIcon.innerHTML = "";
    container.innerHTML = generateWonWindow();
    // On wrong answer subtract score and change icon
  } else if (gameStartedKey === 5 && e.target.classList.contains("answer")) {
    scoreCounter();
    changeIcon(
      "ichigo",
      "wrong",
      "I thought you were stronger.",
      imgIchigoWrong
    );
  }

  //Begin game with Saito
  if (e.target.className === "start Saito") {
    closeConfirmWindow();
    startGame(questionSaitoOne, "One");
    changeIcon("saito", "base", "I'm coming for you.", imgSaitoBase);
    gameStartedKey = 6;
  }
  // On right answer move to question 2 and change icon
  if (e.target.defaultValue === "Shinsengumi") {
    startGame(questionSaitoTwo, "Two");
    changeIcon("saito", "right", "You fight well.", imgSaitoRight);
    // On right answer move to question 3 and change icon
  } else if (e.target.defaultValue === "The wolf of Mibu") {
    startGame(questionSaitoThree, "Three");
    changeIcon("saito", "right", "This isn't over just yet.", imgSaitoRight);
    // On right answer win game and bring up window
  } else if (e.target.defaultValue === "Fujita Goro") {
    overlay.classList.remove("hidden");
    scoreBox.style.visibility = "hidden";
    iconAnswer.classList.add("hidden");
    startIcon.innerHTML = "";
    container.innerHTML = generateWonWindow();
    // On wrong answer subtract score and change icon
  } else if (gameStartedKey === 6 && e.target.classList.contains("answer")) {
    scoreCounter();
    changeIcon("saito", "wrong", "I'll kill you now.", imgSaitoWrong);
  }

  // Restart game
  if (e.target.className === "restart" || e.target.className === "start") {
    restartGame();
    scoreNum = 3;
  }

  // Game over
  if (scoreNum === 0) {
    overlay.classList.remove("hidden");
    scoreBox.style.visibility = "hidden";
    startIcon.innerHTML = "";
    iconAnswer.innerHTML = "";
    html = generateLostWindow();
    container.innerHTML = html;
  }
});
