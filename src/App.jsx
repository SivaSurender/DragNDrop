import { useEffect, useState } from "react";
import "./index.css";
import CreateTasks from "./components/CreateTasks";
import ListTasks from "./components/ListTasks";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  console.log(tasks, "tasks");
  return (
    <>
      <Toaster />
      <div className="bg-slate-100 w-screen h=screen flex flex-col items-center pt-32 gap-16">
        <CreateTasks tasks={tasks} setTasks={setTasks} />
        <ListTasks tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}
