import { Box } from "@mui/material";
import Tarjeta from "./Tarjeta";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const EstructuraPeliculasNuevasYPopulares = ({ tituloSeccion, peliculas }) => {
  return (
    <Box
      sx={{
        marginTop: 5,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {peliculas.map((pelicula) => (
          <Tarjeta
            key={pelicula.id}
            tituloTarjeta={pelicula.title}
            imagenTarjeta={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
            linkTarjeta={`/detallePelicula/${pelicula.id}`}
          />
        ))}
      </Box>
      <Box>
        <Stack spacing={2}>
          <Pagination count={10} />
        </Stack>
      </Box>
    </Box>
  );
};

export default EstructuraPeliculasNuevasYPopulares;
