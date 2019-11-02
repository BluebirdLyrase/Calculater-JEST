const calculator = require('./calculator');



test('return 3 when input is x=1 and b=2', () => {
    expect(calculator.add(1,2)).tobe(3);
});