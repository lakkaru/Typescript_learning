// function showToDo(todo:{title:string, text:string}){
//     console.log(todo.title+ ": " + todo.text);
// }

// let myToDo={title:'Trash', text:'Take out trash'};

// showToDo(myToDo);

interface ToDo{
    title:String,
    text:String
}
function showToDo(todo:ToDo){
    console.log(todo.title+ ": " + todo.text);
}
let myToDo={title:'Trash', text:'Take out trash'};

showToDo(myToDo);