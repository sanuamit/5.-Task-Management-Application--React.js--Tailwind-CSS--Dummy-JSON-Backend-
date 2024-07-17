import React, { useState, useEffect } from "react";
import Task from "./Task";
import { Link } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE",
      });
      fetchTasks(); // Refresh tasks after deletion
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div>
      <div className="mb-5 flex justify-between items-center">
        <span className="text-xl">For add tasks click on Add Task button :-</span>
        <Link to="/add" className="btn btn-success">
          Add Task
        </Link>
      </div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TaskList;
