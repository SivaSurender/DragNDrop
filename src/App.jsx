import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";
import "./App.css";

function App() {
  /*
  1. wrap the whole app which needs access to draggable features with DndProvider, similar to contedt provider
  2. provder will always need to be provided with a backend ie HTML5backend
  */
  return (
    <DndProvider backend={HTML5Backend}>
      <DragDrop />
    </DndProvider>
  );
}

export default App;
