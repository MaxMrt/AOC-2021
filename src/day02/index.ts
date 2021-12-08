// Read Input
const fs = require('fs');
const data = fs.readFileSync('./assets/day2.txt', {
	encoding: 'utf8',
	flag: 'r',
});

// Definition
enum Direction {
	forward = 'forward',
	down = 'down',
	up = 'up',
}

//Object
interface Command {
	direction: string;
	unit: number;
}

// Parse Input to Object
let parse = function (s: string): Command[] {
	return s.split('\n').map((element) => {
		return {
			direction: element.split(' ')[0],
			unit: parseInt(element.split(' ')[1]),
		};
	});
};

// Part 1
export function calculatePosition(s: string) {
	let horizontal = 0;
	let depth = 0;

	parse(s).forEach((element) => {
		switch (element.direction) {
			case Direction.forward: {
				horizontal += element.unit;
				break;
			}
			case Direction.up: {
				depth -= element.unit;
				break;
			}
			case Direction.down: {
				depth += element.unit;
				break;
			}
		}
	});

	return horizontal * depth;
}

//console.log(calculatePosition(data));
