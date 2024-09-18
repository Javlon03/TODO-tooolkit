import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilters from "./components/TaskFilters";
import "./styles.css";

const App = () => {
  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <TaskForm />
      <TaskFilters />
      <TaskList />
    </div>
  );
};

export default App;
