const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

const TODOS_KEY="toDos"

let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos=toDos.filter((toDo)=> toDo.id !==parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo){
    const li=document.createElement("li");
    li.id=newToDo.id;
    const span=document.createElement("span");
    span.innerText=newToDo.text;
    const button=document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";
    const newToDoObj={
        text:newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}
//stringify=array를 가지고 text로 만듦
toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos=localStorage.getItem(TODOS_KEY);

if(savedToDos!==null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}



//(item)=>console.log("this is the turn of",item)
//JSON.stringify([1,2,3,4,])-->to save value to string
//JSON.parse("[1,2,3,4]") --> to sae value to live jave script string
// !==   is not

// function sexyFilter(toDo){
//     return toDo.id !== 
// }
// toDos.filter(sexyFilter)