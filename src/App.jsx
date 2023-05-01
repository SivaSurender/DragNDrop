import { DndProvider } from "react-dnd";
import "./index.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import Notes from "./assets/components/Notes";
import Bin from "./assets/components/Bin";
import { useEffect, useState } from "react";

const rawData = [
  {
    id: "sadsaf",
    label: "Note 1",
  },
  {
    id: "dfdsg",
    label: "Note 2",
  },
  {
    id: "sajhgjkdsaf",
    label: "Note 3",
  },
];

export default function App() {
  const [noteList, setNoteList] = useState([]);
  const [binList, setBinList] = useState([]);

  useEffect(() => {
    localStorage.setItem("initialItem", JSON.stringify(rawData));

    const finalItem = localStorage.getItem("initialItem");

    setNoteList(JSON.parse(finalItem));
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <h1 className="text-center text-3xl font-semibold mt-4 py-2">
        Drag-N-Drop
      </h1>

      {noteList.map((eachItem) => {
        return <Notes key={eachItem.id} list={eachItem} />;
      })}

      <Bin binList={binList} noteList={noteList} setBinList={setBinList} />
    </DndProvider>
  );
}
