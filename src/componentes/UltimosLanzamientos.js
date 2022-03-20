import { Box } from "@mui/system";
import EstructuraPeliculasNuevasYPopulares from "./EstructuraPeliculasNuevasYPolulares";
import { useState, useEffect } from "react";
import { baseUrl, apiKey, paginaActual } from "../auxiliares/Auxiliares";

const UltimosLanzamientos = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    fetch(`${baseUrl}now_playing?api_key=${apiKey}&language=es-AR&page=${paginaActual}`)
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, [pagina]);

  const handleClickSiguiente =() =>{
    setPagina(paginaActual++) 
  }

  const handleClickAnterior = () =>{
    setPagina(paginaActual--) 
  }
  
  return (
    <Box sx={{ marginTop: 10 }}>
      <EstructuraPeliculasNuevasYPopulares 
        tituloSeccion="Ultimos Lanzamientos"
        peliculas={peliculas}
        clickBotonPagSiguiente={handleClickSiguiente}
        clickBotonPagAnterior={handleClickAnterior}
      />
    </Box>
  );
};

export default UltimosLanzamientos;
