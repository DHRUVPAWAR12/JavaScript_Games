const  grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('.results');
const width = 15;

const aliensRemoved = [];
let currentShooterIndex = 202;
for(let i = 0; i< width * width; i++){
    const squares = document.createElement('div');
    
    grid.appendChild(squares);
}
const squares =     Array.from(document.querySelectorAll('.grid div'));

console.log(squares);

const alignInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
]
function draw(){
    for(let i = 0; i< alignInvaders.length; i++){
        if(!aliensRemoved.includes(i)){
            squares[alignInvaders[i]].classList.add('invader');
        }
   
    }   
}
draw();

squares[currentShooterIndex].classList.add('shooter');
function moveShooter(e){
    squares[currentShooterIndex].classList.remove('shooter');
    switch(e.key){
        case 'ArrowLeft':
            if(currentShooterIndex % width !== 0)
            {
                currentShooterIndex -= 1;
                break;
            }
    }
    squares[currentShooterIndex].classList.add('shooter');
}
document.addEventListener('keydown',moveShooter);