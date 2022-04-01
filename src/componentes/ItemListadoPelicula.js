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
import { IconButton } from '@mui/material';

//Las props de este comonente estan definidas en el map que estoy haciendo en el componente "Listados", alli le estoy pasando los valores

const ItemListadoPelicula = ({tituloItem, imagenItem, linkIcono}) =>{
    return (
            <Box>
            <List sx={{ bgcolor: 'background.paper', width: "450px" }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="poster pelicula" src={imagenItem} />
                    </ListItemAvatar>
                    <ListItemText
                    primary={tituloItem} />
                    <Link to={linkIcono}>
                        <IconButton style={{color: colorPrimario }}>
                            <RemoveRedEyeIcon/>
                        </IconButton>
                    </Link>
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </Box>
       
    )
  }
  
  export default ItemListadoPelicula;