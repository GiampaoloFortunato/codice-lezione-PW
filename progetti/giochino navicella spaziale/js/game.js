(function(){
    "use strict";

    let canvas = document.createElement("canvas");
    canvas.width = 626;
    canvas.height = 500;
    document.body.appendChild(canvas);

    let canvasContex = canvas.getContext("2d");

    let navicella = {x: parseInt(canvas.width/2)-24, y: parseInt(canvas.height)-60, speed: 256};
    let fire = {x: parseInt(canvas.width/2)+24, y: parseInt(canvas.height)-16, speed: 200};
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
        if(fireFlag){
            attacco.forEach((el) => {
                canvasContex.drawImage(imgFire, el.x, el.y);
            })
        }
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
        if(32 in keysDown){
            fire.x = navicella.x+12;
            fire.y = parseInt(canvas.height)-16;
            attacco[attacco.length] = Object.assign({}, fire);
        }else{
            attacco.forEach((el, index) => {
                if(el.y > 20){
                    el.y -= el.speed * modifier;
                }else{
                    attacco.splice(index,1);
                }
            });
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