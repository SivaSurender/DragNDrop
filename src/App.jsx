import { useEffect, useState } from "react";
import "./index.css";
import CreateTasks from "./components/CreateTasks";
import ListTasks from "./components/ListTasks";
import { Toaster } from "react-hot-toast";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <div className="bg-slate-100 w-screen h=screen flex flex-col items-center pt-32 gap-16 bg-zinc-200 h-screen w-screen">
        <h1 className="font-mono text-4xl subpixel-antialiased font-bold text-slate-600/100 overline decoration-slate-400">
          Task Logger
        </h1>
        <CreateTasks tasks={tasks} setTasks={setTasks} />
        <ListTasks tasks={tasks} setTasks={setTasks} />
      </div>
    </DndProvider>
  );
}
