/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "For SA cylinders can producer work in_________direction.", ///// Write the question inside double quotes
            answers: {
                a: "One", ///// Write the option 1 inside double quotes
                b: "Two", ///// Write the option 2 inside double quotes
                c: "Both",
               d: "None of these",
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

		{
            question: "Pneumatic valve are represented by symbols using _________standard.", ///// Write the question inside double quotes
            answers: {
                a: "ISO 1219-3:2006", ///// Write the option 1 inside double quotes
                b: "ISO 1219-2:2006", ///// Write the option 2 inside double quotes
                c: "ISO 1219-1:2006",
               d: "None of these",
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },{
            question: "Pneumatic direction control valve may be actuated using different means:", ///// Write the question inside double quotes
            answers: {
                a: "Manual", ///// Write the option 1 inside double quotes
                b: "Pneumatic", ///// Write the option 2 inside double quotes
                c: "Hydraulic  ",
               d: "All of these",
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },{
            question: "Singal acting cylinder can be used in following application:", ///// Write the question inside double quotes
            answers: {
                a: "Ejecting", ///// Write the option 1 inside double quotes
                b: "Sorting", ///// Write the option 2 inside double quotes
                c: "All of these",
               d: "Clamping",
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },{
            question: "The piston force exerted by a working element is depend on ", ///// Write the question inside double quotes
            answers: {
                a: "Frictional resistance of the sealing components", ///// Write the option 1 inside double quotes
                b: "All of these", ///// Write the option 2 inside double quotes
                c: "Air pressure",
               d: "Cylinder diameter",
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },


        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
