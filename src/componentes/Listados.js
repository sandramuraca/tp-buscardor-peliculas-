import { useState, useEffect } from "react";
import DetallePelicula from "./DetallePelicula"
import { Box } from "@mui/system";

const Listados = ({titulo, url}) =>{

  const [peliculas, setPeliculas] = useState([])
  useEffect (() => {
    fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=1e2f4ae9cf56f3e1c8367fb458677972&language=es-AR&page=1`)
    .then(res => res.json())
    .then(data => setPeliculas(data.results))
  }, [])
    return (
      
      <Box>
        <h2>{titulo}</h2>
        {peliculas.map(pelicula => (
          <DetallePelicula
          titulo={pelicula.title}
          imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
          link={`/${peliculas.id}`}
          />
        ) )}
      </Box>
  
    )
  }
  
  export default Listados;