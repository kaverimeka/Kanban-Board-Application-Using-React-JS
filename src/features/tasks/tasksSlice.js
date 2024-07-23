import { createSlice } from '@reduxjs/toolkit';

const initialTasks = [
  { id: '1', title: 'Task 1', description: 'Description 1', status: 'todo' },
  { id: '2', title: 'Task 2', description: 'Description 2', status: 'inprogress' },
  { id: '3', title: 'Task 3', description: 'Description 3', status: 'peerreview' },
  { id: '4', title: 'Task 4', description: 'Description 4', status: 'done' },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: initialTasks,
    searchQuery: '',
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.status = status;
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addTask, updateTaskStatus, setSearchQuery } = tasksSlice.actions;

export default tasksSlice.reducer;
