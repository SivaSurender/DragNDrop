import React, { Children } from "react";
import { useDrag, useDrop } from "react-dnd";

function Bin({ binList, setBinList, noteList }) {
  const [{ isOver, canDrop }, drop] = useDrop(() => {
    return {
      accept: "notes",
      drop: (item) => binItemHandler(item.id),
      collect: (monitor) => {
        return { isOver: monitor.isOver(), canDrop: monitor.canDrop() };
      },
    };
  }, [noteList]);

  // console.log(noteList, "noteloist");
  const binItemHandler = (item) => {
    if (!item) {
      // handle the case where item is not defined
      return;
    }

    const displayBinArray = noteList.filter((each, index) => {
      return item === each.id;
    });
    console.log({ displayBinArray, noteList });

    setBinList((prev) => {
      return [...prev, displayBinArray[0]];
    });
  };

  return (
    <div className="border h-48" ref={drop}>
      <h2 className="text-center font-medium py-2">
        {binList && binList.map((each) => <p key={each.id}>{each.label}</p>)}
      </h2>
    </div>
  );
}

export default Bin;
