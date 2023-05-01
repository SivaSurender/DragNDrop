import { useState } from "react";
import "./index.css";
import CreateTasks from "./components/CreateTasks";
import ListTasks from "./components/ListTasks";

export default function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="bg-slate-100 w-screen h=screen flex flex-col items-center pt-3 gap-16">
      <CreateTasks tasks={tasks} setTasks={setTasks} />
      <ListTasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
