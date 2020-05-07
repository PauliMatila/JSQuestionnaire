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
    if (questions.lenght > currentQuestionID)
    {
        showQuestion(questions[currentQuestionID]);
    }
    else
    {
        showEndSummary();
    }
}

function showQuestion(question)
{
    document.getElementById("questionline").innerHTML = Question(question);
    document.getElementById("startBlock").style.display="none";
    document.getElementById("questionsBlock").style.display="block";
    showAnswerOptions();
}

function showAnswerOptions(answer)
{
    document.getElementById("answerBlock").innerHTML = Question(answer);

}

function showEndSummary()
{
    document.getElementById("endBlock").innerHTML = Question(questions, answerIndexes);
    document.getElementById("startBlock").style.visibility="hidden";
    document.getElementById("questionsBlock").style.visibility="hidden";
}

function answerButtonClicked(index)
{

}