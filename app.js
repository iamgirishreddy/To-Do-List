//selectors 
const todoInput =document.querySelector('.todo-input');
const todoButton =document.querySelector('.todo-button');
const todoList =document.querySelector('.todo-list');

//event listeneres
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click', deleteCheck)

//functions

function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    
    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add ='todo-list'
    todoDiv.appendChild(newTodo);
    //complete bbutton
    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    completeButton.innerHTML ='<i class="fas fa-check"></i>';
    todoDiv.appendChild(completeButton);
    //trash button
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    todoDiv.appendChild(trashButton);
        //Append to List
    todoList.appendChild(todoDiv);
    
     // clear todo Input Value 
     todoInput.value=''
;




}
function deleteCheck(e){
    const item = e.target;
    //Delete TODO
    if(item.classList[0]==='trash-btn'){
     const todo = item.parentElement;
     //Animation
     todo.classList.add('fall');
     todo.addEventListener('transitionend', function(){
       todo.remove();
     });
     //todo.remove();
    }

    //check mark
 if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
    }
 }

 