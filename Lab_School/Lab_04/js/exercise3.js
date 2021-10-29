function updateOutput(inputValue) {
    document.getElementsByClassName('output-box')[0].innerHTML = inputValue.value; 
}

function changeColor() {
    document.getElementsByClassName('output-box')[0].style.color = document.getElementById("color").value;
}

function changeWeight() {
    if (document.getElementsByClassName('output-box')[0].style.fontWeight === "bold") {
        document.getElementsByClassName('output-box')[0].style.fontWeight = "normal";
    }
    else {
        document.getElementsByClassName('output-box')[0].style.fontWeight = "bold";
    }
}

function changeStyle() {
    if (document.getElementsByClassName('output-box')[0].style.fontStyle === "italic") {
        document.getElementsByClassName('output-box')[0].style.fontStyle = "normal";
    }
    else {
        document.getElementsByClassName('output-box')[0].style.fontStyle = "italic";
    }
}

function changeDecoration() {
    if (document.getElementsByClassName('output-box')[0].style.textDecoration  === "underline") {
        document.getElementsByClassName('output-box')[0].style.textDecoration  = "normal";
    }
    else {
        document.getElementsByClassName('output-box')[0].style.textDecoration  = "underline";
    }
}

