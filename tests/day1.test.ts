import { countIncreases } from '../src/day01/index';

const testInput1 = `199
200
208
210
200
207
240
269
260
263`;

test('day1 - first part', () => {
	expect(countIncreases(testInput1)).toBe(7);
});
