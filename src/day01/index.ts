// Read Input
const fs = require('fs');
const data = fs.readFileSync('./assets/day1.txt', {
	encoding: 'utf8',
	flag: 'r',
});

const parse = (s: string) => s.split('\n').map((s) => parseInt(s));

export function countIncreases(s: string) {
	return parse(s).filter((value, index, number) => value > number[index - 1])
		.length;
}

export function sumMeasurements(s: string) {
	let counter = 0;
	let prevNumber = 0;
	parse(s).forEach((value, index, number) => {
		const sum = value + number[index + 1] + number[index + 2];
		if (index === 0) prevNumber = sum;
		if (sum > prevNumber) counter++;
		prevNumber = sum;
	});
	return counter;
}

//console.log(countIncreases(data));
//console.log(sumMeasurements(data));
