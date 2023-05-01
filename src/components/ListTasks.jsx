import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function ListTasks({ tasks, setTasks }) {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);

  useEffect(() => {
    const filterTodos = tasks.filter((each) => each.status === "todo");
    const filterInProgress = tasks.filter(
      (each) => each.status === "inprogress"
    );
    const filterClosed = tasks.filter((each) => each.status === "closed");

    setTodos(filterTodos);
    setInProgress(filterInProgress);
    setClosed(filterClosed);
  }, [tasks]);

  const taskStatus = ["todo", "inprogress", "closed"];
  return (
    <div className="flex gap-16">
      {taskStatus.map((each, index) => (
        <Section
          key={index}
          status={each}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          inProgress={inProgress}
          closed={closed}
        />
      ))}
    </div>
  );
}

export default ListTasks;

const Section = function ({
  status,
  tasks,
  setTasks,
  todos,
  inProgress,
  closed,
}) {
  let text = "todos";
  let bg = "bg-slate-500";
  let tasksToMap = todos;

  if (status === "inprogress") {
    text = "In Progress";
    bg = "bg-purple-500";
    tasksToMap = inProgress;
  }
  if (status === "closed") {
    text = "Closed";
    bg = "bg-green-500";
    tasksToMap = closed;
  }

  return (
    <div className={`w-64`}>
      <Header text={text} bg={bg} count={tasksToMap.length} />
      {tasksToMap.length > 0 &&
        tasksToMap.map((each, index) => (
          <Task key={each.id} tasks={tasks} setTasks={setTasks} task={each} />
        ))}
    </div>
  );
};
const Header = function ({ text, bg, count }) {
  return (
    <div
      className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}
    >
      {text}{" "}
      <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
        {count}
      </div>
    </div>
  );
};
const Task = function ({ task, tasks, setTasks }) {
  const taskFilterhandler = (taskId) => {
    const filteredList = tasks.filter((each) => each.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(filteredList));
    setTasks(filteredList);
    toast("Task removed", { icon: "✅" });
  };
  return (
    <div className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab`}>
      <p>{task.name}</p>
      <button
        onClick={() => taskFilterhandler(task.id)}
        className="absolute bottom-1 right-1 text-slate-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
};
