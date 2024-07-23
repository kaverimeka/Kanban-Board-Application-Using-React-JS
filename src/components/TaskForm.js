import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { addTask } from '../features/tasks/tasksSlice';

const TaskForm = ({ open, handleClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      status: 'todo',
    };
    dispatch(addTask(newTask));
    setTitle('');
    setDescription('');
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent>
        <TextField 
          autoFocus
          margin="dense"
          label="Task Title"
          type="text"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField 
          margin="dense"
          label="Task Description"
          type="text"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add Task</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskForm;
