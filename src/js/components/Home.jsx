
import React, { useState, useEffect } from "react";


const Home = () => {
  const [users, setUsers] = useState([]);
  const getTodos = () => {
    fetch("https://playground.4geeks.com/todo/users/cgerc", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
  .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      setUsers(data.todos);
    })
    .catch((error) => console.log(error));
};

console.log(Todos);
useEffect(() => {
  getTodos();
}, []);

    const [data, setData] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  };

  const addTask = () => {
    if (data.trim()) {
      const newTask = {
        id: Date.now().toString(),
        label: data.trim(),
      };
      setTasks((prev) => [...prev, newTask]);
      setData("");
    }
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="d-flex flex-column align-items-center mt-3 shadow-lg">
      <h1>To Do List</h1>

      <div className="mb-3 w-50">
        <input
          className="form-control"
          type="text"
          name="task"
          value={data}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Agregar tarea"
        />
      </div>

      <ul className="list-group w-50 shadow-lg">
        {tasks.length === 0 ? (
          <li className="list-group-item text-muted">
            No hay tareas, añadir tareas
          </li>
        ) : (
          tasks.map((task) => (
            <li
              key={task.id}
              className="list-group-item d-flex align-items-center task-item"
            >
              <span>{task.label}</span>
              <button
                className="btn btn-danger btn-sm ms-auto delete-btn"
                onClick={() => removeTask(task.id)}
                aria-label="Eliminar tarea"
              >
                🗑️
              </button>
            </li>
          ))
        )}
      </ul>
      <p className='task-counter text-muted text-center mt-3 shadow-lg'>{tasks.length} item{tasks.length !== 1 ? 's' : ''} left</p>
    </div>
  );
};

export default Home;

