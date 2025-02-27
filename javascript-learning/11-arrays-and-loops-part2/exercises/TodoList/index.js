//use localStorage FIXME:使用JSON获取数据！！！
const todoItems = JSON.parse(localStorage.getItem('todoItems')) || [{
    todoInputName: 'Finish the TodoList by your own',
    todoInputDueDate: '2025.2.27'
}];

renderTodoItems(todoItems);
function addTodoItem() {
    //Get the value from input
    const todoInputNameElement = document.querySelector('.todo-input-name');
    const todoInputName = todoInputNameElement.value || 'something to do';
    // console.log(todoInputName);
    const todoInputDueDateElement = document.querySelector('.todo-input-dueDate');
    const todoInputDueDate = todoInputDueDateElement.value || '2025-01-01';
    // console.log(todoInputDueDate);

    //group these two values into an object
    const todoItem = {
        todoInputName,
        todoInputDueDate
    };

    //add todoItem into arrays
    todoItems.push(todoItem);

    //update localStorage FIXME:使用JSON去存储数据！！！
    localStorage.setItem('todoItems',JSON.stringify(todoItems));
    renderTodoItems(todoItems);
}

function removeTodoItem(i) {
    // console.log("remove");
    todoItems.splice(i, 1);
    //update localStorage FIXME:使用JSON去存储数据！！！
    localStorage.setItem('todoItems',JSON.stringify(todoItems));
    //render
    renderTodoItems(todoItems);
}

//render the todo item show place
function renderTodoItems(todoItems) {
    // console.log(todoItems);
    // insert the value into a template string to write a html code and use loop to create all of them
    let todoItemsHTML = '';
    for (let i = 0; i < todoItems.length; i++) {
        const { todoInputName, todoInputDueDate } = todoItems[i];
        todoItemsHTML += `
        <p class="todo-item-tile">${todoInputName}</p>
        <p class="todo-item-dueDate">${todoInputDueDate}</p>
        <button class="todo-item-delete-button" onclick="removeTodoItem(${i});" ">Delete</button>
        `
    }
    //render on the page
    const todoItemElement = document.querySelector('.todo-item');
    todoItemElement.innerHTML = todoItemsHTML;
}