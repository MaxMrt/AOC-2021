import { calculatePosition, calculateAim } from '../src/day02/index';

const testInput = `
forward 5
down 5
forward 8
up 3
down 8
forward 2`;

test('day2 - first part', () => {
	expect(calculatePosition(testInput)).toBe(150);
});

test('day2 - second part', () => {
	expect(calculateAim(testInput)).toBe(900);
});
