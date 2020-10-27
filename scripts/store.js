const items = [];
const hideCheckedItems = false;

export default {
    items,
    hideCheckedItems,
    findById
};

function findById(id) {
    //console.log(id, this)
    return this.items.find(item => item.id === id);
}

function addItem(name) {
    try {
        item.validateName(name);
        this.items.push(item.create(name));
    } catch (e) {
        return console.log(`Cannot add Item: ${e.message}`)
    }
    console.log
}

function findAndDelete(id) {

}


import item from './item.js';