import React from 'react';
import {SidebarData} from './SidebarData.js';
import "../App.css"
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper'
import ModeNightIcon from '@mui/icons-material/ModeNight';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const fabStyle = {
    position: 'relative',
    bottom: 0,
    right: 1,
    left: 145,
    top: 130
  };

function Sidebar () {
return (


    <div className="Sidebar">
        <Paper className= "paperStyle">
        <ul className="SidebarList">
            {SidebarData.map((val,key)=> {

                return (
                
                    <ListItem key ={key} disablePadding
                    className="row"
                     onClick={() => {window.location.pathname = val.link}}>
                        {" "}
                        <ListItemButton>
                            <ListItemIcon><div id="icon">{val.icon}</div>{" "}</ListItemIcon>
                            <ListItemText><div id="title">{val.title}</div></ListItemText>
                            
                        </ListItemButton>
                     </ListItem>
                
                )

            })}
            
                        <ListItem>
                        <ListItemIcon><ModeNightIcon></ModeNightIcon></ListItemIcon>
                        <ListItemButton><FormControlLabel control={<Switch defaultChecked />} label="" /></ListItemButton>
                      </ListItem>
                      {/* <br></br> */}
        <ListItem><Fab style={fabStyle} size="large" color="primary" aria-label="add">
            <AddIcon />
        </Fab></ListItem>

        

        </ul>
        
        </Paper>
    </div>

);

}

export default Sidebar;