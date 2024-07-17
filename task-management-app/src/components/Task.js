import React from "react";
import { Link } from "react-router-dom";

const Task = ({ task, onDelete }) => {
  const { id, title, description, dueDate, priority, assignee, completed } =
    task;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-center">
        <h5 className="text-2xl font-semibold">{title}</h5>
        <div className="flex items-center space-x-2">
          <Link to={`/edit/${id}`} className="btn btn-warning">
            Edit
          </Link>
          <button className="btn btn-danger" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      </div>
      <p className="text-gray-700 mt-2">{description}</p>
      <div className="mt-4">
        <p>
          <strong>Due Date:</strong> {dueDate}
        </p>
        <p>
          <strong>Priority:</strong> {priority}
        </p>
        <p>
          <strong>Assignee:</strong> {assignee}
        </p>
        <p>
          <strong>Completed:</strong> {completed ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};

export default Task;
