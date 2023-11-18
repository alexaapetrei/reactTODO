import { useState, useEffect } from "react";
import axios from "axios";
import ATask from "./aTask";
import InputData from "./input";
import List from "@mui/material/List";
import { Grid } from "@mui/material";
import { api } from "../main";


export interface Task {
  id: string;
  task: string;
  done: boolean;
}

function TheList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axios.get(api).then((response) => {
      setTasks(response.data);
    });
  }, []);

  function EditATask(etask: string, val: Task) {
    const theID = val.id;
    const theTruth = val.done ? true : false;

    if (etask !== null && etask !== "") {
      axios.put(api + theID, { done: theTruth, task: etask })
        .then(() => console.log("I think we did edit it"));
      // window.location.reload();
    }
  }

  function removeTask(id: string) {
    axios.delete(api, { data: { id: id } });
    const removedArr = tasks.filter((todo) => todo.id !== id);
    setTasks(removedArr);
  }

  function ToggleDone(val: Task) {
    const updatedTodos = tasks.map((todo) => {
      if (todo.id === val.id) {
        todo.done = !todo.done;
        axios.put(api + val.id, { done: todo.done, task: val.task });
      }
      return todo;
    });
    setTasks(updatedTodos);
  }

  function AddTask(val: Task) {
    setTasks([val, ...tasks]);
  }

  return (
    <main>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid item xs={0} md={2}></Grid>
        <Grid item xs={12} md={8}>
          <InputData addTask={AddTask} />
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {tasks.map((t) => (
              <ATask
                task={t.task}
                id={t.id}
                done={t.done}
                key={t.id}
                removeTask={removeTask}
                toggleDone={ToggleDone}
                editATask={EditATask}
              />
            ))}
          </List>
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </main>
  );
}

export default TheList;
