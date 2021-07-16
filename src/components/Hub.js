import React , {useState , useEffect}from "react";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import './App.css';


const Hub = () => {
  const initalState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input ,setInput] = useState("");
  const [todos ,setTodos] = useState(initalState);
  const [editTodo , setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos))
  }, [todos]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header/>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
    
  );
}

export default Hub;
