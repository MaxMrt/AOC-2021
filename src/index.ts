const day = parseInt(process.argv[2], 10);
if (Number.isNaN(day) || day < 1 || day > 25) {
	console.error('You have to choose a day between 1 and 25');
	process.exit(0);
}
const type = process.argv[2].slice(-1) === '+' ? 'second' : 'first';
const formattedDay: string = `day${day.toString().padStart(2, '0')}`;
const file: string = `./${formattedDay}/index.ts`;
const callback: string = require(file)[type];
