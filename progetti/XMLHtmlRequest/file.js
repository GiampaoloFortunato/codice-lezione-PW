"use strict"

let url = "https://jsonplaceholder.typicode.com/todos";
let request = new XMLHttpRequest();

request.onreadystatechange = () => {
    if (request.status === 200 && request.readyState === 4){
        let books = JSON.parse(request.responseText);
        let tbody = document.getElementById("todos").getElementsByTagName("tbody")[0];
        books.forEach((element) => {
            if (element.userId == "1"){
                let tr = document.createElement("tr"); 
                let tdUserId = document.createElement("td");
                tdUserId.appendChild(document.createTextNode(element.userId));
                let tdId = document.createElement("td");
                tdId.appendChild(document.createTextNode(element.id)); 
                let tdTitle = document.createElement("td");
                tdTitle.appendChild(document.createTextNode(element.title));
                let tdCompleted = document.createElement("td");
                tdCompleted.appendChild(document.createTextNode(element.completed)); 
                tr.appendChild(tdUserId);
                tr.appendChild(tdId);
                tr.appendChild(tdTitle);
                tr.appendChild(tdCompleted); 
                tbody.appendChild(tr);
            }
        });
    }
}

request.open("GET", url, true);
request.send(null);