import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import ATask from "./aTask";
import InputData from "./input";
import List from '@mui/material/List';
import { Container } from "@mui/material";
import { theAPI } from "../App";

function TheList(props) {
 const api = useContext(theAPI)
    const [tasks,setTasks] = useState([])

    useEffect( () => (
        axios.get(api).then(response => {
            setTasks(response.data)
        })  
        
    ),[])

    function EditATask(val) {
        console.log("we are editing somehtign "+ val.id)
        console.log(val)
        let editedTask = prompt("Change the task to: ", val.task)
        if(editedTask == null || editedTask === ""){
            console.log("we didant change it")
        }
        else {
               axios.put(api+val.id,{done:val.done,task:editedTask})
               .then(window.location.reload()) 
              
        }
    }

    function removeTask(id) {

        axios.delete(api, {data:{id:id}})
      
        const removedArr = tasks.filter((todo) => todo.id !== id);
        setTasks( removedArr );
    }

    function ToggleDone(val) {
      
      let updatedTodos = tasks.map((todo) => {
        if (todo.id === val.id) {
          todo.done = !todo.done;
          axios.put(api+val.id,{done:todo.done,task:val.task})
        }
        return todo;
      });
      setTasks(updatedTodos);
    }

    function AddTask(val) {
       
            const newList = [val, ...tasks]; 
            setTasks(newList);   
                    
    }

     return(
         
        <Container>
            <InputData addTask={AddTask} />
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            
             {tasks.map((task) =>
             <ATask 
                task={task.task} id={task.id} done={task.done} key={task.id} 
                editHandler={EditATask}
                removeTask={removeTask}
                toggleDone={ToggleDone}
                editATask={EditATask}
             />
            )} 
            </List>
        </Container>
         
     )
     
}

export default TheList