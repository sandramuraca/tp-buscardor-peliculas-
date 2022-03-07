import { Box } from "@mui/system";
import EstructuraPeliculasNuevasYPopulares from "./EstructuraPeliculasNuevasYPolulares"
import { useState, useEffect } from "react";

const UltimosLanzamientos = () => {
  const [peliculas, setPeliculas] = useState([])
  useEffect (() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=1e2f4ae9cf56f3e1c8367fb458677972&language=es-AR&page=1`)
    .then(res => res.json())
    .then(data => setPeliculas(data.results))
  }, [])

    return (
      <Box sx={{ marginTop: 10 }}>
        <EstructuraPeliculasNuevasYPopulares
          titulo="Ultimos Lanzamientos"
          peliculas={peliculas}/>
      </Box>
      
     
    )
  }
  
  export default UltimosLanzamientos;