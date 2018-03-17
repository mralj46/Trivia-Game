//create a trivia form with multiple choice or true/false options (your choice).
//The player will have a limited amount of time to finish the quiz. 
//The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
//Don't let the player pick more than one answer per question.
//Don't forget to include a countdown timer.


$(document).on('click', '.startBtn', function(){

        $('.startBtn').hide();
        timeCount();
        q1();
        chooseCheckAnswer();
});

function timeCount()
{
    time = 30;
    interval =setInterval(timeRemaining, 1000);
    $('.btnCountainer').append('<div class="timeRem">'
        + 'Time Remaining:' +
        '<div class="timerCountDown"></div>' +
    '</div>');
}

function timeRemaining(){
    time --;
    $('.timerCountDown').text(time + 'seconds');
    // if(time === 0)
    // {
    // var questions ={
    // quest1: ['There are 32 teams in the NBA', "t"], 
    // quest2: ['Michael Jordan is the all-time NBA scorer', "f"],
    // quest3: ['Wilt Chamberlin is the only player to score 100 pts', "t"],
    // quest4: ['Ray Allen has scored the most 3 pointers in the NBA', "t"],
    // quest5: ['Kevin Durant is the top player in the NBA today',"f"]
};
function submitAnswer(){
var total =5;
var score =0;

var q1 = document.forms["quizForm"]["q1"].value;
var q2 = document.forms["quizForm"]["q2"].value;
var q3 = document.forms["quizForm"]["q3"].value;
var q4 = document.forms["quizForm"]["q4"].value;
var q5 = document.forms["quizForm"]["q5"].value;

for(i = 1; i <= total;i++);{
    if(eval ('q'+i) == null || eval ('q'+i) == ''){
         alrert('You missed question + i');
        return false;
    }
     
}

var answer = ["d","c","c","b","c"];
if(q1 == answer[0]){
    score++;
}
if(q2 == answer[1]){
    score++;
}
if(q3 == answer[2]){
    score++;
}
if(q4 == answer[3]){
    score++;
}
if(q5 == answer[4]){
    score++;
}
    var results = document.getElementById("results");
    results.innerHTML = '<h3>You Scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
    alert('You Scored '+score+'out of '+total);

    return false;
}

// var correctAnswer
// var wrongAnswer
// var intervalId;

// function run() {
//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);
//   }


//function startGame() {   
//} 

// function gamePlay()
// {
//     $('.startBtn').on('click',function()
//     {
//         $('button').remove('click');
//         quest1();
//     });
// }

// function question()
//     var newDiv = $('div class=')