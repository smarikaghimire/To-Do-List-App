import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Professional Todo List</h1>
      </div>
      <div className="todo-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your task..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <h3>{`Task ${index + 1}`}</h3>
            <p>{todo}</p>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
