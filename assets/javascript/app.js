//Pseudo Code
//Larger Issues
//1.  Storage of Questions - How to determine if question right or wrong, boolean?
//2.  Question Changer - Conditional if question is right or wrong
//3.  Timer for Questions - On 0, should change question and keep score
//4.  Score Keeper - Keep score for correct and incorrect answers


//Page load before javascript/jquery
$(document).ready(function(){

//Global Variables/Questions
var questionStorage = [
    question1 = {
        question: "Which studio made the Dark Souls series?",
        correctA: "From Software",
        incorrectA1: "Sony Interactive",
        incorrectA2: "Electronic Arts",
        incorrectA3: "Naughty Dog"
    },

    question2 = {
        question: "What year did Nintendo release the Switch console",
        correctA: "2017",
        incorrectA1: "2016",
        incorrectA2: "2018",
        incorrectA3: "2030"
    },

    question3 = {
        question: "What was the last Sega console released?",
        correctA: "Saturn",
        incorrectA1: "Dreamcast",
        incorrectA2: "Game Gear",
        incorrectA3: "Sega CD"
    }
];

var questionTime = 30;
    //Test reading from Array/Object
    console.log(questionStorage[0]);
    console.log(question3.correctA);

//Place timer function with setInterval in here
function timer(){
    setInterval(function(){
        questionTime = questionTime-1;
        $(".Timer").text(questionTime);

    }, 1000);


};

//Place question changer function in here
function questionChanger(){
    $(".Question").text(question3.question);
    $(".answer1").text(question3.correctA);
    $(".answer2").text(question3.incorrectA1);
    $(".answer3").text(question3.incorrectA2);
    $(".answer4").text(question3.incorrectA3);

};

function answerChooser(){

    


}


timer();
questionChanger();











}); //Document Ready Bracket