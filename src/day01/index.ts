// Read Input
const fs = require('fs');
const data = fs.readFileSync('./assets/day1.txt', {
	encoding: 'utf8',
	flag: 'r',
});

const parse = (s: string) => s.split('\n').map((s) => parseInt(s));

export function countIncreases(s: string) {
	return parse(s).filter((value, index, array) => value > array[index - 1])
		.length;
}

exports.first = countIncreases;
