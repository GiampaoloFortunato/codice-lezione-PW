//uso iife
(function(){
    "use strict"
    let canvas = document.createElement("canvas");
    let contex = canvas.getContext("2d");
    canvas.width = 512;
    canvas.height = 480;
    document.body.appendChild(canvas);

    let monster = {x: 0, y:0, speed:200};
    let hero = {x:0, y: 0, speed: 256};
    let monstersCaught = 0;

    //creo alias per window
    const w = window;
    const requestAnimationFrame =
        w.requestAnimationFrame ||
        w.mozRequestAnimationFrame ||
        w.msRequestAnimationFrame ||
        w.webkitRequestAnimationFrame;

    //Sfondo
    const bgImage = new Image();
    let bgReady = false;
    bgImage.onload = () => bgReady = true;
    bgImage.src = 'images/background.png';
    //Nostro eroe - Hero
    const heroImage = new Image();
    let heroReady = false;
    heroImage.onload = () => heroReady = true;
    heroImage.src = 'images/hero.png';
    //mostro
    const monsterImage = new Image();
    let monsterReady = false;
    monsterImage.onload = () => monsterReady = true;
    monsterImage.src = 'images/monster.png';

    let keysDown = {};
    addEventListener("keydown", (e)=> keysDown[e.keyCode] = true);
    addEventListener("keyup", (e) => {delete keysDown[e.keyCode]});

    function reset() {
        hero.x = canvas.height / 2;
        hero.y = canvas.width / 2;
        monster.y = 32 + parseInt(Math.random() * canvas.height - 64);
        monster.x = 32 + parseInt(Math.random() * canvas.width - 64);
    }

    function update(modifier){
        //up
        if(38 in keysDown && hero.y > 0){
            hero.y -= hero.speed * modifier;
        }else if(38 in keysDown && hero.y <= 0){
            hero.y = canvas.height-48;
        }
        //down
        if(40 in keysDown && hero.y < canvas.height - 32){
            hero.y += hero.speed * modifier;
        }else if(40 in keysDown && hero.y >= (canvas.height - 32)){
            hero.y = 0;
        }
        //left
        if(37 in keysDown && hero.x > 0){
            hero.x -= hero.speed * modifier;
        }else if(37 in keysDown && hero.x <= 0){
            hero.x = canvas.width;
        }
        //rigth
        if(39 in keysDown && hero.x < canvas.width - 32){
            hero.x += hero.speed * modifier;
        }else if(39 in keysDown && hero.x > canvas.width - 32){
            hero.x = 0;
        }
        //monster left
        if(65 in keysDown && monster.x > 0){
            monster.x -= monster.speed * modifier;
        }else if(65 in keysDown && monster.x <= 0){
            monster.x = canvas.width;
        }
        //monster down
        if(83 in keysDown && monster.y < canvas.height -32){
            monster.y += monster.speed * modifier;
        }else if(83 in keysDown && monster.y >= canvas.height -32){
            monster.y = 0;
        }
        //monster rigth
        if(68 in keysDown && monster.x < canvas.width - 32){
            monster.x += monster.speed * modifier;
        }else if(68 in keysDown && monster.x >= canvas.width - 32){
            monster.x = 0;
        }
        //monster up
        if(87 in keysDown && monster.y > 0){
            monster.y -= monster.speed * modifier;
        }else if(87 in keysDown && monster.y <= 0){
            monster.y = canvas.height;
        }
        if (
            hero.x <= (monster.x + 32) && 
            monster.x <= (hero.x + 32) && 
            hero.y <= (monster.y + 32) && 
            monster.y <= (hero.y + 32)){
                monstersCaught++;
                reset();
        }
    }
    function render(){
        //Qunado caricato (bgReady == true) viene "scritto" all'interno del nostro contex l'immagine di background
        if(bgReady){
            contex.drawImage(bgImage, 0, 0);
        }
        if(monsterReady){
            contex.drawImage(monsterImage, monster.x, monster.y);
        }

        if(heroReady){
            contex.drawImage(heroImage, hero.x, hero.y);
        }

        contex.fillStyle = "rgb(250,250,250)";
        contex.font = "24px Helvetica";
        contex.textAlign = "left";
        contex.textBaseline = "top";
        //i due numeri 32 indicano le coordinate da cui vogliamo che parta la scritta
        contex.fillText("Prof, catturati: " + monstersCaught, 32, 32);
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
    reset();
    main();
})();

/*
Per salvare i progressi fatti li salviamo dentro la local storage
localStorage.setItem('mostri_catturati', monstersCaught);
Per riprendere i progressi usiamo la get
localStorage.getItem('mostri_catturati');
*/