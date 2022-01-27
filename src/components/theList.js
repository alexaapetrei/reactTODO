import React, {Component, useState} from "react";
import axios from "axios";
import ATask from "./aTask";
import InputData from "./input";
import List from '@mui/material/List';
import { Container } from "@mui/material";

export default class TheList extends Component {
    constructor(props){
         super(props);
         this.state = {
             tasks: []
         }
    }

    componentDidMount = () => {
        axios.get("/api").then(response => {
            this.setState({
                tasks : response.data
                })
        })
    }

    EditATask(val) {
        console.log("we are editing somehtign "+ val.id)
        console.log(val)
        let editedTask = prompt("Change the task to: ", val.task)
        if(editedTask == null || editedTask === ""){
            console.log("we didant change shit")
        }
        else {
               axios.put("/api/"+val.id,{done:val.done,task:editedTask}) 
               window.location.reload()
          
            
        }
    }

    removeTask = (id) => {

        axios.delete("/api", {data:{id:id}})
      
        const removedArr = this.state.tasks.filter((todo) => todo.id !== id);
        this.setState({ tasks : removedArr });
    }

    ToggleDone = (val) => {
      
      let updatedTodos = this.state.tasks.map((todo) => {
        if (todo.id === val.id) {
          todo.done = !todo.done;
          axios.put("/api/"+val.id,{done:todo.done,task:val.task})
        }
        return todo;
      });
      this.setState({tasks : updatedTodos});
    }

    AddTask = (val) => {
        if (!val.task) {
            return;
          }
        
          const newList = [val, ...this.state.tasks];
        
          this.setState({tasks: newList});
          
        
                
    }

 render() {
     return(
         
        <Container>
            <InputData addTask={this.AddTask} />
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {this.state.tasks.map((task) =>
             <ATask 
                task={task.task} id={task.id} done={task.done} key={task.id} 
                editHandler={this.editATask}
                removeTask={this.removeTask}
                toggleDone={this.ToggleDone}
                editATask={this.EditATask}
             />
            )}
            </List>
        </Container>
         
     )
     }
}