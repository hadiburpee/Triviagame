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
        question: "What is the question?",
        correctA: "Correct",
        incorrectA1: "Incorrect1",
        incorrectA2: "Incorrect2",
        incorrectA3: "Incorrect3"
    },

    question2 = {
        question: "What is the question?",
        correctA: "Correct",
        incorrectA1: "Incorrect1",
        incorrectA2: "Incorrect2",
        incorrectA3: "Incorrect3"
    },

    question3 = {
        question: "What is the question?",
        correctA: "Correct",
        incorrectA1: "Incorrect1",
        incorrectA2: "Incorrect2",
        incorrectA3: "Incorrect3"
    }
];





    console.log(questionStorage[0]);
    console.log(question3.correctA);
}); //Document Ready Bracket