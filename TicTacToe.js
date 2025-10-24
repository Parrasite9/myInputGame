import promptSync from "prompt-sync";
const prompt = promptSync();

let positions = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const WIN_TRIPLES = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // rows
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // columns
	[0, 4, 8],
	[2, 4, 6], // diagonals
];

function checkWinner(positions) {
	for (const [a, b, c] of WIN_TRIPLES) {
		if (
			positions[a] &&
			positions[a] === positions[b] &&
			positions[b] === positions[c]
		) {
			return positions[a]; // returns "x" or "o"
		}
	}
	return null;
}

const winner = checkWinner(positions);

if (winner === "x") {
	console.log("X wins!");
} else if (winner === "o") {
	console.log("O wins!");
} else {
	console.log("No winner yet.");
}

function startGame() {
	console.log(`
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡆⠀⠀⠀⠀⠀⠀⠀⠀⣾⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀0⠀⠀⠀⢸⡇⠀⠀⠀1⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀2⠀⠀⠀⠀⠀
        ⠀⠀⢀⣀⣀⣀⣀⣀⣀⣸⣇⣀⣀⣀⣀⣀⣀⣀⣀⣿⣇⣀⣀⣀⣀⣀⣀⡀⠀⠀
        ⠀⠀⠙⠛⠛⠛⠛⠛⠛⢻⡟⠛⠛⠛⠛⠛⠛⠛⠛⣿⡟⠛⠛⠛⠛⠛⠛⠃⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀3⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀4⠀⠀⠀⣿⡇⠀⠀⠀⠀5⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⢀⣀⣀⣀⣀⣀⣀⣸⣇⣀⣀⣀⣀⣀⣀⣀⣀⣿⣇⣀⣀⣀⣀⣀⣀⡀⠀⠀
        ⠀⠀⠈⠉⠉⠉⠉⠉⠉⢹⡏⠉⠉⠉⠉⠉⠉⠉⠉⣿⡏⠉⠉⠉⠉⠉⠉⠁⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀6⠀⠀⠀⠀⢸⡇⠀⠀⠀7⠀⠀ ⠀⣿⡇⠀⠀⠀⠀⠀8⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠇⠀⠀⠀⠀⠀⠀⠀⠀⢿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            `);

	turnSequence();
}

function turnSequence() {
	let positions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	myTurn();

	function myTurn() {
		renderBoard();
		let choosePosition = prompt("Which Position Would You Like? ");

		positions.forEach((position) => {
			let numberToRemove = position;
			if (choosePosition == position) {
				console.log("Number is present");
				// positions.splice(numberToRemove, position);
				positions[numberToRemove] = "o";
				console.log(positions);
			} else {
				console.log("That position is not available, try again.");
				myTurn();
			}
		});
	}

	cpuTurn();

	function cpuTurn() {
		console.log("CPU thinking....");
		const randomIndex = Math.floor(Math.random() * positions.length);

		if (typeof randomIndex != "string") {
			positions.forEach((position) => {
				let numberToRemove = position;
				if (randomIndex == position) {
					console.log("Number is present");
					positions[numberToRemove] = "x";
					console.log(positions);
				}
			});
		} else {
			cpuTurn();
		}
	}

	// checkWinner();
	turnSequence();

	// if (choosePosition is NOT available in positions) {
	//     console.log("That position is not available. Please try another position");
	// }
}

startGame();
