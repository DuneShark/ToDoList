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