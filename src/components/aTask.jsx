import React, {Component} from "react";
import axios from "axios";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { TextField } from "@mui/material";

class ATask extends Component{


    render() {
        return (
                <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="comments" onClick={() => this.props.removeTask(this.props.id)}>
                      <DeleteForeverIcon />
                    </IconButton>
                }
                disablePadding
                >
                <ListItemButton role={undefined} dense>
                <ListItemIcon>
                <Checkbox
                    checked={this.props.done}
                 onClick={()=> this.props.toggleDone(this.props)}
                />
              </ListItemIcon>
              <ListItemText id={this.props.id} primary={this.props.task} onClick={()=>this.props.editATask(this.props)} />
            
            </ListItemButton>
            </ListItem>            
        )
    }
}


export default ATask