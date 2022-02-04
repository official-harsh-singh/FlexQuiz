function calculate() {
    var a = 0;
    var q1 = document.questions._1.value;
    var q2 = document.questions._2.value;
    var q3 = document.questions._3.value;
    var q4 = document.questions._4.value;
    var q5 = document.questions._5.value;
    var q6 = document.questions._6.value;
    var q7 = document.questions._7.value;
    var q8 = document.questions._8.value;
    var q9 = document.questions._9.value;
    var q10 = document.questions._10.value;
    var q11 = document.questions._11.value;
    var q12 = document.questions._12.value;
    var q13 = document.questions._13.value;
    var q14 = document.questions._14.value;
    var q15 = document.questions._15.value;
    var q16 = document.questions._16.value;
    var q17 = document.questions._17.value;
    var q18 = document.questions._18.value;
    var q19 = document.questions._19.value;
    var q20 = document.questions._20.value;
    var q21 = document.questions._21.value;
    var q22 = document.questions._22.value;
    var q23 = document.questions._23.value;
    var q24 = document.questions._24.value;
    var q25 = document.questions._25.value;
    var result = document.getElementById("result");
    var questions = document.getElementById("questions")
    if (q1 == "t") {a++}
    if (q2 == "t") {a++}
    if (q3 == "u") {a++}
    if (q4 == "r") {a++}
    if (q5 == "t") {a++}
    if (q6 == "t") {a++}
    if (q7 == "t") {a++}
    if (q8 == "e") {a++}
    if (q9 == "u") {a++}
    if (q10 == "t") {a++}
    if (q11 == "r") {a++}
    if (q12 == "u") {a++}
    if (q13 == "r") {a++}
    if (q14 == "u") {a++}
    if (q15 == "r") {a++}
    if (q16 == "u") {a++}
    if (q17 == "u") {a++}
    if (q18 == "u") {a++}
    if (q19 == "t") {a++}
    if (q20 == "t") {a++}
    if (q21 == "r") {a++}
    if (q22 == "t") {a++}
    if (q23 == "u") {a++}
    if (q24 == "t") {a++}
    if (q25 == "e") {a++}
questions.style.display = "none";
if (a <= 2){
    result.textContent = `You have scored ${a} marks only. Better luck next time`;
} else {
    var d = result.textContent = `Congratulations!! You have scored ${a} marks.`;
}
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fortyfiveMins = 60 * 45,
        display = document.querySelector('#time');
    startTimer(fortyfiveMins, display);
};