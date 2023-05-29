const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearAllBtn = document.querySelector('.btn-clear')
const filter = document.getElementById('filter')

addItemDom = () => {

  //create list item
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(itemInput.value))
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
  
  checkUI()
  //end
  itemInput.value = ''
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

checkUI()

localStorage.setItem('name', 'chidera')

console.log(localStorage.getItem('name'))
// localStorage.removeItem('name')
localStorage.clear()