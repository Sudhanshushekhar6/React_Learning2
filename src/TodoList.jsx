// import {useState} from 'react';
// import {v4 as uuid4} from 'uuid';
// export default function TodoList(){
//     let [todos, setTodos] = useState(["sample Task"]);
//     let [newTodo,setNewTodo]=useState("");
//     let addnewtask=()=>{
// setTodos([...todos,newTodo]);
//     };
//     let updatetodovalue=(event)=>{
// setNewTodo(event.target.value);
//     };
//     return (
//         <div>
//         <input placeholder="add a task" value={newTodo} onChange={updatetodovalue}></input>  
//         <br></br>  
//         <button onClick={addnewtask}> Add task</button>
//         <br></br><br></br><br></br>
//         <hr></hr>
// <h4>Todo List</h4>
// <ul>
//     {todos.map((todo) => {
//    return  <li>{todo}</li>;
//     })}
// </ul>
//         </div>
//     );
// }

// Use of UUID

import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
export default function TodoList(){
    let [todos, setTodos] = useState([{task:"sample-task", id:uuidv4(), isDone:false}]);
    let [newTodo,setNewTodo]=useState("");
    let addnewtask=()=>{
setTodos((prevTodos) =>{
     return [...todos,{task:newTodo,id:uuidv4()}]
});
setNewTodo("");
    };
    let updatetodovalue=(event)=>{
setNewTodo(event.target.value);
    };
    let deletetask=(id)=>{
setTodos((prevTodos)=>todos.filter((prevTodos)=> prevTodos.id!=id));
    };
    let markasdone=(id)=>{
        setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
            if(todo.id==id){
                return{
                    ...todo,
                    isDone:true,
                };
            } else{
                return todo;
            }
            })
        );
        
    };
    return (
        <div>
        <input placeholder="add a task" value={newTodo} onChange={updatetodovalue}></input>  
        <br></br>  
        <button onClick={addnewtask}> Add task</button>
        <br></br><br></br><br></br>
        <hr></hr>
<h4>Todo List</h4>
<ul>
    {todos.map((todo) => {
   return  <li key={todo.id}>
    <span style={todo.isDone ? {textDecoration:"line-through"} :{}}> {todo.task}</span>
    &nbsp;
   <button onClick={()=>
    deletetask(todo.id)
   }>Delete</button>
<button onClick={()=>
    markasdone(todo.id)
   }>Mark as Done</button>
   </li>;
    })}
</ul>
        </div>
    );
}