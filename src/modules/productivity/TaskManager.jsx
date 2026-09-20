import React, { useState, useEffect } from 'react';
import './TaskManager.css';

function TaskManager() {
  // 1. STATE: Initialize tasks array from localStorage (if present), or default to an empty list []
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('life_os_tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // 2. STATE: Track temporary text input from the form
  const [taskText, setTaskText] = useState('');

  // 3. EFFECT: Sync tasks array to localStorage whenever 'tasks' changes
  useEffect(() => {
    localStorage.setItem('life_os_tasks', JSON.stringify(tasks));
  }, [tasks]);

  // ACTION: Add a new task
  const handleAddTask = (e) => {
    e.preventDefault(); // Prevent full browser page refresh on form submit
    if (!taskText.trim()) return; // Don't add empty tasks

    const newTask = {
      id: Date.now(), // Generate a unique timestamp ID
      text: taskText.trim(),
      completed: false,
    };

    setTasks([newTask, ...tasks]); // Add new task to top of list
    setTaskText(''); // Clear input box
  };

  // ACTION: Toggle completed state
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // ACTION: Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="task-manager">
      <header className="task-header">
        <h2>Productivity & Tasks</h2>
        <p className="task-subtitle">
          {tasks.filter((t) => !t.completed).length} tasks remaining
        </p>
      </header>

      {/* Task Input Form */}
      <form className="task-form" onSubmit={handleAddTask}>
        <input
          type="text"
          className="task-input"
          placeholder="Add a new task or focus item..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button type="submit" className="add-task-btn">
          Add Task
        </button>
      </form>

      {/* Task List */}
      <ul className="task-list">
        {tasks.length === 0 ? (
          <li className="empty-state">No tasks yet! Add one above to get started.</li>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span className="task-text">{task.text}</span>
              </label>

              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
                aria-label="Delete task"
              >
                ✕
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TaskManager;