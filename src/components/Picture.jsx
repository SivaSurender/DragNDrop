import React from "react";
import { useDrag } from "react-dnd";

/*
1. to make any element draggab;le we need useDrag hooks
*/

function Picture({ src, id }) {
  /*
  1. is dragging is a boolean which tells if element is being dragged
  2. drag is to be refernced to dom element which is to be dragged
  3. useDrag takes in a callback func and returns an object
  4. that object has to have a type which is kind of unique, it also has collect propery ,
      which is a fuction and takes an argument called monitor whicj also returns an object 
      and has is Dragging property which is to be converted to boolean by using the same argument i.e monitor
      in isDragging function
  */
  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: "image",
      item: { id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    };
  });

  return (
    <img
      ref={drag}
      width="150px"
      style={{ border: isDragging ? "2px solid blue" : "2px solid pink" }}
      key={id}
      src={src}
      alt={id}
    />
  );
}

export default Picture;
