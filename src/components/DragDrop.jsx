import React, { useState } from "react";
import Picture from "./Picture";
import "../App.css";
import { useDrop } from "react-dnd";

const pics = [
  {
    id: "dsfedsfds",
    url: "https://picsum.photos/200",
  },

  {
    id: "sadfiusgf",
    url: "https://picsum.photos/id/11/367/267",
  },

  {
    id: "dsfgdhsujf",
    url: "https://picsum.photos/id/20/367/267",
  },
  {
    id: "sdfghsdfju",
    url: "https://picsum.photos/id/22/367/267",
  },
];

function DragDrop() {
  /*
  1. isOver is a boolean which allows us to manipoulate styles when user stops dragging
  2. drop takes in  a callback with argument where the argument is the one which we are sending from from useDrop
  3. accept is the one which should be same as specified in useDrag type
  4. collect is optional function whcih allows to use state and determin current state, similar to 
     isOver which we have defined below
  */
  const [picList, setPicList] = useState([]);
  const [{ isOver }, drop] = useDrop(() => {
    return {
      accept: "image",
      drop: (item) => addPictures(item.id),
      collect: (monitor) => {
        return { isOver: !!monitor.isOver() };
      },
    };
  });

  const addPictures = function (item) {
    const finalList = pics.filter((each, index) => item === each.id);

    setPicList((prev) => [...prev, finalList[0]]);
  };
  return (
    <div>
      <div className="pictures">
        {pics.map((each) => {
          return <Picture src={each.url} key={each.id} id={each.id} />;
        })}
      </div>
      <div className="board" ref={drop}>
        {picList &&
          picList.map((each) => (
            <Picture src={each.url} key={each.id} id={each.id} />
          ))}
      </div>
    </div>
  );
}

export default DragDrop;
