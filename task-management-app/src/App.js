import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import EditTaskForm from "./components/EditTaskForm";

function App() {
  return (
    <Router>
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl text-center mb-6">Task Management App</h1>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<AddTaskForm />} />
          <Route path="/edit/:id" element={<EditTaskForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
