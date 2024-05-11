let userInput = document.getElementById('anyInput');
let showDiv = document.getElementById('showData');

let localCounter = localStorage.length;
console.log(`length is : ${localCounter}`);


if(localCounter > 0){
    for(let i=0; i<localCounter;i++){
        let localItem = localStorage.getItem(i);
        let localLiElement = document.createElement('li');
        localLiElement.innerText = localItem;
        let localDeleteBtn = document.createElement('button');
        localDeleteBtn.innerText = 'Delete';
        localDeleteBtn.addEventListener('click', function(){
            handleDelete(i);
        });
        localLiElement.appendChild(localDeleteBtn);
        showDiv.appendChild(localLiElement);
    }
}


function submitHandler(event){
    event.preventDefault();
    localStorage.setItem(localCounter,userInput.value);
    localCounter++;
    dataList();
    userInput.value = '';
}

function dataList(){
    let liElement = document.createElement('li');
    liElement.innerText = userInput.value;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', function() {
        // Get the index of the li element
        let index = Array.from(showDiv.children).indexOf(liElement);
        handleDelete(index);
    });
    liElement.appendChild(deleteBtn);
    showDiv.appendChild(liElement);
}

function handleDelete(index){
    let key = localStorage.key(index);
    console.log('Key of selected item:', key);
    localStorage.removeItem(key);
    // Remove item from the DOM
    showDiv.removeChild(showDiv.children[index]);
 }

function clearLocalStorage(){
     localStorage.clear();
     while(showDiv.firstChild){
        showDiv.removeChild(showDiv.firstChild);
     }
}