function shuffleQ1() {
    let q1Choices = ["1", "2", "3", "4"];
    q1Choices = shuffleArray(q1Choices);
    console.log(q1Choices);
    for (let i of q1Choices) {
        let inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = "q1";
        inputElement.value = i;
        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        labelElement.prepend(inputElement);
        document.querySelector("#q1Choices").append(labelElement);
    }
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let tryMessage = document.querySelector("#tryMessage");
let tryMessage2 = document.querySelector("#tryMessage2");
let tryMessage3 = document.querySelector("#tryMessage3");
let tryMessage4 = document.querySelector("#tryMessage4");
let tryMessage5 = document.querySelector("#tryMessage5");

let correctText = "Answer is correct!";
let incorrectText = "Answer is incorrect!";

let totalScoreText = document.querySelector("#totalScoreText")

let image1 = document.getElementById("image1");
image1.style.display = "none";
let image2 = document.getElementById("image2");
image2.style.display = "none";
let image3 = document.getElementById("image3");
image3.style.display = "none";
let image4 = document.getElementById("image4");
image4.style.display = "none";
let image5 = document.getElementById("image5");
image5.style.display = "none";

function gradeQuiz() {
    let totalScore = 0;

    let q1Answer = "1";
    let userAnswerQ1 = document.querySelector("input[name=q1]:checked");
    if (userAnswerQ1 && userAnswerQ1.value == q1Answer) {
        console.log("Q1 is Correct");
        document.querySelector("#question1").style.backgroundColor = "green";
        tryMessage.textContent = correctText;
        totalScore += 20;
        image1.src="images/images (1).png";
    }
    else {
        console.log("Q1 is Incorrect");
        document.querySelector("#question1").style.backgroundColor = "red";
        tryMessage.textContent = incorrectText;
        image1.src="images/images (10).jpg";
    }
    image1.style.display = "block";

    let q2Answer = "2";
    if (document.querySelector("#q2").value == q2Answer) {
        console.log("Q2 is Correct");
        document.querySelector("#question2").style.backgroundColor = "green";
        tryMessage2.textContent = correctText;
        totalScore += 20;
        image2.src="images/images (1).png";
    }
    else {
        console.log("Q2 is Incorrect");
        document.querySelector("#question2").style.backgroundColor = "red";
        tryMessage2.textContent = incorrectText;
        image2.src="images/images (10).jpg";
    }
    image2.style.display = "block";

    let q3Answer = "3"
    if (document.querySelector("#q3").value == q3Answer) {
        console.log("Q3 is Correct");
        document.querySelector("#question3").style.backgroundColor = "green";
        tryMessage3.textContent = correctText;
        totalScore += 20;
        image3.src="images/images (1).png";
    }
    else {
        console.log("Q3 is Incorrect");
        document.querySelector("#question3").style.backgroundColor = "red";
        tryMessage3.textContent = incorrectText;
        image3.src="images/images (10).jpg";
    }
    image3.style.display = "block";

    let q4Answer = "4";
    if (document.querySelector("#q4").value == q4Answer) {
        console.log("Q4 is Correct")
        document.querySelector("#question4").style.backgroundColor = "green";
        tryMessage4.textContent = correctText;
        totalScore += 20;
        image4.src="images/images (1).png";
    }
    else {
        console.log("Q4 is Incorrect");
        document.querySelector("#question4").style.backgroundColor = "red";
        tryMessage4.textContent = incorrectText;
        image4.src="images/images (10).jpg";
    }
    image4.style.display = "block";

    let q5Answer = "5";
    let userAnswerQ5 = document.querySelector("input[name=q5]:checked");
    if (userAnswerQ5 && userAnswerQ5.value == q5Answer) {
        console.log("Q5 is Correct");
        document.querySelector("#question5").style.backgroundColor = "green";
        tryMessage5.textContent = correctText;
        totalScore += 20;
        console.log(totalScore);
        image5.src="images/images (1).png";
    }
    else {
        console.log("Q5 is Incorrect");
        document.querySelector("#question5").style.backgroundColor = "red";
        tryMessage5.textContent = incorrectText;
        image5.src="images/images (10).jpg";
    }
    image5.style.display = "block";

    if(totalScore > 80){
        totalScoreText.textContent = "Congratulations! Your Score was Above 80! Total Score: " + totalScore;
    }
    else{
        totalScoreText.textContent = "Total Score: " + totalScore;
    }
}
shuffleQ1();
document.querySelector("button").addEventListener("click", gradeQuiz);

document.getElementById("demo").innerHTML = localStorage.clickcount;
function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
document.getElementById("demo").innerHTML = localStorage.clickcount;
}
