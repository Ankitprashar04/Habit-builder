import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

export default function TodoList(){

    let [Todos, setTodos] = useState([{task : "sample-task", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevtodos) => {
            return [...Todos, {task : newTodo, id: uuidv4()}]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo=(id)=>{
        setTodos((prevtodos)=>Todos.filter((prevtodos) => prevtodos.id != id));

    };

    return(
        <>
            <div>
                <input type="test" placeholder="Add Task todo" value={newTodo} onChange={updateTodoValue}/>
                <button onClick={addNewTask}>Add task</button>
                <hr />
                <br /><br /><br /><br />
                <h4>Todo List</h4>
                <ul>
                    {Todos.map((Todo) => (
                       <li key={Todo.id}>
                        <span>{Todo.task}</span>
                        &nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(Todo.id)}>delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}