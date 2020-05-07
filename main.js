var currentQuestionID = [];
var answerIndexes = [];
var questions = [];

function onStart()
{
    var Q1 = new Question("Onko koodaaminen helppoa", ["Heleppoa on","Ei ole heleppoa"]);
    var Q2 = new Question("Onko elämä helppoa", ["Erittäin heleppoa","Ei ole heleppoa ollenkaan"]);
    questions.push(Q1, Q2);
    document.getElementById("questionsBlock").style.visibility="hidden";
    document.getElementById("endSummary").style.visibility="hidden";
}

function startQuestionaire()
{
    currentQuestionID = 0;
    var answers = new answerIndexes();
    askNextQuestion();
}

function askNextQuestion()
{
    if (currentQuestionID == 0)
    {
        showQuestion();
    }
    else
    {
        showEndSummary();
    }
}

function showEndSummary()
{
    document.getElementById("endBlock").innerHTML = Question(questions, answerIndexes);
    document.getElementById("startBlock").style.visibility="hidden";
    document.getElementById("questionsBlock").style.visibility="hidden";
}

function showQuestion(question)
{
    document.getElementById("questionline").innerHTML = Question(question);
    showAnswerOptions();
}

function showAnswerOptions(answer)
{
    document.getElementById("answerBlock").innerHTML = Question(answer);

}

function answerButtonClicked(index)
{

}