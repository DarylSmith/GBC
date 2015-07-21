//either create a new object for our app or use one that's existing
var questionApp = questionApp || {};

questionApp.currentQuestion = 0;

//customizations
questionApp.options = {};


questionApp.defaultQuestions = [
    {
        Question: 'What do I crust would you like',
        Answer:''

    },

    {
        Question: 'What toppings would you like',
        Answer: ''


    },

    {
        Question: 'What drinks would you like',
        Answer:''


},
{
    Question: 'Please enter your credit card',
    Answer:''


}


]

questionApp.questions = [];



questionApp.renderQuestion = function () {

    //select question and put it on the page
    var question = questionApp.questions[questionApp.currentQuestion]

    //clear value in input box
    $(".question-response").val(question.Answer);

    //get title of question

    if (questionApp.options.showQuestionHeader == true) {
        $(".question-title").html("Question " + 

(questionApp.currentQuestion + 1));
    }

    $(".question-text").html(question.Question);





}

questionApp.SaveQuestions = function () {


    //convert object into string
    var questionStr = JSON.stringify(questionApp.questions);

    //store string in local storage
    localStorage.setItem("questionApp", questionStr);
}

questionApp.RetrieveQuestions = function () {

    var questionStr = localStorage.getItem("questionApp");

    //make sure object exists
    if(questionStr!= null)
    {
        //parse and set these as questions
        questionApp.questions = JSON.parse(questionStr);
    }



}


questionApp.buildQuestions = function () {

    questionApp.defaultQuestions.forEach(function (question) {

        
        /*
        there are 2 options:
        1) if showDrink question==true, then add ALL the questions to our app
        2)if show drink question is false, only add questions that do not contain 'drink'
        the below if expression is just a shortened version of this:
        if (questionApp.options.showDrinkQuestion ==true || (questionApp.options.showDrinkQuestion ==false && question.Question.indexOf("drink") == -1)

        */
        if (questionApp.options.showDrinkQuestion || question.Question.indexOf("drink") == -1) {
            questionApp.questions.push(question);
        }




    });




}

//function that will have all of our event handlers
questionApp.bindEventHandlers = function () {



    $(window).on('hashchange', function()
    
    {
        var hash = parseInt(window.location.hash.replace("#", ""));


        questionApp.currentQuestion = hash;

        questionApp.renderQuestion();



    }
    
    )

    $('.btn-submit').click(function () {

        //select question and put it on the page
        var question = questionApp.questions

[questionApp.currentQuestion]



        question.Answer = $(".question-response").val();
      

        questionApp.SaveQuestions();

        //increase question by 1
        questionApp.currentQuestion++;

        //check if we have gone through all the questions.  If so, 

        //display the list of the questions and answers on the page
        if (questionApp.currentQuestion == questionApp.questions.length) 

        {

            //create a string variable to store the html for the list we 

            var listOfQuestionsAndAnswers = "<h2>" + 

questionApp.options.completeTitle + "</h2>";

            //we'll make an ordered list for our results
            listOfQuestionsAndAnswers += "<ol>";


            //create a foreach loop and go through each of the qustions 

            //and answers
            questionApp.questions.forEach(function (myQuestion) {

                listOfQuestionsAndAnswers += "<li><strong>" + 

myQuestion.Question +"</strong><br/>";

                listOfQuestionsAndAnswers += myQuestion.Answer + 

"</li>";



            });

            listOfQuestionsAndAnswers += "</ol>";

            //finally bind this to the page
            $('.question-container').html(listOfQuestionsAndAnswers);
        }
            //otherwise, proceed to the next question
        else {

            window.location = "#" + questionApp.currentQuestion;
        }




     

    });




}

 

$.fn.quiz = function (options) {


    //set our options

    questionApp.options = $.extend(
        {
            completeTitle: "Here are the Answers to Your Questions",
            showQuestionHeader: true,
            showDrinkQuestion: true
        },

        options
        )

    questionApp.buildQuestions();

    questionApp.RetrieveQuestions();

    // questionApp.renderQuestion();

    questionApp.bindEventHandlers();

    if (window.location.hash == "#0") {
        questionApp.renderQuestion();
    }
    window.location = "#0";

}