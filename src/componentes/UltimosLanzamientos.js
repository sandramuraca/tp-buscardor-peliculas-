import { Box } from "@mui/system";
import EstructuraPeliculasNuevasYPopulares from "./EstructuraPeliculasNuevasYPolulares"
import { useState, useEffect } from "react";
import {  baseUrl, apiKey } from "../auxiliares/Auxiliares";

const UltimosLanzamientos = () => {
  const [peliculas, setPeliculas] = useState([])
  useEffect (() => {
    fetch(`${baseUrl}now_playing?api_key=${apiKey}&language=es-AR&page=1`)
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