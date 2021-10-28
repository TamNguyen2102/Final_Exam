function addButtonClick(event){
    let firstBox = document.getElementById('firstname');
    let secondBox = document.getElementById('lastname');
    let emailBox = document.getElementById('email');

    let firstValue = firstBox.value;
    let secondValue = secondBox.value;
    let emailValue = emailBox.value;

    if (checkInput(firstValue, secondValue, emailValue)) {
        addRow(firstValue, secondValue, emailValue);
    }
    else {
        event.preventDefault(); 
    }
}

function resetButtonClick(event) {
    document.getElementsByClassName("errorMessage")[0].style.display = "none";
    document.getElementsByClassName("errorMessage")[1].style.display = "none";
    document.getElementsByClassName("errorMessage")[2].style.display = "none";
    document.getElementsByClassName("errorMessage")[2].style.display = "none";

    document.getElementById('firstname').value = "";
    document.getElementById('lastname').value = "";
    document.getElementById('email').value = "";
}

function checkInput(firstValue, secondValue, emailValue) {
    if (firstValue.length === 0) {
        let errorMessage0 = document.getElementsByClassName("errorMessage")[0];
        errorMessage0.style.display = "";    
    }
    if (secondValue.length === 0) {
        let errorMessage1 = document.getElementsByClassName("errorMessage")[1];
        errorMessage1.style.display = "";    
    }
    if (emailValue.length === 0) {
        let errorMessage2 = document.getElementsByClassName("errorMessage")[2];
        errorMessage2.style.display = "";    
    }
    else if (validateEmail(emailValue) == false) {
        let errorMessage2 = document.getElementsByClassName("errorMessage")[2];
        errorMessage2.innerHTML = "Please enter a valid email.";
        errorMessage2.style.display = "";
    }
    else {
        return true;
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function checkError() {
    document.getElementById("firstname").onclick = () => {
        document.getElementsByClassName("errorMessage")[0].style.display = "none";
    };
    document.getElementById("lastname").onclick = () => {
        document.getElementsByClassName("errorMessage")[1].style.display = "none";
    };
    document.getElementById("email").onclick = () => {
        document.getElementsByClassName("errorMessage")[2].style.display = "none";
    }; 
    document.getElementById("email").onclick = () => {
        document.getElementsByClassName("errorMessage")[2].style.display = "none";
    };
}

function addRow(firstValue, secondValue, emailValue) {
    let tbody = document.getElementsByTagName('tbody')[0];
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    // let btn = document.createElement('button');

    td1.innerHTML = firstValue;
    td2.innerHTML = secondValue;
    td3.innerHTML = emailValue;
    td4.innerHTML = `<button class="btn btn-danger btn-sm deleteButton" onclick="deleteRow(this)">Delete</button>`;
    // btn.setAttribute("onlick", "deleteRow(this)");
    // btn.setAttribute('class', 'btn btn-danger btn-sm deleteButton');
    

    // td4.appendChild(btn);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);
}

function deleteRow(btn) {
    let btnparent = btn.parentElement;
    let btnparentparent = btnparent.parentElement;
    btnparentparent.remove();
}