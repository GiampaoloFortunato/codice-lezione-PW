/**
 * TODO: 
 *      1. FIX sparo continuo
 *      2. Modificare spawn avversari (troppo vicini)
 *      3. Far sparare gli avversari
 *      4. Aggiungere vite alle navicelle
 */

(function(){
    "use strict";

    let canvas = document.createElement("canvas");
    canvas.width = 626;
    canvas.height = 500;
    document.body.appendChild(canvas);
    let contex = canvas.getContext("2d");

    //Ogni tot millisecondi posso sparare un fuoco
    let intervallo = false;
    let speedFire = 50;
    setInterval(() => {
        intervallo ? intervallo = false: intervallo = true;
    }, speedFire);

    //Strutture dati per rappresentare personaggi
    let navicella = {x: parseInt(canvas.width/2)-24, y: parseInt(canvas.height)-60, speed: 256};
    let fire = {x: parseInt(canvas.width/2)+24, y: parseInt(canvas.height)-16, speed: 300};
    let enemy = {x:30, y:30};
    let listFire = [];
    let listEnemy = [];
    let listEnemyFire = [];
    let score = 0;

    const requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame;

    //Caricamento skin e background
    const bgImage = new Image();
    bgImage.src = "img/spazio.webp";
    const imgNavicella = new Image();
    imgNavicella.src = "img/nav2.png";
    const imgFire = new Image();
    imgFire.src = "img/fire.png";
    const imgEnemy = new Image();
    imgEnemy.src =  "img/enemy.png";
    let bgFlag = false;
    let navFlag = false;
    let fireFlag = false;
    let enemyFlag = false;
    bgImage.onload = () => bgFlag = true;
    imgNavicella.onload = () => navFlag = true;
    imgFire.onload = () => fireFlag = true;
    imgEnemy.onload = () => enemyFlag = true;
    

    function viewScore(){
        contex.fillStyle = "#00ff90";
        contex.font = "18px Courier ";
        contex.fillText("Score: " + score, 20, 20);
    }
    function render(){
        if(bgFlag)
            contex.drawImage(bgImage, 0, 0);
        if(navFlag)    
            contex.drawImage(imgNavicella, navicella.x, navicella.y);
        if(fireFlag){
            listFire.forEach((el) => {
                contex.drawImage(imgFire, el.x, el.y);
            })
            listEnemyFire.forEach((el) =>{
                contex.drawImage(imgFire, el.x, el.y);
            })
        }
        if(enemyFlag){
            listEnemy.forEach((el) => {
            contex.drawImage(imgEnemy, el.x, el.y);
            });
        }
        viewScore();
    }    
    
    /*
    * Struttura dati per memorizzare pressione dei tasti.
    * Con "keydown" memorizziamo il/i tasto/i premuto/i
    * Con "keyup" cancelliamo il tasto appena premuto, questo per come è stata pensata la funzione update(). 
    * Se si vuole modificare questa struttura dati bisogna ripensare la funzione update.
    */
    let keysDown = {};
    addEventListener("keydown", (e)=> keysDown[e.keyCode] = true);
    addEventListener("keyup", (e) => {delete keysDown[e.keyCode]});

    function update(modifier){
        //37 corrisponde al pulsante "sinistra" 
        if(37 in keysDown && navicella.x > 0){
            navicella.x -= navicella.speed * modifier;
        }
        //39 corrisponde al pulsante "destra"
        if(39 in keysDown && navicella.x < canvas.width-48){
            navicella.x += navicella.speed * modifier;
        }
        //32 corrisponde alla spacebar
        if(32 in keysDown && intervallo){
            fire.x = navicella.x+12;
            fire.y = parseInt(canvas.height)-16;
            listFire[listFire.length] = Object.assign({}, fire);
        }else{
            listFire.forEach((el, index) => {
                if(el.y > 20){
                    el.y -= el.speed * modifier;
                }else{
                    listFire.splice(index,1);
                }
            });
        }
        createEnemy(4);
        enemyFire(4)
        viewEnemyFire(modifier);
        hit();
    }
    //controllo se ho colpito navicella avversaria
    function hit(){
        listFire.forEach((el) => {
            listEnemy.forEach((en, index) => {
                if (Math.abs(el.x - en.x) < 24 && Math.abs(el.y - en.y) < 24){
                    score++;
                    listEnemy.splice(index, 1);
                }
            })
        })
    }

    function createEnemy(difficolta){
        let rand = Math.random();
        if(rand < difficolta * 10**-2){
            let newEnemy = Object.assign({}, enemy);
            newEnemy.x = parseInt(Math.random() * canvas.width);
            newEnemy.y = parseInt(Math.random() * 200);
            listEnemy[listEnemy.length] = newEnemy;
        }
    }

    function viewEnemyFire(modifier){
        listEnemyFire.forEach((el, index) =>{
            if(Math.abs(navicella.x - el.x) < 20 && Math.abs(navicella.y - el.y) < 20){
                navicella.x = -1000;
                gameOver();
            }
            if(el.y > 10){
                el.y += fire.speed * modifier;
            }else{
                listEnemyFire.splice(index,1);
            }
        })

    }

    function enemyFire(difficolta){
        listEnemy.forEach((el) => {
            let rand = Math.random();
            if(rand < difficolta * 10**-3){
                let newFire = Object.assign({}, fire);
                newFire.x = el.x;
                newFire.y = el.y+10;
                listEnemyFire[listEnemyFire.length] = newFire;
            }
        })
    }

    function gameOver(){
        setTimeout(() => schermataGameOver(), 1000);
        setTimeout(() => location.reload(), 2000);
    }

    function schermataGameOver(){
        alert("game over");
    }

    function main(){
        let now = Date.now();
        let delta = now - then;
        update(delta/1000);
        render();
        then = now;
        requestAnimationFrame(main);
    }
    let then = Date.now();
    main();
})();