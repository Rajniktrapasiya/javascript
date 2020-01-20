var Question = function (id, title, optionid, option) {
    this.id = id;
    this.title = title;
    this.optionid = optionid;
    this.option = option;
    this.isCorrect = function (ans) {
        if (ans == this.optionid) {
            return true;
        }
        else {
            return false;
        }
    }
}

var questionArray = [];
var Question1 = new Question(1, "(1)Born day Of Gujrat:-", 0, ["1 may 1960", "4 april 1960", "1 dec 1960", "31 dec 1967"]);
var Question2 = new Question(2, "(2)Which is the Largest river of Gujrat:-", 0, ["sabarmati", "Tapi", "Mahi", "Narmada"]);
var Question3 = new Question(3, "(3)Big district in Gujrat:-", 1, ["Ahmedabad", "kutch", "Jamnagar", "Surendranagar"]);
var Question4 = new Question(4, "(4)capital of Gujrat:-", 2, ["Bharuch", "Surat", "Gandhinagar", "Amreli"]);
var Question5 = new Question(5, "(5)Highest population city of gujrat:-", 3, ["Bhuj", "Jamnagar", "Rajkot", "Ahmedabad"]);
questionArray.push(Question1);
questionArray.push(Question2);
questionArray.push(Question3);
questionArray.push(Question4);
questionArray.push(Question5);
//console.log(questionArray);
var questionDisplayCounter = 0; //for telling to computer which question are display write now
var userV;
clickCounter(); //first Question Calling

function clickCounter() {                        //it's provide session and set or reset according value.
    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.mysession) {
            if (sessionStorage.mysession > 4) {
                sessionStorage.mysession = 0; //reset mysession
                sessionStorage.result = 0;    //reset session.result
            }
        } else {
            sessionStorage.mysession = 0; //first session provide
            sessionStorage.result = 0;    //first result provide
        }
        nextQuestion();
    } else {
        document.getElementById("content").innerHTML = "Sorry, your browser does not support web storage..."; //if browser doesn't support webstorage
    }
}
function nextQuestion() {                       // it's main function wich display Question,calculate and store the result
    if (sessionStorage.mysession == 0) {
        if (questionDisplayCounter == 5) {
            addScore(userV);
            document.getElementById("content").innerHTML = "YOUR SCORE IS :-" + sessionStorage.result;
        }
        else if (questionDisplayCounter == 0) {
            displayQuestion(questionArray[questionDisplayCounter]);  //display the question function calling
        }
        else {

            addScore(userV);
            displayQuestion(questionArray[questionDisplayCounter]);
        }
    }
    else {
        questionDisplayCounter = sessionStorage.mysession;   //if session was provide and not done that display the question according the session value.
        if (questionDisplayCounter == 5) {
            addScore(userV);
            document.getElementById("content").innerHTML = "YOUR SCORE IS :-" + sessionStorage.result;
        }
        else {

            addScore(userV);

            //console.log(finalResult);

            displayQuestion(questionArray[questionDisplayCounter]);
            //console.log(userValue);
        }
    }
}
function userValue(value) {   //this function use for user radio button's value using onclick='userValue(this.value)'
    userV = value;            //store user value
}
function addScore(value) {     //this function add a score in session.result 
    var t = questionArray[questionDisplayCounter - 1].isCorrect(value);
    if (t == true) {
        sessionStorage.result = Number(sessionStorage.result) + 1;
    }
    else {
        sessionStorage.result = Number(sessionStorage.result) + 0;
    }

}

function addSession() {     //this function for when user click submit button that time first add session value then display question
    sessionStorage.mysession = Number(sessionStorage.mysession) + 1;
    nextQuestion();
}


function displayQuestion(Q) {  //is's display the function .
    var tempResult = "<br>";
    tempResult += "<p><b>" + Q.title + "</b></p><br><br>";
    for (var i = 0; i < 4; i++) {
        tempResult += "<input type='radio' class='radioButton' onclick='userValue(this.value)' value=" + i + " name='" + Q.id + "'>" + Q.option[i];
    }
    formId = Q.id;
    tempResult += "<br><input type='button' id='btn' onclick='addSession()' value='submite'>";
    document.getElementById("content").innerHTML = tempResult;
    questionDisplayCounter = questionDisplayCounter + 1;
    tempResult = "";

}