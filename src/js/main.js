import { runQuestion } from '/src/js/questions.js'

runQuestion()

const formButton = document.querySelector(".form-button");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var colorSet = "#026012";

function triangles() {
  var theColors = ["#282829", colorSet, "#706d26", "#white"];
  var randomColor = parseInt(Math.random() * (theColors.length - 1));
  var lineColor = theColors[randomColor];
  // console.log(randomColor)
  for (var i = 0; i < 5; i++) {
    var moveO = Math.random() * window.innerWidth;
    var moveT = Math.random() * window.height;
    var moveTh = Math.random() * canvas.width;
    var moveF = Math.random() * canvas.height;

    ctx.beginPath();
    ctx.strokeStyle = lineColor;
    ctx.moveTo(moveO, moveF);
    ctx.lineTo(moveT, moveTh);
    ctx.lineTo(moveTh, moveTh);
    ctx.lineTo(moveF, moveO);
    ctx.stroke();
    lineColor += 1;
  }
  var meow = window.requestAnimationFrame(triangles);

  setTimeout(() => {
    window.cancelAnimationFrame(meow);
  }, 5000);
}

triangles();

canvas.addEventListener("click", () => {
  ///PLAY ON CANVAS CLICK///

  // pauseAllMusic(); -------------------------------------> mute ALL on canvas click

  ///PLAY ON CANVAS CLICK///

  ctx.clearRect(0, 0, innerWidth + 1000, innerHeight + 1000);

  let meow = window.requestAnimationFrame(triangles);
});

function colorSelector() {
  const colorSelector = document.querySelector(".magic");

  colorSelector.addEventListener("input", (e) => {
    colorSet = e.target.value;
    console.log(colorSet);
  });
}

colorSelector();

/////// MUSIC ////////

const zeldaTheme = document.querySelector("#zelda-music");
const zeldaRescue = document.querySelector("#zelda-rescue");
const zeldaLook = document.querySelector("#zelda-look");
const canvasTune = document.querySelector("#canvas-tune");
const introTune = document.querySelector("#intro-tune");
const fairyOut = document.querySelector("#fairy-out");

function playIntro() {
  introTune.currentTime = 20;
  introTune.play();
  zeldaLook.pause();
  zeldaLook.currentTime = 0;
  zeldaRescue.pause();
  zeldaRescue.currentTime = 0;
  zeldaTheme.pause();
  zeldaTheme.currentTime = 0;
  canvasTune.pause();
  canvasTune.currentTime = 0;
}

function playTune() {
  zeldaTheme.play();
  introTune.pause();
  introTune.currentTime = 20;
  zeldaRescue.pause();
  zeldaRescue.currentTime = 0;
  zeldaLook.pause();
  zeldaLook.currentTime = 0;
}

function playAboutTune() {
  zeldaRescue.play();
  introTune.pause();
  introTune.currentTime = 20;
  zeldaTheme.pause();
  zeldaTheme.currentTime = 0;
  zeldaLook.pause();
  zeldaLook.currentTime = 0;
  canvasTune.pause();
  canvasTune.currentTime = 0;
}

function playLookTune() {
  zeldaLook.play();
  introTune.pause();
  introTune.currentTime = 20;
  zeldaRescue.pause();
  zeldaRescue.currentTime = 0;
  zeldaTheme.pause();
  zeldaTheme.currentTime = 0;
  canvasTune.pause();
  canvasTune.currentTime = 0;
}

function playCanvasTune() {
  canvasTune.play();
  introTune.pause();
  introTune.currentTime = 20;
  zeldaLook.pause();
  zeldaLook.currentTime = 0;
  zeldaRescue.pause();
  zeldaRescue.currentTime = 0;
  zeldaTheme.pause();
  zeldaTheme.currentTime = 0;
}

function pauseAllMusic() {
  introTune.pause();
  introTune.currentTime = 20;
  zeldaLook.pause();
  zeldaLook.currentTime = 0;
  zeldaRescue.pause();
  zeldaRescue.currentTime = 0;
  zeldaTheme.pause();
  zeldaTheme.currentTime = 0;

  canvasTune.pause();
  canvasTune.currentTime = 0;
}

///FORM////

