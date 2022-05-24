(()=>{
    "use strict"
    const bottoni = document.querySelectorAll("button");
    bottoni.forEach((bt) => {
        bt.addEventListener("click", (e) => getInfo(e.target.innerText.toLowerCase()))
    })

    const getInfo = function(docente){
        const url = `http://pw.netgroup.uniroma2.it/docenti/${docente}.json`;
        fetch(url)
            .then(res => res.json())
            .then(json_obj => fetch(`https://api.github.com/users/${json_obj.name}`))
            .then(res => res.json())
            .then(json_obj => visualizzaAccount(json_obj))
            .catch(err => console.log("errore: " + err));
    }

    function visualizzaAccount(json_obj){
        let table = createTable();
        insertElement(table, json_obj);
        
        const section = document.getElementsByTagName("section")[0];
        section.appendChild(table);
    }
    
    function createTable(){
        let table = document.createElement("table");
        let tr = document.createElement("tr");
        table.appendChild(tr);
        table.classList.add("tb");
        let th = document.createElement("th");
        th.innerText = "Twitter";
        let th1 = document.createElement("th");
        th1.innerText = "Email";
        let th2 = document.createElement("th");
        th2.innerText = "Blog";
        
        tr.appendChild(th);
        tr.appendChild(th1);
        tr.appendChild(th2);
        return table;
    }
    function insertElement(table, json_obj){
        let tr = document.createElement("tr");
        table.appendChild(tr);
        let td = document.createElement("td");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let txt;
        json_obj.twitter_username ? txt = json_obj.twitter_username: txt = "non disponibile";
        td.innerText = txt;
        tr.appendChild(td);
        json_obj.email ? txt = json_obj.email: txt = "non disponibile";
        td1.innerText = txt;
        tr.appendChild(td1);
        json_obj.blog ? txt = json_obj.blog: txt = "non disponibile";
        td2.innerText = txt;
        tr.appendChild(td2);
    }
})();
