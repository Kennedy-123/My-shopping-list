const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearAllBtn = document.querySelector('.btn-clear')
const filter = document.getElementById('filter')
let itemsFromStorage;
let storageItem;

displayItems = () => {
  const storageItem = getItemFromStorage();
  storageItem.forEach((item) => {

  })
}

addItemDom = () => {

  //create list item
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(itemInput.value))
  // add to storage
  let newItem = itemInput.value

  // let itemsFromStorage;

  if(localStorage.getItem('items') === null){
    itemsFromStorage = [];
  }else{
    itemsFromStorage = JSON.parse(localStorage.getItem('items'))
  }

  //add item to array
  itemsFromStorage.push(newItem)

  //convert to json string and set to local storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage))
  //end

  //create button
  const newButton = document.createElement('button')
  newButton.className = 'remove-item btn-link text-red';
  //end

  //create icon
  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark'
  //end
  
  // append
  newButton.appendChild(icon)
  li.appendChild(newButton)

  itemList.appendChild(li)
  
  //end
  itemInput.value = ''

  checkUI()
}

addItem = (e) => {
  e.preventDefault();
  // validate input
  if(itemInput.value === ''){
    alert('please add an item');
  }else{
    addItemDom()
  }
}

clearAll = () => {
  itemList.remove()
  checkUI()
}

removeItem = (e) => {
  if(e.target.parentElement.classList.contains('remove-item')){
    e.target.parentElement.parentElement.remove()
    checkUI()
  }
}

getItemFromStorage = () => {
  const itemName = itemInput.value
  if(localStorage.getItem('items') === null){
    storageItem = [];
  }else{
    storageItem = JSON.parse(localStorage.getItem('items'))
  }

  storageItem.push(itemName)

  localStorage.setItem('items', JSON.stringify(storageItem));
  return
}

checkUI = () => {
  const itemList = document.querySelectorAll('li')
  if(itemList.length === 0){
    filter.style.display = 'none'
    clearAllBtn.style.display = 'none'
  }else{
    filter.style.display = 'block'
    clearAllBtn.style.display = 'block'
  }
}

//filter item
filterItem = (e) => {
  const itemList = document.querySelectorAll('li')
  const text = e.target.value.toLowerCase();
  
  itemList.forEach(item => {
    const itemName = item.firstChild.textContent.toLowerCase();
    
    if(itemName.indexOf(text) != -1) {
      item.style.display = 'flex';
    }else{
      item.style.display = 'none';
    }
  })
}
//end

//EventListener
itemForm.addEventListener('submit', addItem);
clearAllBtn.addEventListener('click', clearAll);
itemList.addEventListener('click', removeItem);
filter.addEventListener('input', filterItem)
window.addEventListener('DOMContentLoaded', checkUI)
document.addEventListener('DOMContentLoaded', displayItems)

// checkUI()