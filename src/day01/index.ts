console.log('day 1!');
const fs = require('fs');

const data = fs.readFileSync('./assets/day1.txt', {
	encoding: 'utf8',
	flag: 'r',
});

console.log(data);