const cover = document.querySelector(".cover");
const triforce = document.querySelector(".triforce");
const zeldaLogo = document.querySelector(".meow");
const titleLogo = document.querySelector(".title");

formButton.addEventListener("click", () => {
  cover.style = "animation: closeMain 2s ease-out forwards; ";

  setTimeout(() => {
    cover.style = "display:none;";
  }, 1950);
  triforce.style = "animation: fadeOutTriforce 7s linear forwards;";
  zeldaLogo.style = "animation: fadeInTriforce 7s ease-in forwards;";
  titleLogo.style =
    "animation: fadeInTitle 4s ease-in forwards; animation-delay: 3s";
  playIntro();
});

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const lineOne = document.querySelector(".line-one");
const lineTwo = document.querySelector(".line-two");
const lineThree = document.querySelector(".line-three");

var menuStatus = true;

menuButton.addEventListener("click", () => {
  if (menuStatus !== false) {
    // console.log("false");
    lineOne.classList = "line-one-active";
    lineTwo.classList = "line-two-active";
    lineThree.classList = "line-three-active";
    menu.style = "opacity: 1; display: flex; z-index: 6";

    menuStatus = false;
    console.log(lineOne.classList);
  } else {
    console.log("true");
    lineOne.classList = "line-one";
    lineTwo.classList = "line-two";
    lineThree.classList = "line-three";
    menu.style = "opacity: 0; display: none";
    menuStatus = true;
  }
});

const aboutButton = document.querySelector(".about");
const mainSection = document.querySelector(".section");

aboutButton.addEventListener("click", () => {
  console.log("ABOUT CLICKED");
  lineOne.classList = "line-one";
  lineTwo.classList = "line-two";
  lineThree.classList = "line-three";
  menu.style = "opacity: 0;";
  menuStatus = true;
  ctx.background = "red";
  playLookTune();
});

const newsButton = document.querySelector(".more");

newsButton.addEventListener("click", () => {
  console.log("NEWS - CLICKED");
  menu.style = "opacity: 0;";
  lineOne.classList = "line-one";
  lineTwo.classList = "line-two";
  lineThree.classList = "line-three";
  menu.style = "opacity: 0;";
  menuStatus = true;
  playCanvasTune();
});

///////////////////////////////////////////////////////////////////////
const body = document.querySelector('body')


///////////////////////////FORM////////////////////////////////////////
const formTitle = document.querySelector('.form-title')

const getUserData = JSON.parse(localStorage.getItem("userData"));
console.log(getUserData, "----", getUserData);
const nameInput = document.querySelector(".form-input-name");
const ageInput = document.querySelector(".form-input-age");
const colorInput = document.querySelector(".form-input-color");
const fullHearts = 3;
const firstRuby = 10;

function checkUserData() {


  console.log("------>>->>LOOK HERE", getUserData);
  if (getUserData === null) {

    // body.style = `height:${newForm};`
    console.log("You need to sign up!");
    formTitle.innerHTML = "Sign Up!"
    newUserForm();
    colorSet = colorInput;

  } else {

    var scanData = getUserData.length - 1;
    var name = getUserData[scanData].name;
    var age = getUserData[scanData].age;
    var color = getUserData[scanData].color;
    var hearts = getUserData[scanData].hearts;
    var rubies = getUserData[scanData].rubies;

    console.log("Welcome back!!");
    formTitle.innerHTML = `Hey, ${name}!`
    colorSet = color;

    /// returnUser()
    newUserForm();

    var userData = { name, age, color, hearts, rubies };
    return userData;
  }
}

const currentUserData = checkUserData();

function newUserForm() {

  formButton.addEventListener("click", () => {
    const newUser = {
      name: nameInput.value,
      age: parseInt(ageInput.value),
      color: colorInput.value,
      hearts: fullHearts,
      rubies: firstRuby
    };
    if (getUserData !== null) {
      getUserData.push(newUser);

      var updatedUserData = JSON.stringify(getUserData);
    } else {
      var firstUser = [];
      firstUser.push(newUser);

      var updatedUserData = JSON.stringify(firstUser);
    }

    localStorage.setItem("userData", updatedUserData);

    console.log(JSON.parse(localStorage.getItem("userData")));
  });
}
