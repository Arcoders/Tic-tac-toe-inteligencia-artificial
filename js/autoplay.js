var board = new Array(3);
var cell, turn;
var user_selected_x, user_selected_y;
var robot_selected_x, robot_selected_y;

function clearCell(x, y) {	
	board[x][y] = 0;
	cell = document.getElementById('c' + x + y);
	cell.innerHTML = '';
}

function clearBoard() {
	for(var i = 0; i < 3; i++) {
		for(var j = 0; j < 3; j++) {
			clearCell(i, j);
		}
	}
}

function paintCell(x, y) {
	cell = document.getElementById('c' + x + y);
	cell.innerHTML = "<img src='img/" + turn + ".png'></img>";
	if (turn === 'robot') {
		board[x][y] = 1;
		robot_selected_x = x;
		robot_selected_y = y;
		checkLine();
		turn = 'user';
	}else{
		board[x][y] = 2;
		user_selected_x = x;
	    user_selected_y = y;
	    checkLine();
		turn = 'robot';
	}
}

function checkCell(x, y) {
	var total_user = checkTurn_count(2);
	if(total_user === 3) {
		if (board[x][y] === 2) {
			user_selected_x = x;
	    	user_selected_y = y;
			clearCell(x, y);
		}
	}else{
		if (board[x][y] === 0 && difMove(x, y)) selectCell(x, y);
	}
}

function selectCell(x, y) {
	paintCell(x,y);
	searchMove();
	console.log('c' + x + y);
}

function autoplay() {
	for(var i = 0; i < 3; i++) {
		board[i] = new Array(3);
	}
	turn = 'robot';
			user_selected_x = 4;
	    	user_selected_y = 4;
	    	robot_selected_x = 4;
			robot_selected_y = 4;
	clearBoard();
	searchMove();
}

autoplay();

/*

	vacia = 0;
	robot = 1;
	user = 2;

	c02 - c12 - c22
	c01 - c11 - c21
	c00 - c10 - c20

	robot ===> robot.png
	user ===> user.png


*/
