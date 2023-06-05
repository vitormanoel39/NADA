import * as React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { Paper } from '@mui/material';
import { padding } from '@mui/system';

export default function TodoItem({todo, deleteTodo}) {
  const [checked, setChecked] = React.useState([]);

  return (
    
    <Paper style={{ padding: "0.5em 0em"}}>
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="Delete" onClick={() => deleteTodo(todo.id) }>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >


        <ListItemButton role={undefined} dense>
          <ListItemIcon>
            <Checkbox edge="start" tabIndex={-1} disableRipple />
          </ListItemIcon>
          <ListItemText primary={todo.text} />
        </ListItemButton>
      </ListItem> 
      </Paper> 
     );  
}