class Menu {
    constructor(title){
        this.title = title;
        this.items =[]
    }
    addItem(item){
         this.items.push(item)
         return this
    }
}
module.exports = Menu;