import React, { useState } from "react";
import TodoList from "../TodoList";
import "./TodoForm.css";

function TodoForm() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]); //to store values in list

  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (task.length != 0) {
      const newTodos = [...todos, task];
      setTodos(newTodos);
      setTask("");
    }
  };

  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };

  return (
    <div className="head-style">
      <h1>Things To Do</h1>
      <form onSubmit={submitHandler}>
        <input
          className="search-style"
          type="text"
          placeholder="Add Now"
          value={task}
          onChange={changeHandler}
        />
        <button onClick={submitHandler}>Add</button>
      </form>

      <TodoList todolist={todos} deleteHandler={deleteHandler} />
    </div>
  );
}

export default TodoForm;
