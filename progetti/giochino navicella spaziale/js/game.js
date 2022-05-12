(function(){
    "use strict";

    let canvas = document.createElement("canvas");
    canvas.width = 626;
    canvas.height = 500;
    document.body.appendChild(canvas);

    let canvasContex = canvas.getContext("2d");

    let navicella = {x: parseInt(canvas.width/2)-24, y: parseInt(canvas.height)-60, speed: 256};
    let fire = {x: parseInt(canvas.width/2)+24, y: parseInt(canvas.height)-16, speed: 300};
    let attacco = [];
    let score = 0;

    const requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.webkitRequestAnimationFrame;

    const bgImage = new Image();
    bgImage.src = "img/spazio.webp";
    const imgNavicella = new Image();
    imgNavicella.src = "img/nav2.png";
    const imgFire = new Image();
    imgFire.src = "img/fire.png";
    let bgFlag = false;
    let navFlag = false;
    let fireFlag = false;
    let fireDisplay = false;
    bgImage.onload = () => bgFlag = true;
    imgNavicella.onload = () => navFlag = true;
    imgFire.onload = () => fireFlag = true;

    function viewScore(){
        canvasContex.fillStyle = "#00ff90";
        canvasContex.font = "18px Courier";
        canvasContex.fillText("Score: " + score, 20, 20);
    }
    function render(){
        if(bgFlag)
            canvasContex.drawImage(bgImage, 0, 0);
        if(navFlag)    
            canvasContex.drawImage(imgNavicella, navicella.x, navicella.y);
        if(fireFlag && fireDisplay)
            canvasContex.drawImage(imgFire,fire.x, fire.y);
        viewScore();
    }    
    
    let keysDown = {};
    addEventListener("keydown", (e)=> keysDown[e.keyCode] = true);
    addEventListener("keyup", (e) => {delete keysDown[e.keyCode]});

    function update(modifier){
        if(37 in keysDown && navicella.x > 0){
            navicella.x -= navicella.speed * modifier;
        }
        if(39 in keysDown && navicella.x < canvas.width-48){
            navicella.x += navicella.speed * modifier;
        }
        if(32 in keysDown && !fireDisplay){
            fire.x = navicella.x+12;
            fireDisplay = true;
            //attacco[attacco.length] = fire;
        }else{
            if(fire.y > 20){
                fire.y -= fire.speed * modifier;
            }else{
                fire.y = parseInt(canvas.height)-16;
                fireDisplay = false;
            }
        }
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