// src/ToDoList.js
import React, { useState } from 'react';
import './styles.css';  // Importăm fișierul CSS pentru stiluri

function ToDoList() {
  const [task, setTask] = useState('');  // Pentru a salva task-ul curent
  const [tasks, setTasks] = useState([]);  // Pentru a salva lista de task-uri

  // Funcția care adaugă un task în listă
  const addTask = () => {
    if (task.trim()) {  // Verificăm dacă input-ul nu este gol
      setTasks([...tasks, { taskText: task, isCompleted: false }]);
      setTask('');  // După adăugare, curățăm input-ul
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {  // Dacă apăsăm Enter, adăugăm task-ul
      addTask();
    }
  };

  // Toggle pentru completarea unui task (checkbox)
  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
    setTasks(updatedTasks);
  };

  // Funcția de ștergere a task-ului
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);  // Actualizăm lista fără task-ul șters
  };

  return (
    <div className="notebook">
      <div className="task-input">
        {/* Input pentru a adăuga un task */}
        <input
          type="text"
          id="new-task"
          value={task}
          onChange={(e) => setTask(e.target.value)} // Actualizează task-ul pe măsură ce scrii
          onKeyPress={handleKeyPress} // Adăugăm event pentru apăsarea Enter
          placeholder="Scrie un task..."
        />
        {/* Buton pentru a adăuga task-ul */}
        <button id="add-task" onClick={addTask}>Adaugă</button>
      </div>

      <div id="task-list">
        {/* Aici va apărea lista de task-uri */}
        <ul>
          {tasks.map((taskItem, index) => (
            <li key={index} className={`todo-item ${taskItem.isCompleted ? 'completed' : ''}`}>
              <input 
                type="checkbox" 
                checked={taskItem.isCompleted} 
                onChange={() => toggleTaskCompletion(index)} 
              />
              {taskItem.taskText}
              {/* Butonul de ștergere */}
              <button className="delete-task" onClick={() => deleteTask(index)}>Șterge</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
