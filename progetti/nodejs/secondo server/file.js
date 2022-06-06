(function(){
    const url = 'http://127.0.0.1:8081/dati';
    fetch(url)
        .then(res => res.text())
        .then(res => visualizza(res))
        .catch(err => alert("Errore: " + err));

    const visualizza = function(res){
        const mainSection = document.getElementById('listaSpesa');
        const tagPre = document.createElement('pre');
        tagPre.innerText = res;

        mainSection.appendChild(tagPre);
    }

    const buttonConv = document.getElementById('buttonConverti');

    buttonConv.addEventListener('click', () => {
        const mainSection = document.getElementById('listaSpesa');
        const tagPre = mainSection.getElementsByTagName('pre')[0];
        const obj = JSON.parse(tagPre.innerText);
        tagPre.remove();
        
        const ul = document.createElement('ul');
        for(let i=0; i<obj.length; i++){
            const li = document.createElement('li');
            li.innerText = obj[i].prodotto;
            ul.appendChild(li);
        }

        mainSection.appendChild(ul);

        buttonConv.remove();
    })
})()