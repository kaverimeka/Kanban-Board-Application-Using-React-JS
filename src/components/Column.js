import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Column = ({ columnId, columnName, tasks }) => {
  return (
    <Droppable droppableId={columnId}>
      {(provided) => (
        <div className="column" {...provided.droppableProps} ref={provided.innerRef}>
          <h2>{columnName}</h2>
          {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Column;
