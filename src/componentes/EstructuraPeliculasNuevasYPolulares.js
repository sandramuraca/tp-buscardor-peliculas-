import { Box } from "@mui/material";
import Tarjeta from "./Tarjeta";

const EstructuraPeliculasNuevasYPopulares = ( {tituloSeccion, peliculas} ) => {
    return (
      <Box sx={{ marginTop: 10 }}>
        <h2>{tituloSeccion}</h2>

        {peliculas.map(pelicula => <h3>{pelicula.title}</h3>)}

        {/* {peliculas.map(pelicula => (
          <Tarjeta
          key={pelicula.id}
          tituloTarjeta={pelicula.title}
          imagenTarjeta={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
          linkTarjeta={`/detallePelicula/${pelicula.id}`}
          />
        ))} */}
       
        <h3>Paginador</h3>
      </Box>
    )
  }
  
  export default EstructuraPeliculasNuevasYPopulares;
  