var closeButton = document.getElementsByTagName("LI");
var i;
for (i = 0; i < closeButton.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u2713");
    span.className = "close";
    span.appendChild(txt);
    closeButton[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener("click", function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
}, false);


function newTask() {
    var li = document.createElement("li");
    var input = document.getElementById("box").value;
    var text = document.createTextNode(input);

    li.appendChild(text);
    if (input === "") {
        alert("Task cannot be blank");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("box").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u2713");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function blue() {
    document.body.style.backgroundColor = "#0FAEF7";
    document.getElementById("card").style.backgroundColor = "#0f64F7";
    document.getElementById("navbar").style.backgroundColor = "#0f64F7";
}

function red() {
    document.body.style.backgroundColor = "#E72A40";
    document.getElementById("card").style.backgroundColor = "#C52336";
    document.getElementById("navbar").style.backgroundColor = "#C52336";
}

function yellow() {
    document.body.style.backgroundColor = "#F0E770";
    document.getElementById("card").style.backgroundColor = "#F0D871";
    document.getElementById("navbar").style.backgroundColor = "#F0D871";
}

function green() {
    document.body.style.backgroundColor = "#25E766";
    document.getElementById("card").style.backgroundColor = "#20C557";
    document.getElementById("navbar").style.backgroundColor = "#20C557";
}

function purple() {
    document.body.style.backgroundColor = "#C04CE7";
    document.getElementById("card").style.backgroundColor = "#A441C5";
    document.getElementById("navbar").style.backgroundColor = "#A441C5";
}

function orange() {
    document.body.style.backgroundColor = "#E76423";
    document.getElementById("card").style.backgroundColor = "#C5551E";
    document.getElementById("navbar").style.backgroundColor = "#C5551E";
}