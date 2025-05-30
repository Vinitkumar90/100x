
let list = document.querySelector(".list")

function addTodo(){
    const input = document.querySelector("input");
    const value = input.value;

    let newDiv = newDivEle();

    let newInput = newInputele(value)
    newDiv.appendChild(newInput);
    newDiv.appendChild(newDeleteButton(newDiv))
    newDiv.appendChild(newUpdateBtn(newInput))

    list.appendChild(newDiv)
    input.value = ""
}

function newDivEle(){
    let newDiv = document.createElement("div");
    newDiv.style.width = "300px";
    newDiv.style.padding = "5px";
    newDiv.style.backgroundColor = "red";

    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.gap = "4px";
    newDiv.style.marginBottom = "4px";

    return newDiv;
}

function newInputele(input){
    let newInput = document.createElement("input");
    newInput.value = input;
    newInput.readOnly = true;
    newInput.style.border = 0;

    return newInput;
}

function newDeleteButton(newDiv){
    let btn = document.createElement("button");
    btn.textContent = "delete";

    btn.onclick = function(){
        newDiv.remove();
    }

    return btn;
}

function newUpdateBtn(newInput){
    let upbtn = document.createElement("button");
    upbtn.textContent = "update";

    upbtn.onclick = function(){
        if(upbtn.textContent == "update"){
            upbtn.textContent = "save";
            newInput.focus();
            newInput.readOnly = false;
        }
        else{
            upbtn.textContent = "update";
            newInput.readOnly = true;
        }
    }


    return upbtn;
}