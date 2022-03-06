import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import ItemListadoPelicula from './ItemListadoPelicula';
import Typography from '@mui/material/Typography';

const Listados = ({titulo, urlListado}) => {

  const [peliculas, setPeliculas] = useState([])
  useEffect (() => {
    fetch(`https://api.themoviedb.org/3/movie/${urlListado}?api_key=1e2f4ae9cf56f3e1c8367fb458677972&language=es-AR&page=1`)
    .then(res => res.json())
    .then(data => setPeliculas(data.results))
  }, [])
    return (
      <Box>
        <Box sx={{ bgcolor:"#5865f2",
                   height: 70,
                   display: "flex",
                   alignItems: "center", 
                   justifyContent: "center",
                   width: '110%',
                   borderRadius: 1}}>
        <Typography sx={{ bgcolor:"#5865f2",
                           color: "white"}} 
        variant="h4" 
        gutterBottom component="div">
        {titulo}
        </Typography>
        </Box>

        {peliculas.map(pelicula => (
          <ItemListadoPelicula 
          key={pelicula.id}
          titulo={pelicula.title}
          imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
          link={`/detallePelicula/${peliculas.id}`}/>
        ) )}
      </Box>
  
    )
  }
  
  export default Listados;