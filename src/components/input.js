import React, {Component} from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";
import Grid from '@mui/material/Grid';


class InputData extends Component{
    constructor() {
        super()
        this.state = {
            task : ""
        }
    }


handleChange = e => {
    this.setState({
        task: e.target.value
    })
}

handleSubmit = e => {
    axios.post("/api", {task:this.state.task}).then(response =>
        this.props.addTask(response.data)
        )
    e.preventDefault()
    this.state.task =""
    
}
render() {
    return(
        <Box sx={{ flexGrow: 1 }}>
        <form onSubmit={this.handleSubmit}>
        
            <Grid container spacing={2}>
            <Grid item xs={8}>
                 
          
             <TextField id="outlined-basic"
                label="Add a task here" 
                variant="outlined" 
                value={this.state.task} 
                onChange={this.handleChange}
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
        </Box>
    ) 
}
}

export default InputData