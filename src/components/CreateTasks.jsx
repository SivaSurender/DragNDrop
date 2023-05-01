import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

function CreateTasks({ tasks, setTasks }) {
  const [name, setName] = useState("");
  const newTaskHandler = (e) => {
    e.preventDefault();

    if (name.length === 0) {
      toast.error("Empty task");
      return;
    }
    if (name.length <= 3) {
      toast.error("A task should have more than 3 characters");
      return;
    }
    if (name.length >= 100) {
      toast.error("A task can't be more than of 100 characters");
      return;
    }

    const newTask = {
      id: uuidv4(),
      name,
      status: "todo",
    };

    setTasks((prev) => [...prev, newTask]);

    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));

    setName("");

    toast.success("Task Created");
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
