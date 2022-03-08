import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import ItemListadoPelicula from './ItemListadoPelicula';
import Typography from '@mui/material/Typography';
import { colorPrimario, baseUrl, apiKey } from "../auxiliares/Auxiliares";

const Listados = ({titulo, urlListado}) => {

  const [peliculas, setPeliculas] = useState([])
  useEffect (() => {
    fetch(`${baseUrl}${urlListado}?api_key=${apiKey}&language=es-AR&page=1`)
    .then(res => res.json())
    .then(data => setPeliculas(data.results))
  }, [])
    return (
      <Box sx={{ height: "450px",
      overflowY: "scroll", borderBottom: `1px ${colorPrimario} solid`}}>
        <Box sx={{ bgcolor: colorPrimario,
                   height: 70,
                   display: "flex",
                   alignItems: "center", 
                   justifyContent: "center",
                   borderRadius: 1}}>
        <Typography sx={{ bgcolor: colorPrimario,
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
          link={`/detallePelicula/${pelicula.id}`}/>
        ) )}
      </Box>
  
    )
  }
  
  export default Listados;