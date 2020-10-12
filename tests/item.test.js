const Item = require('./item');

describe('item', ()=> {
    test('prices assign correctly', () => {
        const myItem = new Item('cake', 5)
        expect(myItem.price).toEqual(5);
    })
    test('dish name assign correctly', () => {
        const myItem = new Item('cake', 5)
        expect(myItem.dish).toEqual('cake');
    })
})


