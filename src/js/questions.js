export function runQuestion() {
  var qanda = [
    {
      question: "What is Mama's favorite color?",
      a: "blue",
      b: "green",
      c: "red",
      d: "blue",
      answer: "green"
    }
  ];

  var showQuestion = document.querySelector(".the-question");
  var showA = document.querySelector(".option-a");
  var showB = document.querySelector(".option-b");
  var showC = document.querySelector(".option-c");
  var showD = document.querySelector(".option-d");

  var currentQuestion = 0;
  var userAnswer;
  var theAnswer;
  var optionA;
  var optionB;
  var optionC;
  var optionD;

  var navi_out = new Audio('src/sounds/Navi_Out.wav')
  var get_item = new Audio('src/sounds/Get_Item.wav')

  console.log(`There are ${qanda.length} questions total`);

  runQuestion();

  function runQuestion() {
    theAnswer = qanda[currentQuestion].answer;
    optionA = qanda[currentQuestion].a;
    optionB = qanda[currentQuestion].b;
    optionC = qanda[currentQuestion].c;
    optionD = qanda[currentQuestion].d;

    showQuestion.innerHTML = qanda[currentQuestion].question;
    showA.innerHTML = optionA;
    showB.innerHTML = optionB;
    showC.innerHTML = optionC;
    showD.innerHTML = optionD;

    getUserAnswer();
  }

  function getUserAnswer() {
    const selectedA = document.querySelector(".answer-A");
    selectedA.addEventListener("change", () => {
      userAnswer = optionA;
      console.log(userAnswer);
      navi_out.currentTime = 0;
      navi_out.play();

    });

    const selectedB = document.querySelector(".answer-B");
    selectedB.addEventListener("change", () => {
      userAnswer = optionB;
      console.log(userAnswer);
      navi_out.currentTime = 0;
      navi_out.play();
    });

    const selectedC = document.querySelector(".answer-C");
    selectedC.addEventListener("change", () => {
      userAnswer = optionC;
      console.log(userAnswer);
      navi_out.currentTime = 0;
      navi_out.play();
    });

    const selectedD = document.querySelector(".answer-D");
    selectedD.addEventListener("change", () => {
      userAnswer = optionD;
      console.log(userAnswer);
      navi_out.currentTime = 0;
      navi_out.play();
    });
  }

  const answerResult = document.querySelector(".answer-result");

  function checkUserAnswer() {
    // console.log(userAnswer, theAnswer);
    if (theAnswer === userAnswer) {
      console.log("you got it!");
      answerResult.innerHTML = "YOU GOT IT!"
      get_item.play();

      console.log(qanda.length, "---", currentQuestion + 1)
      if (qanda.length > currentQuestion + 1) {
        currentQuestion++;
        runQuestion();
      } else {
        console.log("...Thats all the questions");
      }
    } else {
      console.log("sorry! that is not correct");
    }
  }

  ////submit answer

  const submitAnswer = document.querySelector(".submit-answer");


  submitAnswer.addEventListener("click", checkUserAnswer);
}