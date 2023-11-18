import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { TextField } from "@mui/material";

interface Task {
  id: string;
  task: string;
  done: boolean;
}

interface ATaskProps {
  removeTask: (id: string) => void;
  editATask: (etask: string, val: Task) => void;
  toggleDone: (task: Task) => void;
  task: string;
  id: string;
  done: boolean;
}

const ATask = ({ removeTask, editATask, toggleDone, task, id, done }: ATaskProps) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState<string>(task);

  function letsEditATask(newTask: string) {
    setEditing(false);
    editATask(newTask, { task, id, done });
    console.log("Edited task");
  }

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => removeTask(id)}
        >
          <DeleteForeverIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton dense>
        <ListItemIcon>
          <Checkbox
            checked={done}
            onClick={() => toggleDone({ task, id, done })}
          />
        </ListItemIcon>

        {editing ? (
          <>
            <TextField
              variant="outlined"
              value={currentTask}
              onChange={(e) => setCurrentTask(e.target.value)}
              onBlur={() => letsEditATask(currentTask)}
              size="small"
              fullWidth
            />
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => letsEditATask(currentTask)}
            >
              <EditIcon />
            </IconButton>
          </>
        ) : (
          <ListItemText
            id={id}
            primary={currentTask}
            onClick={() => setEditing(true)}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
};

export default ATask;
