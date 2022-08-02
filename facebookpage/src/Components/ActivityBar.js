import { Paper } from "@mui/material";
import "../App.css"

import React from 'react';

import "../App.css"
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountCircle from "@mui/icons-material/AccountCircle";
import BeachAccessIcon from '@mui/icons-material/BeachAccess';


function ActivityBar () {
   

    return (
    <div className="activity">
    <React.Fragment>
        <Paper>
        

        <ListItem>
            <ListItemText>Online Friends</ListItemText>            
        </ListItem>
        <ListItem>
            <ListItemIcon align="right"><AccountCircle align="right"></AccountCircle></ListItemIcon>
        </ListItem>
        
        
            <ListItem>
                <ListItemText>Latest Photos</ListItemText> 
            </ListItem>
            <ListItem>
                    <img src="https://media.self.com/photos/61e9dae8808d098c8ccc3b58/1:1/w_768,c_limit/15-Bean-Soup-Vegetarian.jpg" height="100px" width="100px"></img>
                    <br></br>
                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574" width="110px" height="100px" margin-left="10px"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-HpRXMfRI2reZWuPVN6Mcvu2j691ev0CZMg&usqp=CAU" height="100px"></img>
            </ListItem>      
            <ListItem>
            <ListItemText>Latest Conversion</ListItemText>   
            </ListItem>         
        
        
    <ListItem>
        <ListItemAvatar>
          <AccountCircle>
            <BeachAccessIcon />
          </AccountCircle>
        </ListItemAvatar>
        <ListItemText primary="Brunch this weekend?" secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
      </ListItem>
        
        

        </Paper>

        </React.Fragment>
        </div>
    );

}

export default ActivityBar;