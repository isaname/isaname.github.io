let canvas = document.getElementsByTagName("canvas");
let pen = canvas[0].getContext("2d");
canvas[0].width=600;
canvas[0].height=600;
let _snake = [];
let _food = {
    x: parseInt(Math.random()*30),
    y: parseInt(Math.random()*30)
};
let direciton = {
    x: 1,
    y: 0
};
document.onkeydown = (e) => {
    switch(e.key){
        case 'w':
            if (direciton.y!=1){
                direciton.y=-1;
                direciton.x=0;
            }
            break;
        case 'a':
            if (direciton.x!=1){
                direciton.x=-1;
                direciton.y=0;
            }
            break;
        case 's':
            if (direciton.y!=-1){
                direciton.y=1;
                direciton.x=0;
            }
            break;
        case 'd':
            if (direciton.x!=-1){
                direciton.x=1;
                direciton.y=0;
            }
            break;    
    }
}

const begin = () => {
    _snake=[];
    for(let i=0; i<5; i++){
        _snake.push({x:5,y:5});
    }
    direciton = {
        x: 1,
        y: 0
    };
}


const draw = () => {
    pen.fillStyle="yellow";
    for(let i = 0; i < 30; i++) {
        for(let j = 0; j<30; j++){
            pen.fillRect(j*20,i*20,18,18);
        }
    }
    pen.fillStyle="green";
    for(let i=0; i<_snake.length; i++){
        pen.fillRect(_snake[i].x*20,_snake[i].y*20,18,18);
    }
    pen.fillStyle="red";
    pen.fillRect(_food.x*20,_food.y*20,18,18);
}



const move = () => {
    draw();
    let newPostion = {}
    switch(_snake[0].x+direciton.x){
        case -1:
            newPostion.x=29;
            break;
        case 30:
            newPostion.x=0;
            break;
        default:
            newPostion.x=_snake[0].x+direciton.x;
    }
    switch(_snake[0].y+direciton.y){
        case -1:
            newPostion.y=29;
            break;
        case 30:
            newPostion.y=0;
            break;
        default:
            newPostion.y=_snake[0].y+direciton.y;
    }
    _snake.splice(0,0,{
        x:newPostion.x,
        y:newPostion.y
    });
    if (_snake[0].x==_food.x && _snake[0].y == _food.y) {
        _food = {
            x: parseInt(Math.random()*30),
            y: parseInt(Math.random()*30)
        };
        _snake.push({});
    }
    _snake.pop();
    for (let i=1;i<_snake.length;i++){
        if(_snake[0].x==_snake[i].x&&_snake[0].y==_snake[i].y){
            alert("game over!,您的得分是"+_snake.length);
            begin();
        }
    }
}
begin();
let hand=setInterval(move,100);

const restart = ()=> {
    begin();
}
const up = ()=> {
    if (direciton.y!=1){
        direciton.y=-1;
        direciton.x=0;
    }
}
const down = ()=> {
    if (direciton.y!=-1){
        direciton.y=1;
        direciton.x=0;
    }
}
const left = ()=> {
    if (direciton.x!=1){
        direciton.x=-1;
        direciton.y=0;
    }
}
const right = ()=> {
    if (direciton.x!=-1){
        direciton.x=1;
        direciton.y=0;
    }
}