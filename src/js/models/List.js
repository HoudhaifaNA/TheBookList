import uniqid from 'uniqid';

export default class List {

    constructor(){
     this.items = [];
    }


    addItem(bookName, dateCreated){

        const item = {
         id: uniqid(),
         bookName,
         dateCreated,

        }
        this.items.push(item);
 
        this.pushData();

        return item;
    }

    deleteItem(id){
        const index = this.items.findIndex(el => el.id === id);
        this.items.splice(index, 1)
        this.pushData();
    }

    pushData(){
    localStorage.setItem('books', JSON.stringify(this.items));
    }

    getDataFromStorage(){
    const storage = JSON.parse(localStorage.getItem('books'));
    
    if(storage) this.items = storage;
    }
}  