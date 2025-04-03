import { useState } from "react";
import "./styles.css"; // Sau calea corectă

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div id="notebook">
      <h2>Lista de To-Do</h2>
      <div className="task-input">
        <input
          id="new-task"
          type="text"
          placeholder="Scrie un task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button id="add-task" onClick={addTask}>Adaugă</button>
      </div>
      <div id="task-list">
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? "completed" : ""}>
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(index)}
                />
              </label>
              <span>{task.text}</span>
              <button className="delete-task" onClick={() => setTasks(tasks.filter((_, i) => i !== index))}>Șterge</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

