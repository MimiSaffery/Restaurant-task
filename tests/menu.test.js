const Menu = require('./menu'),
      Item = require('./item');


describe('Menu', ()  => {
    test('Menu title assign correctly', () => {
        const Breakfast = new Menu('Breakfast');
        expect(Breakfast.title).toEqual('Breakfast');
    })
    /*
    test('Menu assign correctly', () => {
        const Breakfast = new Menu('Breakfast');
        const item1 = new Item('cake', 5)
        const item2 = new Item('waffles', 9.50)
        const item3 = new Item('pancake', 8.75)
        Breakfast.addItem(item1, item2, item3);
        expect(Breakfast.items.length).toBe(3)
    })
    */
    test('price assign correctly', () => {
        const Breakfast = new Menu('Breakfast');
        item1 = new Item('cake', 5)
        Breakfast.addItem(item1)
        expect(typeof(Breakfast.item1.price)== 'number').toBeTruthy()
    })

} )