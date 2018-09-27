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
        question: "What year did Nintendo release the Switch console?",
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
    },

    {
        question: "What is Nintendo's most famous franchise?",
        correctA: "Mario",
        incorrectA1: "Megaman",
        incorrectA2: "Zelda",
        incorrectA3: "Super Smash"
    },

    {
        question: "In Final Fantasy VII, what is the name of the main character?",
        correctA: "Cloud",
        incorrectA1: "Tifa",
        incorrectA2: "Sephiroth",
        incorrectA3: "Barrett"
    },

    {
        question: "How many zones are available to explore in Hyperlightdrifter?",
        correctA: "4",
        incorrectA1: "5",
        incorrectA2: "6",
        incorrectA3: "2"
    }

];

var playerChoice;
var questionTime = 30;
var questionChosen = false;  
var win = false;  
var wins = 0;
var loss = -1;
var counter = 0;
var gameStart = false;

//reset function to start the game over and change questions.
function reset(){
    $(".Quiz").empty();
    $(".Timer").text("30");
    questionChosen = false;
    questionTime = 30;
    questionChanger();
    if(counter == questionStorage.length){
        counter = 0;
        reset();
    }
};

//Timer function for each question.
function timer(){
    setInterval(function(){
        questionTime = questionTime-1;
        $(".Timer").text(questionTime);

        if(questionTime === 0){
            win = false;
            scoreKeeper();           
            counter++; 

            reset();            
    }
    }, 1000);

};

//this function changes the question and answers
function questionChanger(){
    
    //STores correct answer syntax for conditional later
    var crAns = $("<p class='answer' value='correct'>");

    //Stores the correct answer

    if(questionChosen == false && counter < questionStorage.length){
            
        if(counter % 2 == 0){
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
        //2nd format for question display
        else{
            crAns.text(questionStorage[counter].correctA);

            //Appends Correct Answer
            $(".Quiz").append(crAns);

            //Displays incorrect answers
            $(".Quiz").append("<p class='answer'>" + questionStorage[counter].incorrectA1 + "</p>" 
            + "<p class='answer'>" + questionStorage[counter].incorrectA2 + "</p>" 
            + "<p class='answer'>" + questionStorage[counter].incorrectA3 + "</p>");

            //Adds Question
            $(".Question").text(questionStorage[counter].question);
            questionChosen = true;  
        }


    }
}; 

//scorekeeper displays wins and losses
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

//click function for starting game and checks if player chose correct answer
$('body').on('click', '.answer', function(){
    
    playerChoice = $(this).attr("value");

    if (gameStart == false && playerChoice == "start"){
            gameStart = true;
            reset();
            timer();    
    }
    else if(playerChoice=="correct"){
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
    }
});

}); //Document Ready Bracket