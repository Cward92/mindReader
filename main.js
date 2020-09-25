var header = document.getElementById("header").innerHTML;
var txt = document.getElementById("text").innerHTML
//var char = ["~", "!", "@", "#"];
var char = ["~", "!", "@", "#", "$", "%", "&amp;", "^", "*", ")"];
var state = 1;
var result = null;
var charSet = null;
let numberPairs = "";

function assignSymbol() {
    charSet = char[Math.floor(Math.random() * 10)];
    for (i = 0; i < 100; i++) {
        if (i % 9) {
            let notCharSet = char[Math.floor(Math.random() * 10)];
            numberPairs += i + " - " + notCharSet + "<br>";
        }
        else {
            numberPairs += i + " - " + charSet + "<br>";
            result = charSet;
        }
    }
    return numberPairs;
}

function startState(){
    assignSymbol();
    updateState();
}

function backState(){
    state--;
    updateState();
}

function nextState(){
    state++
    updateState();
}

function resetState(){
    state = 1;
    updateState();
}

function updateState(){
    if (state == 1) {
        document.getElementById("header").innerHTML = "I can read your mind";
        document.getElementById("text").innerHTML = "";
        document.getElementById("btn-reset").style.visibility = "hidden";
        document.getElementById("btn-back").style.visibility = "hidden";
        document.getElementById("btn-go").style.visibility = "initial";
        document.getElementById("btn-go").innerHTML = "GO";
        document.getElementById("btn-go").onclick = nextState;
    } else if (state == 2) {
        document.getElementById("header").innerHTML = "Pick a number from 01 - 99";
        document.getElementById("text").innerHTML = "when you have an answer, click NEXT";
        document.getElementById("btn-reset").style.visibility = "initial";
        document.getElementById("btn-back").style.visibility = "visible";
        document.getElementById("btn-go").style.visibility = "initial";
        document.getElementById("btn-go").innerHTML = "NEXT";
    } else if (state == 3) {
        document.getElementById("header").innerHTML = "Add both digits together to get a new number";
        document.getElementById("text").innerHTML = "Ex: 21 is 2 + 1 = 3 <br> Click 'NEXT' to proceed";
        document.getElementById("btn-reset").style.visibility = "initial";
        document.getElementById("btn-back").style.visibility = "visible";
        document.getElementById("btn-go").style.visibility = "initial";
        document.getElementById("btn-go").innerHTML = "NEXT";
    } else if (state == 4) {
        document.getElementById("header").innerHTML = "Subtract your new number from your original number";
        document.getElementById("text").innerHTML = "Ex: 21 - 3 = 18 <br> Click 'NEXT' to proceed";
        document.getElementById("btn-reset").style.visibility = "initial";
        document.getElementById("btn-back").style.visibility = "visible";
        document.getElementById("btn-go").style.visibility = "initial";
        document.getElementById("btn-go").innerHTML = "NEXT";
    } else if (state == 5) {
        document.getElementById("header").innerHTML = "Find your new number!<br><hr>" + numberPairs;
        document.getElementById("text").innerHTML = "";
        document.getElementById("btn-reset").style.visibility = "initial";
        document.getElementById("btn-back").style.visibility = "visible";
        document.getElementById("btn-go").style.visibility = "initial";
        document.getElementById("btn-go").innerHTML = "NEXT";
    } else if (state == 6) {
        document.getElementById("header").innerHTML = result;
        document.getElementById("text").innerHTML = "Your symbol is: " + result;
        document.getElementById("btn-reset").style.visibility = "initial";
        document.getElementById("btn-back").style.visibility = "visible";
        document.getElementById("btn-go").style.visibility = "hidden";
        document.getElementById("btn-go").innerHTML = "NEXT";
    }
}