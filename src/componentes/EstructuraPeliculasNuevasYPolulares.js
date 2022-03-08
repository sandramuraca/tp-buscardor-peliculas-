import { Box } from "@mui/material";

const EstructuraPeliculasNuevasYPopulares = ( {titulo, peliculas} ) => {
    return (
      <Box sx={{ marginTop: 10 }}>
        <h2>{titulo}</h2>
        {peliculas.map(pelicula => <h3>{pelicula.title}</h3>)}
       
        <h3>Paginador</h3>
      </Box>
    )
  }
  
  export default EstructuraPeliculasNuevasYPopulares;