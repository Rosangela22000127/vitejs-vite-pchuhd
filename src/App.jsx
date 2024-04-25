import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  const style = {
    py: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
    textColor: 'black',
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Mini Task Dashboard
      </Typography>
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}
      >
        <TextField
          label="Enter task"
          variant="outlined"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="success"
          onClick={handleAddTask}
          size="large"
          style={{ whiteSpace: 'nowrap' }}
        >
          Add Task
        </Button>
      </div>
      <List sx={style}>
        {tasks.map((task, index) => (
          <ListItem key={index} sx={{ color: 'black' }}>
            <ListItemText primary={task} />
            <IconButton
              onClick={() => handleDeleteTask(index)}
              aria-label="delete"
            >
              <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Button>
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
