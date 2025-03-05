describe('Test suite: convertMoney', () => {
    it('Basic test',() => {
        expect(convertMoney(4096)).toEqual(40.96);
    });
    it('0 test',() => {
        expect(convertMoney(0)).toEqual(0.00);
    });
    it('float and round test',() => {
        expect(convertMoney(409.6)).toEqual(4.10);
    });
});