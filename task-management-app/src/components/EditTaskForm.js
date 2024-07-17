import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditTaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("low");
  const [assignee, setAssignee] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await response.json();
      setTitle(data.title);
      setDescription(data.description);
      setDueDate(data.dueDate);
      setPriority(data.priority);
      setAssignee(data.assignee);
      setCompleted(data.completed);
    } catch (error) {
      console.error("Error fetching task:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          dueDate,
          priority,
          assignee,
          completed,
        }),
      });
      navigate("/");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h5 className="text-3xl mb-6">Edit Task</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            className="form-input mt-1 block w-full p-3 border border-gray-300 rounded-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Description
          </label>
          <textarea
            className="form-textarea mt-1 block w-full p-3 border border-gray-300 rounded-lg"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Due Date
          </label>
          <input
            type="date"
            className="form-input mt-1 block w-full p-3 border border-gray-300 rounded-lg"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Priority
          </label>
          <select
            className="form-select mt-1 block w-full p-3 border border-gray-300 rounded-lg"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Assignee
          </label>
          <input
            type="text"
            className="form-input mt-1 block w-full p-3 border border-gray-300 rounded-lg"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
          />
        </div>
        <div className="mb-6 flex items-center">
          <label className="block text-gray-700 text-lg font-semibold mr-2">
            Completed
          </label>
          <input
            type="checkbox"
            className="form-checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-full p-3 text-xl">
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTaskForm;
