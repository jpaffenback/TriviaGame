//question
//options
//answer
//users selection
//right or wrong
//show only 1 question at a time
//set timer for each question
//give user question with 4 options
//log their selection
//compare it to answer
//if matches, increase correctAnswer by 1
//if time runs out or incorrect answer, move to next


//Question Bank - array of objects

const questionBank=[
    {
        question: "How much did the first Amazon Kindle device cost?",
        answers: ["$699", "$399", "$799", "$299"],
        correctAnswer: 1

    },
    
    {
        question: "In the 1950's, the NFL experimented with what new color for their footballs?",
        answers: ["White", "Red", "Yellow", "Orange"],
        correctAnswer: 0

    },
    {
        question: "What was used as the first Christmas collection kettle by the Salvation Army?",
        answers: ["An old icecream cart", "A Rubbermaid tub", "A large crabpot", "A plastic trash bin"],
        correctAnswer: 2

    },
    {
        question: "Which herb is used to make 'Pesto Sauce'?",
        answers: ["Basil", "Thyme", "Pesto", "Mint"],
        correctAnswer: 0

    },
    {
        question: "The shoe company Converse is owned by what major corporation?",
        answers: ["Champion", "Stretchers", "Addidas", "Nike"],
        correctAnswer: 3

    },
    {
        question: "What is Barbie's full name?",
        answers: ["Rebecca Barb Richardson", "Barbara Milicent Roberts", "Barbara Saleen Walters", "Shirley Rebecca Clauson"],
        correctAnswer: 1

    },
    {
        question: "During the 90's, what candy bar used Bart Simpson as a spokes-character in their TV ads?",
        answers: ["KitKat", "Milkyway", "Snickers", "Butterfinger"],
        correctAnswer: 3

    },
    {
        question: "Which cartoon character has a girlfriend named Petunia?",
        answers: ["Elmer Fud", "Alvin the chipmonk", "Porky Pig", "Donald Duck"],
        correctAnswer: 2

    },
    {
        question: "The US Virgin Islands were purchased by the US in 1916 from what country?",
        answers: ["Denmark", "France", "Portugal", "Venezuela"],
        correctAnswer: 0

    },
    {
        question: "What is the warmest continent?",
        answers: ["Asia", "South America", "Austrailia", "Africa"],
        correctAnswer: 3

    }
    
];



var currentQuestion = 0;
var correctAnswer = 0;


function setupOptions() {
    $('#question').html(parseInt(currentQuestion) + 1 + ". " + questionBank[currentQuestion].question);
    var answers = questionBank[currentQuestion].answers;
    var formHtml = '';
    for (var i = 0; i < answers.length; i++) {
      //adding anwers and radio button 
      formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
        questionBank[currentQuestion].answers[i] + '</label></div><br/>';
    }
    $('#form').html(formHtml);
    $("#option0").prop('checked', true);
  };
  
  function checkAns() {
    if ($("input[name=option]:checked").val() == questionBank[currentQuestion].correctAnswer) {
      correctAnswer++;
    };
  };
  
  $(document).ready(function() {
  
    $(".jumbotron").hide();
    $('#start').click(function() {
      $(".jumbotron").fadeIn();
      $(this).hide();
    });
  
    //$(function() {
    //  $("#progressbar").progressbar({
       // max: questionBank.length - 1,
        //value: 0
     // });
   // });
  
    setupOptions();
  
    $("#next").click(function() {
      event.preventDefault();
      checkAns();
      currentQuestion++;
      $(function() {
        $("#progressbar").progressbar({
          value: currentQuestion
        });
      });
      if (currentQuestion < questionBank.length) {
        setupOptions();
        if (currentQuestion == questionBank.length - 1) {
          $('#next').html("Submit");
          $('#next').click(function() {
            $(".jumbotron").hide();
            $("#result").html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! ").hide();
            $("#result").fadeIn(1500);
          });
  
        };
  
      };
    });
  });
  