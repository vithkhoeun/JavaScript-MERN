import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import TodoList from './components.jsx/TodoList';


function App() {

const [newTodo, setNewTodo] = useState("");
const [todos, setTodos] = useState([]);

const handelNewTodoSubmit = (e) => {
  e.preventDefault();

  if (newTodo.length == 0) {
    return;
  }

  const todoItem = {
    text: newTodo,
    complete: false
  }

  setTodos([...todos, todoItem])
  setNewTodo("");
};

const handelTodoDelete = (delIdx) => {
  const filteredTodos = todos.filter((todo, i) => {
    return i != delIdx;
  });

  setTodos(filteredTodos);
}

const  handleToggleComplete = (idx) => {
  const updatedTodos = todos.map((todo, i) => {
    if (idx == i) {
      todo.complete = !todo.complete;
}
    return todo;
  }); 

  setTodos(updatedTodos);
}

  return (
    <div style={{textAlign: "center"}}>
      <form onSubmit = {(event) => {
        handelNewTodoSubmit(event);
      }}>
        <input onChange={(event) => {
          setNewTodo(event.target.value);
        }}
          type="text" 
          value={newTodo}/>
      <div>
        <button>Add</button>
      </div>
      </form>

      {todos.map((todo, i) => {
        const todoClasses = ["bold", "italic"];

        if (todo.complete) {
          todoClasses.push("line-through");
        }

        return (
          <div key={i}>
            <input onChange={(event) => {
              handleToggleComplete(i);
            }} 
            checked={todo.complete} 
            type="checkbox" 
            />
            <span className={todoClasses.join(" ")}>{todo.text} </span>
            <button onClick={(event) => {
              handelTodoDelete(i);
            }} style={{marginLeft: "20px"}}>Delete</button>
        </div>
      );
    })}
    </div>
  );
}

export default App;
