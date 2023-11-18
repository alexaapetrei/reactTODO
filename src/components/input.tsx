import { useState, FormEvent } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";
import { Task } from "./theList";
import { api } from "../main";


interface InputDataProps {
  addTask: (task: Task) => void;
}

function InputData({ addTask }: InputDataProps) {
  const [task, setTask] = useState<string>("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!task) return;
    
    axios.post(api, { task })
      .then((response) => addTask(response.data));
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="Add a task here"
            variant="outlined"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            size="medium"
            fullWidth
            endIcon={<SendIcon />}
            type="submit"
          >
            Add It
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default InputData;
