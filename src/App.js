import React, { useState } from "react";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const pices = [
  {
    id: "1",
    name: "pices-1",
  },
  {
    id: "2",
    name: "pices-2",
  },
  {
    id: "3",
    name: "pices-3",
  },
  {
    id: "4",
    name: "pices-4",
  },
];

function App() {
  const [picesPuzzle, updatePices] = useState(pices);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    console.log(result);
    const items = Array.from(picesPuzzle);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updatePices(items);
  }

  return (
    <div className="App">
      <div className="puzzle">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="picesPuzzle">
            {(provided) => (
              <ul
                className="picesPuzzle"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {picesPuzzle.map(({ id, name }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <div className="pices">
                            <p>{name}</p>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
