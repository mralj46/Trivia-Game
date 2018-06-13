//create a trivia form with multiple choice or true/false options (your choice).
//The player will have a limited amount of time to finish the quiz. 
//The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
//Don't let the player pick more than one answer per question.
//Don't forget to include a countdown timer.


$(document).ready(function() {

    var questions= ["How many teams are in the NBA?", "Who scored 100 points in one game?", 
    "Who made the most 3 pointers? in the NBA?", "Who is the all time scorer in the NBA?", 
    "Who is the top palyer in the NBA today? "];
    var answerKey = ["32", "Wilt Chamberlin", "Ray Allen", "Kareem Abdul-Jabbar","Labron James"];
    var TriviaAnswer = [ [42,38,24,32], ["Magic Johnson", "Larry Bird", "Michael Jordan", "Kareem Abdul-Jabarr"], 
    ["Ray Allen", "Stephan Curry", "Reggie Miller", "Larry Bird"], 
    ["Kevin Durant", "Lebron James", "James Hardin", "Russell Westbrook"]];

    console.log( "Trivia Answers " + TriviaAnswer);



});