import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <h1>Users:</h1>
      <UserList />
      <h1>Todos:</h1>
      <TodoList />
    </div>
  );
}

export default App;
