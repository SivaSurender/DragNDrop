import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

function CreateTasks({ tasks, setTasks }) {
  const [name, setName] = useState("");
  const newTaskHandler = (e) => {
    e.preventDefault();

    name.length <= 3 && name.length === 0 && name.length === 0
      ? toast.error("Empty task")
      : name.length <= 3
      ? toast.error("A task should have more than 3 characters")
      : null;

    const newTask = {
      id: uuidv4(),
      name,
      status: "todo",
    };

    setTasks((prev) => [...prev, newTask]);

    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));

    setName("");
  };

  return (
    <form onSubmit={newTaskHandler}>
      <input
        value={name}
        className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-2"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button className="bg-cyan-500 rounded-md px-4 h-12 text-white">
        Create
      </button>
    </form>
  );
}

export default CreateTasks;
