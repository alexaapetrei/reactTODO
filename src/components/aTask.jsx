import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { TextField, Button } from "@mui/material";

const ATask = (props) => {
  const [editing, setEditing] = useState(false);
  const [task, setTask] = useState(props.task);

  function letsEditATask(task, id) {
    setEditing(false);
    props.editATask(task, id);
    console.log("rand ist");
  }
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={() => props.removeTask(props.id)}
        >
          <DeleteForeverIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton dense>
        <ListItemIcon>
          <Checkbox
            checked={props.done}
            onClick={() => props.toggleDone(props)}
          />
        </ListItemIcon>

        {editing ? (
          <>
            <TextField
              variant="outlined"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onBlur={() => letsEditATask(task, props)}
              size="small"
              fullWidth
            ></TextField>
            <IconButton
              edge="end"
              aria-label="ediy this"
              onClick={() => letsEditATask(task, props)}
            >
              <EditIcon />
            </IconButton>
          </>
        ) : (
          <ListItemText
            id={props.id}
            primary={task}
            onClick={() => setEditing(true)}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
};

export default ATask;
