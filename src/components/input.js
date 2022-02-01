import React, {useState} from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/system";
import Grid from '@mui/material/Grid';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme)=>({

}))

function InputData(props) {

const [task, setTask] = useState("")

function handleChange(event) {
    setTask(event.value)
}

function handleSubmit(e) {
    if(!task){
        e.preventDefault()
        return ;
    }
     axios.post("/api", {task:task})
            .then(response =>
                props.addTask(response.data)
            )
     e.preventDefault()
     setTask("")
    
    
}
    return(
        <form sx={{ flexGrow: 1 }} onSubmit={e => {handleSubmit(e)}}>
        
            <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
                 
          
             <TextField id="outlined-basic"
                label="Add a task here" 
                variant="outlined" 
                value={task} 
                onChange={e => setTask(e.target.value)}
                size="small"
                fullWidth
                
            />
            </Grid>
            <Grid item xs={4}>
            <Button variant="outlined" 
                    size="medium"

                    fullWidth 
                    endIcon={<SendIcon />}
                    type="submit"
                    > Add It</Button>
            </Grid>
        
        </Grid>  
        
        </form>
    ) 
    }

export default InputData