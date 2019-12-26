import {elements} from './base'
import  list from './models/List';
import * as listView from '../js/views/listView'




const state = {};

//Add new List

 

 

const listController = () => {
    
    const bookName = elements.input.value;
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();  

    const dateCreated =  `${month}-${day}-${year}`;
         
    if(bookName.length !== 0) {
    // 1. Add item to the List
    state.list.addItem(bookName, dateCreated)  
    
    // 2. Add item to the UI
    const items = state.list.items;

    listView.addBook(items[items.length - 1]);  
    
    
    //if the user didn't type the name of book .
    }else {listView.alert()}; 
};

//When the user start typing remive the alert 
elements.input.addEventListener('keyup', () => {
    if(elements.input.value.length > 0){
        listView.clearAlert();
    }
})



// REMOVING AN ELEMENT
elements.bookList.addEventListener('click', event => {
    // 1. Get id from the dataset in the element
    const id = event.target.closest('.user__item').dataset.id;
    
   if(event.target.matches('.remove__item, .remove__item *')){
    
    // 2. Remove the element from the list
    state.list.deleteItem(id);

    // 3. Remove the element from UI
    listView.deleteItem(id) 
 
    };
    
});  


window.addEventListener('load', () => {

    state.list = new list();
  
    state.list.getDataFromStorage();
    
    state.list.items.forEach(book => listView.addBook(book));

});

//Add element when user click on the button or enter key
elements.button.addEventListener('click', listController);
document.addEventListener('keypress', event => {
   
    if(event.keyCode === 13) listController();
})

