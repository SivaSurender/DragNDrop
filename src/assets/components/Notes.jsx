import React from "react";
import { useDrag } from "react-dnd";

function Notes({ list }) {
  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: "notes",
      item: list,

      // when dragging is over

      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();

        // console.log(dropResult, "drop");
        // console.log(item, "from end");
        if (item && dropResult) {
          // alert(`${item.label} moved to ${dropResult.label}`);
        }
      },
      collect: (monitor) => {
        return { isDragging: monitor.isDragging() };
      },
    };
  });
  return <div ref={drag}>{list.label}</div>;
}

export default Notes;
