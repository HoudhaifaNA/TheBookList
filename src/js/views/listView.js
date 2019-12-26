import {elements} from '../base'


const limitText = (text, limit = 15) => {
     let newTitle;    
   
     if (text.length >= limit) {
       newTitle = text.split('').slice(0, limit);  
 
       newTitle = `${newTitle.join('')}...`;
     } else { 
       newTitle = text;    
     }   
 
     return newTitle;
   };
       
   
export const addBook = name => {
     
  

     const markup = ` 
     <li class="user__item" data-id=${name.id}>
     </span>${limitText(name.bookName)} <span class="date">${name.dateCreated}</span><span class="remove__item"><img src="./img/remove.png" class="remove--img" alt="remove item"></span>
     <span class="user__item--num"> &nbsp;
     </li>     
     `;  
     

     // 1) Add Element to the list
     elements.bookList.insertAdjacentHTML('beforeend', markup)
     
     // 2) Clear the input field after element added
     elements.input.value = '';
}



export const deleteItem = id => {
     const item = document.querySelector(`[data-id="${id}"]`)
     item.parentNode.removeChild(item);
}
 
export const alert = () => {
     elements.error.style.display = 'block';
}

export const clearAlert = () => {
     elements.error.style.display = 'none';
}