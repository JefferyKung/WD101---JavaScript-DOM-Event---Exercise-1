//solution goes here....

const addItemInput = document.querySelector('#add-btn')
const itemUL = document.querySelector('#list')
const noteInput = document.querySelector('#add-input')

// console.log(addItemInput)

const wholeSetOfLi = function(e){
    console.log(e);
    const h1 = document.querySelector('h1')
    h1.style.color = this.style.backgroundColor
}


addItemInput.addEventListener('click', function(e){
    e.preventDefault()
    const newItem = document.createElement('li')  //創造顯示的欄位
    const inputValue = noteInput.value 

    newItem.innerHTML = '<p>'+inputValue+'</p><p><i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i></p>';
    //新東西裡面的內容
    itemUL.appendChild(newItem) //把東西加在上面欄位
    this.value = ""
    
})

