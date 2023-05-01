import React, { useEffect, useState } from "react";

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
      <Header text={text} bg={bg} count={tasksToMap.length} /> List
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
