var currentQuestionID;
var answerIndexes;
var questions = [];

function onStart()
{
    var Q1 = new Question("Onko koodaaminen helppoa", ["Heleppoa on","Ei ole heleppoa"]);
    var Q2 = new Question("Onko elämä helppoa", ["Erittäin heleppoa","Ei ole heleppoa ollenkaan"]);
    questions.push(Q1, Q2);
    document.getElementById("questionsBlock").style.display="none";
    document.getElementById("endSummary").style.display="none";
}

function startQuestionnaire()
{
    currentQuestionID = 0;
    answerIndexes = new Array();
    askNextQuestion();
}

function askNextQuestion()
{
    
    if (questions.length > currentQuestionID)
    {
        var question = questions[currentQuestionID];
        showQuestion(question);
    }
    else
    {
        showEndSummary();
    }
}

function showQuestion(question)
{
    document.getElementById("questionline").innerHTML = question.question;
    document.getElementById("startBlock").style.display="none";
    document.getElementById("questionsBlock").style.display="block";
    showAnswerOptions(question.answer);
}

function showAnswerOptions(answer)
{
    var newAnswer = Array.from(answer);
    newAnswer.forEach(element => {
        document.getElementById("answerBlock").innerHTML += "<br/>" + element + "<button onclick=answerButtonClicked("+ newAnswer.indexOf(element) +")>Valitse</button>";       
    });
}

function showEndSummary()
{
    document.getElementById("endBlock").innerHTML = questions, answerIndexes;
    document.getElementById("startBlock").style.display="none";
    document.getElementById("questionsBlock").style.display="none";
    document.getElementById("endSummary").style.display="block";       
}

function answerButtonClicked(index)
{
    currentQuestionID++;
    askNextQuestion();
    console.log("clicked" + index);
}