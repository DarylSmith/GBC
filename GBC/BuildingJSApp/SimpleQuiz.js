//create a global object to store our data
//if it doesn't exist, create it
var questionApp = questionApp || {};

questionApp = (function () {


    //variable to get current question
    var currentQuestion = 0;

    //make our list of questions (this is private)
    var questions = [

        {
            Question: 'What do I want to learn in this class?',
            Answer :''

        },
        {
            Question: 'What is my favourite part of school?',
            Answer: ''


        },

        {
            Question: 'What do a want to learn in my next class?',
            Answer: ''

        }

        ]


    //event handler
    $(document).on('click', '.btn-submit', function () {

        var question = questions[currentQuestion];

        question.Answer = $('.question-response').val();

        //increase question by 1
        currentQuestion++;

        if (currentQuestion == questions.length) {

            $('.question-container').html('Thank you for taking this quiz');
        }
        else {

            renderQuestion();
        }


        



    });


    //function to render current question
    var renderQuestion = function () {

        var question = questions[currentQuestion];

        //question title
        $(".question-title").html("Question " + (currentQuestion + 1));

        $(".question-text").html(question.Question);

    }


    return {

        Init: function () { renderQuestion(); },


        GetAllQuestions: function () { return questions }

    }
   



})();