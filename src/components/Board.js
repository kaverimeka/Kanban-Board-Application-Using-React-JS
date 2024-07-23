import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import { updateTaskStatus } from '../features/tasks/tasksSlice';

const columns = {
  todo: 'To Do',
  inprogress: 'In Progress',
  peerreview: 'Peer Review',
  done: 'Done',
};

const Board = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const searchQuery = useSelector(state => state.tasks.searchQuery);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    if (!result.destination) return;

    dispatch(updateTaskStatus({ id: result.draggableId, status: result.destination.droppableId }));
  };

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        {Object.entries(columns).map(([columnId, columnName]) => (
          <Column
            key={columnId}
            columnId={columnId}
            columnName={columnName}
            tasks={filteredTasks.filter(task => task.status === columnId)}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Board;
