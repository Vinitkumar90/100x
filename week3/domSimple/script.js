const list = document.querySelector(".todo-list")


function addTodo(){
    const input = document.querySelector("#input")
    const value = input.value;

    const todoDiv = createTodoDiv();
    const inputElement = inputEle(value);
    const updatebtn = updateButton(inputElement);
    const deletebtn = deleteButton(todoDiv);

    todoDiv.appendChild(inputElement);
    todoDiv.appendChild(updatebtn);
    todoDiv.appendChild(deletebtn)

    list.appendChild(todoDiv)
    input.value = "";
}

function createTodoDiv(){
    const todo = document.createElement("div");


    return todo;
}


function inputEle(value){
    const input = document.createElement("input");
    input.value = value;

    input.readOnly = true;
    
    return input;
}


function updateButton(inputElement){
    let btnUpdate = document.createElement("button");
    btnUpdate.textContent = "edit";

    btnUpdate.onclick = function(){
        if(btnUpdate.textContent == "edit"){
            btnUpdate.textContent = "save";
            inputElement.focus();
            inputElement.readOnly = false;
        }else{
            btnUpdate.textContent = "edit";
            inputElement.readOnly = true;
        }
    }

    return btnUpdate;
}


function deleteButton(todoDiv){
    let delBtn = document.createElement("button");
    delBtn.textContent = "delete";

    delBtn.onclick = function(){
        list.removeChild(todoDiv);
    }
    

    return delBtn;
}