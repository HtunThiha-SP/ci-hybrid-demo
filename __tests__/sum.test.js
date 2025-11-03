const sum = require('../src/sum.js');

test("add 2 + 2 = 4", () => {
    expect(sum(2, 2)).toBe(5);
});