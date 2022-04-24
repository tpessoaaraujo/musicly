function greetingmessage() {
    let greeting = document.getElementById("greeting")
    let data = new Date()
    let hours = data.getHours()

    if (hours >= 0 && hours < 12) {
        greeting.innerText=`Bom dia!`
    } else if (hours >= 12 && hours <= 18) {
        greeting.innerHTML=`Boa tarde!`
    } else {
        greeting.innerHTML=`Boa noite!`
    }
}

function mouseenterimage01() {
    document.getElementById("img-music-01").style.height = "233px";
    document.getElementById("img-music-01").style.width = "233px";
}
function mouseenterimage02() {
    document.getElementById("img-music-02").style.height = "233px";
    document.getElementById("img-music-02").style.width = "233px";
}
function mouseenterimage03() {
    document.getElementById("img-music-03").style.height = "233px";
    document.getElementById("img-music-03").style.width = "233px";
}
function mouseenterimage04() {
    document.getElementById("img-music-04").style.height = "233px";
    document.getElementById("img-music-04").style.width = "233px";
}
function mouseenterimage05() {
    document.getElementById("img-music-05").style.height = "233px";
    document.getElementById("img-music-05").style.width = "233px";
}
function mouseenterimage06() {
    document.getElementById("img-music-06").style.height = "233px";
    document.getElementById("img-music-06").style.width = "233px";
}
function mouseenterimage07() {
    document.getElementById("img-music-07").style.height = "233px";
    document.getElementById("img-music-07").style.width = "233px";
}
function mouseenterimage08() {
    document.getElementById("img-music-08").style.height = "233px";
    document.getElementById("img-music-08").style.width = "233px";
}

function mouseoutimage01() {
    document.getElementById("img-music-01").style.height = "210px";
    document.getElementById("img-music-01").style.width = "210px";
}
function mouseoutimage02() {
    document.getElementById("img-music-02").style.height = "210px";
    document.getElementById("img-music-02").style.width = "210px";
}
function mouseoutimage03() {
    document.getElementById("img-music-03").style.height = "210px";
    document.getElementById("img-music-03").style.width = "210px";
}
function mouseoutimage04() {
    document.getElementById("img-music-04").style.height = "210px";
    document.getElementById("img-music-04").style.width = "210px";
}
function mouseoutimage05() {
    document.getElementById("img-music-05").style.height = "210px";
    document.getElementById("img-music-05").style.width = "210px";
}
function mouseoutimage06() {
    document.getElementById("img-music-06").style.height = "210px";
    document.getElementById("img-music-06").style.width = "210px";
}
function mouseoutimage07() {
    document.getElementById("img-music-07").style.height = "210px";
    document.getElementById("img-music-07").style.width = "210px";
}
function mouseoutimage08() {
    document.getElementById("img-music-08").style.height = "210px";
    document.getElementById("img-music-08").style.width = "210px";
}
