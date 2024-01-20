const squares = document.querySelectorAll("[data-square]");
const game = document.querySelectorAll("#board")
const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
let circleTurn
const WINNING_COMBINATIONS = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8]
	[2,4,6]
]

startGame()

function startGame(){
	circleTurn = false;
	squares.forEach(square => {
		square.addEventListener("click", handleClick, {once: true})
	
	})
	setGameHoverClass()
}

function handleClick(e){
 const cell = e.target;
 const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
 placeMark(cell, currentClass)
 if(checkWin()


 swapTurns()
 setGameHoverClass()
}


function placeMark(cell, currentClass){
	cell.classList.add(currentClass)
}

function swapTurns(){
	circleTurn = !circleTurn;
}



function setGameHoverClass(){
	game.classList.remove(X_CLASS)
	game.classList.remove(CIRCLE_CLASS)
	if(circleTurn){
		game.classList.add(CIRCLE_CLASS)
	}else{
		game.classList.add(X_CLASS)
	}
}



// 	const square = 
// clickCount++;
// if(clickCount % 2 === 1){
//   square.classList.add("circle");

// }else{
// 		square.classList.remove('circle')
// 		square.classList.add("x");

// }

// if(clickCount>= 4){
// 	clickCount= 0;
// }


// }