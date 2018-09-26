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
    {
        question: "Which studio made the Dark Souls series?",
        correctA: "From Software",
        incorrectA1: "Sony Interactive",
        incorrectA2: "Electronic Arts",
        incorrectA3: "Naughty Dog"
    },

    {
        question: "What year did Nintendo release the Switch console",
        correctA: "2017",
        incorrectA1: "2016",
        incorrectA2: "2018",
        incorrectA3: "2030"
    },

    {
        question: "What was the last Sega console released?",
        correctA: "Saturn",
        incorrectA1: "Dreamcast",
        incorrectA2: "Game Gear",
        incorrectA3: "Sega CD"
    }
];

var playerChoice;
var questionTime = 30;
var questionChosen = false;  
var win = false;  
var wins = 0;
var loss = 0;
var counter = 0;

//Test reading from Array/Object
    console.log(questionStorage[0].correctA);

function reset(){
    $(".Quiz").empty();
    $(".Timer").text("30");
    questionChosen = false;
    questionTime = 30;
    questionChanger();
    if(counter == questionStorage.length-1){
        counter = 0;
        reset();
    }
};



//Place timer function with setInterval in here
function timer(){
    setInterval(function(){
        questionTime = questionTime-1;
        $(".Timer").text(questionTime);
        console.log(questionTime);
        if(questionTime === 0){
            win = false;
            scoreKeeper();           
            counter++; 
            reset();

            
    }
    }, 1000);



};

//Place question changer function in here
function questionChanger(){
    
    //STores correct answer syntax for conditional later
    var crAns = $("<p class='answer' value='correct'>");

    //Stores the correct answer

    if(questionChosen == false){
            crAns.text(questionStorage[counter].correctA);

            //Displays incorrect answers
            $(".Quiz").append("<p class='answer'>" + questionStorage[counter].incorrectA1 + "</p>" 
            + "<p class='answer'>" + questionStorage[counter].incorrectA2 + "</p>" 
            + "<p class='answer'>" + questionStorage[counter].incorrectA3 + "</p>");

            //Appends Correct Answer
            $(".Quiz").append(crAns);

            //Adds Question
            $(".Question").text(questionStorage[counter].question);
            questionChosen = true;
    }
    
 
}; 

function scoreKeeper(){
    if(win == true){
        wins = wins + 1;
        $(".win").text("Wins: " + wins);
    }
    else{
        loss = loss + 1;
        $(".loss").text("Loss: " + loss);
    }

}

$('body').on('click', '.answer', function(){

    playerChoice = $(this).attr("value");
    console.log(playerChoice);

    if(playerChoice=="correct"){
        //add one point to win
        //choose next question
        win = true;
        scoreKeeper();
        counter++
        reset();
        
    }
    else{
        win = false;
        scoreKeeper();
        counter++;
        reset();
        //add one point to loss
        //choose next question
    }

});


timer();
questionChanger();











}); //Document Ready Bracket