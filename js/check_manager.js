function checkRow(x, value) {
	var count_value = 0;
	for(var i = 0; i < 3; i++) {
		if(board[i][x] === value) count_value++;
	}
	return count_value;
}

function checkColumn(y, value) {
	var count_value = 0;
	for(var i = 0; i < 3; i++) {
		if(board[y][i] === value) count_value++;
	}
	return count_value;
}

function checkDiag(d, value) {
	var count_value = 0;
	if(board[1 + d][0] === value) count_value++;
	if(board[1][1] === value) count_value++;
	if(board[1 - d][2] === value) count_value++;
	return count_value;
}

function checkLine() {
	var value = (turn === 'robot') ? 1 : 2;
	if(checkRow(0, value) === 3 || checkRow(1, value) === 3 || checkRow(2, value) === 3) {
		console.log('Fichas ===> ' + turn + ' Ha ganado... Row');
	}
	if(checkColumn(0, value) === 3 || checkColumn(1, value) === 3 || checkColumn(2, value) === 3) {
		console.log('Fichas ===> ' + turn + ' Ha ganado... Column');
	}
	if(checkDiag(1, value) === 3 || checkDiag(-1, value) === 3) {
		console.log('Fichas ===> ' + turn + ' Ha ganado... Diag');
	}
}

function checkTurn_count(turn_value) {
	var turn_count = 0;
	for(var i = 0; i < 3; i++) {
		for(var j = 0; j < 3; j++) {
			if(board[i][j] === turn_value) turn_count++;
		}
	}
	console.log('hay ===> ' + turn_count + ' fichas');
	return turn_count;
}

function difMove(x, y) {
	var diferent = false;
	if(turn === 'user') {
		if(x != user_selected_x || y != user_selected_y) diferent = true;
	}else{
		if(x != robot_selected_x || y != robot_selected_y) diferent = true;
	}
	return diferent;
}

function checkBlock(x, y) {
	if (checkRow(y, 1) === 1 && checkRow(y,2) === 2) return true;
	if (checkColumn(x, 1) === 1 && checkColumn(x,2) === 2) return true;
	if(x === 0 && y === 2 || x === 1 && y === 1 || x === 2 && y === 0) {
		if(checkDiag(1,1) === 1 && checkDiag(1,2) === 2) return true;
	}
	if(x === 0 && y === 0 || x === 1 && y === 1 || x === 2 && y === 2) {
		if(checkDiag(-1,1) === 1 && checkDiag(-1,2) === 2) return true;
	}
	return false;
}

