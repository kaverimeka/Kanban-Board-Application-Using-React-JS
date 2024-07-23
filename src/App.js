import React from 'react';
import { Container, TextField, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from './features/tasks/tasksSlice';
import Board from './components/Board';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <TextField 
        label="Search tasks here..." 
        variant="outlined" 
        fullWidth 
        margin="normal" 
        onChange={(e) => dispatch(setSearchQuery(e.target.value))} 
      />
      <Board />
      <Fab color="primary" aria-label="add" onClick={handleOpen} className="fab">
        <AddIcon />
      </Fab>
      <TaskForm open={open} handleClose={handleClose} />
      {/* <!-- <img src="" alt=""> --> */}
    </Container>
  );
}

export default App;

