import { calculatePosition } from '../src/day02/index';

const testInput1 = `
forward 5
down 5
forward 8
up 3
down 8
forward 2`;

test('day2 - first part', () => {
	expect(calculatePosition(testInput1)).toBe(150);
});
