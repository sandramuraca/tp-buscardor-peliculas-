import { Box } from "@mui/material";
import EstructuraPeliculasNuevasYPopulares from "./EstructuraPeliculasNuevasYPolulares"
import { useState, useEffect } from "react";
import { baseUrl, apiKey } from "../auxiliares/Auxiliares";

const Populares = () => {
  const [peliculas, setPeliculas] = useState([])
  useEffect (() => {
    fetch(`${baseUrl}popular?api_key=${apiKey}&language=es-AR&page=1`)
    .then(res => res.json())
    .then(data => setPeliculas(data.results))
  }, [])

    return (
      <Box sx={{ marginTop: 10 }}>
        <EstructuraPeliculasNuevasYPopulares
          tituloSeccion="Películas Populares"
          peliculas={peliculas}
        />
        </Box>
    )
  }
  
  export default Populares;