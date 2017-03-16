var square = $(".square");

var snake = [10,11,12,13,14,24,34,44,54]
// 1 is right, -1 is left, 10 is down, and -10 is up
var direction = 10
var counter = 0

// CLICK LISTENERS
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        direction = -10
    }
    else if (e.keyCode == '40') {
        // down arrow
        direction = 10
    }
    else if (e.keyCode == '37') {
       // left arrow
       direction = -1
    }
    else if (e.keyCode == '39') {
       // right arrow
       direction = 1
    }

}


function renderSnake(){
	for (var i = 0; i < square.length; i++) {
		square[i].style.background = "white"
	};
	for (var i = 0; i < snake.length; i++) {
		square[snake[i]].style.background = "blue"
	};
}

function updateList(){
	var current = snake[snake.length - 1]
	console.log(current)
	snake.push(current + direction)
	if(counter != 10){
		snake.shift();
		
	}else{
		counter = 0
	}
	
	
}



var interval = window.setInterval(function(){
	updateList()
	renderSnake()
	counter ++
	
},400)
