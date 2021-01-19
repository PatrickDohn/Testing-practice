// test driven examples
class Backpack  {
    constructor(name) {
        this.name = name
        this.items = []
    }

    add(str) {
        this.items.push(str)
        return this.items
    }

    empty() {
        this.items = []
    }

    remove(str) {
        let index = this.items.indexOf(str)
        if(index !== -1) {
            this.items.splice(index, 1)
        }
    }
}

const PatBackPack = new Backpack('PatsPack')

console.log('name of backpack should be PatsPack \n', PatBackPack.name === 'PatsPack')

// ------

PatBackPack.add('book')

console.log('book was added to backpack \n', PatBackPack.items.length === 1)
PatBackPack.add('pencil')
console.log('pencil was added to backpack \n', PatBackPack.items.length === 2)

PatBackPack.empty()
console.log('all items were removed from backpack \n', PatBackPack.items.length === 0)

PatBackPack.name = 'MyBackPack'
console.log('name of backpack changed to MyBackPack \n', PatBackPack.name === 'MyBackPack')

PatBackPack.add('book')
PatBackPack.add('pen')
PatBackPack.add('pencil')
PatBackPack.add('book')
const expectedItems = ['book', 'pen', 'pencil', 'book']
console.log('the items should be book, pen, pencil, book\n', JSON.stringify(PatBackPack.items) === JSON.stringify(expectedItems))

PatBackPack.remove('pen')
const expectedItems1 = ['book', 'pencil', 'book']
console.log('items should be book, pencil, book \n', JSON.stringify(PatBackPack.items) === JSON.stringify(expectedItems1))

PatBackPack.remove('lunch')
const expectedItems2 = ['book', 'pencil', 'book']
console.log('items should be book, pencil, book \n', JSON.stringify(PatBackPack.items) === JSON.stringify(expectedItems2))


// -----

console.log(PatBackPack)
