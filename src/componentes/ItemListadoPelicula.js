import { Box } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { colorPrimario } from "../auxiliares/Auxiliares";

const ItemListadoPelicula = ({titulo, imagen, link}) =>{
    return (
        <Box>
            <List sx={{ width: '110%', 
                        bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="poster pelicula" src={imagen} />
                    </ListItemAvatar>
                    <ListItemText
                    primary={titulo} />
                    <Link to={link}
                    sx={{ style: colorPrimario}}>
                        <RemoveRedEyeIcon/>
                    </Link>
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>

        </Box>
       
    )
  }
  
  export default ItemListadoPelicula;