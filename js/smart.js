function searchMove() {
	var total_robot = checkTurn_count(1);
	if(total_robot > 1){
		var completed = false;
		if(completed === false) completed = completeRow(0,1);
		if(completed === false) completed = completeRow(1,1);
		if(completed === false) completed = completeRow(2,1);
		if(completed === false) completed = completeColumn(0,1);
		if(completed === false) completed = completeColumn(1,1);
		if(completed === false) completed = completeColumn(2,1);
		if(completed === false) completed = completeRow(1,1);
		if(completed === false) completed = completeDiag(1,1);
		if(completed === false) completed = completeDiag(-1,1);
		if(completed === false) completed = completeRow(0,2);
		if(completed === false) completed = completeRow(1,2);
		if(completed === false) completed = completeRow(2,2);
		if(completed === false) completed = completeColumn(0,2);
		if(completed === false) completed = completeColumn(1,2);
		if(completed === false) completed = completeColumn(2,2);
		if(completed === false) completed = completeRow(1,2);
		if(completed === false) completed = completeDiag(1,2);
		if(completed === false) completed = completeDiag(-1,2);
		if(completed === false) {	
			if(total_robot === 3){
				var cellFind = false, x, y;
				while(cellFind === false) {
					x = randNum(); y = randNum();
					if (board[x][y] === 1 && checkBlock(x,y) === false) cellFind = true;
				}
				robot_selected_x = x;
				robot_selected_y = y;
				clearCell(x,y);
			}
			randomMove();
		}
	}else{
		randomMove();
	}
}

function completeRow(x, turn_value) {
	if(checkRow(x, turn_value) === 2){
		find_final = false;
		for(i=0; i < 3; i++){
			if(board[i][x] === 0) {
				find_final = true;
				find_final_x = i;
				find_final_y = x;
			}
		}
		// si esta vacia
		if (find_final === true) {
			// si hay 3 fichas
			if(checkTurn_count(turn_value) === 3){
				if(turn_value === 1) {
					// buscamos la perida y la borramos
					find_lost = false;
					for(i = 0; i < 3 && find_lost === false; i++){
						if(i != x){
							for(j = 0; j < 3 && find_lost === false; j++){
								if(board[j][i] === 1) {
									find_lost = true;
									find_lost_x = j;
									find_lost_y = i;
								}
							}
						}
					}
					robot_selected_x = find_lost_x;
					robot_selected_y = find_lost_y;
					clearCell(find_lost_x, find_lost_y);
				}else{
					// ficha de aquina que no bloque y la borramos
					var cellFind = false, r_x, r_y;
					while(cellFind === false) {
						r_x = randNum(); r_y = randNum();
						if (board[r_x][r_y] === 1 && checkBlock(r_x,r_y) === false) cellFind = true;
					}
					robot_selected_x = r_x;
					robot_selected_y = r_y;
					clearCell(r_x,r_y);
				}
			}
			// pintar la casilla final
			paintCell(find_final_x, find_final_y);
			return true;
			// return true
		}
		// sino return false
		else return false;
	}
	return false;
}

function completeColumn(x, turn_value) {
	if(checkColumn(x, turn_value) === 2){
		find_final = false;
		for(i=0; i < 3; i++){
			if(board[x][i] === 0) {
				find_final = true;
				find_final_x = x;
				find_final_y = i;
			}
		}
		// si esta vacia
		if (find_final === true) {
			// si hay 3 fichas
			if(checkTurn_count(turn_value) === 3){
				if(turn_value === 1) {
					// buscamos la perida y la borramos
					find_lost = false;
					for(i = 0; i < 3 && find_lost === false; i++){
						if(i != x){
							for(j = 0; j < 3 && find_lost === false; j++){
								if(board[i][j] === 1) {
									find_lost = true;
									find_lost_x = i;
									find_lost_y = j;
								}
							}
						}
					}
					robot_selected_x = find_lost_x;
					robot_selected_y = find_lost_y;
					clearCell(find_lost_x, find_lost_y);
				}else{
					// ficha de aquina que no bloque y la borramos
					var cellFind = false, r_x, r_y;
					while(cellFind === false) {
						r_x = randNum(); r_y = randNum();
						if (board[r_x][r_y] === 1 && checkBlock(r_x,r_y) === false) cellFind = true;
					}
					robot_selected_x = r_x;
					robot_selected_y = r_y;
					clearCell(r_x,r_y);
				}
			}
			// pintar la casilla final
			paintCell(find_final_x, find_final_y);
			return true;
			// return true
		}
		// sino return false
		else return false;
	}
	return false;
}

function completeDiag(x, turn_value) {
	if(checkDiag(x, turn_value) === 2){
		var find_final = false, find_final_x, find_final_y;
		if(board[1][1] === 0) {
			find_final_x = 1;
			find_final_y = 1;
			find_final = true;
		}
		if(board[(1 - x)][2] === 0) {
			find_final_x = (1 - x);
			find_final_y = 2;
			find_final = true;
		}
		if(board[(1 + x)][0] === 0) {
			find_final_x = (1 + x);
			find_final_y = 0;
			find_final = true;
		}
		// si esta vacia
		if (find_final === true) {
			// si hay 3 fichas
			if(checkTurn_count(turn_value) === 3){
				if(turn_value === 1) {
					// buscamos la perida y la borramos
					find_lost = false;
					for(i = 0; i < 3 && find_lost === false; i++){
					//	if(i != x){
							for(j = 0; j < 3 && find_lost === false; j++){
								if(i !== 1 || j !== 1  &&
									i !== (1 - x) || j !== 2 &&
									i !== (1 + x) || j !== 0 &&
									board[j][i] === 1) {
									find_lost = true;
									find_lost_x = j;
									find_lost_y = i;
								}
							}
					//	}
					}
					robot_selected_x = find_lost_x;
					robot_selected_y = find_lost_y;
					clearCell(find_lost_x, find_lost_y);
				}else{
					// ficha de aquina que no bloque y la borramos
					var cellFind = false, r_x, r_y;
					while(cellFind === false) {
						r_x = randNum(); r_y = randNum();
						if (board[r_x][r_y] === 1 && checkBlock(r_x,r_y) === false) cellFind = true;
					}
					robot_selected_x = r_x;
					robot_selected_y = r_y;
					clearCell(r_x,r_y);
				}
			}
			// pintar la casilla final
			paintCell(find_final_x, find_final_y);
			return true;
			// return true
		}
		// sino return false
		else return false;
	}
	return false;
}

function randomMove() {
	var cellAvailable = false, x, y;
	while(cellAvailable === false) {
		x = randNum(); y = randNum();
		if (board[x][y] === 0 && difMove(x,y)) cellAvailable = true;
	}
	paintCell(x,y);
}

function randNum() {
		return Math.round(Math.random() * 2);
}