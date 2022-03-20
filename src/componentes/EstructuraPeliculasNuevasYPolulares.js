import { Box } from "@mui/material";
import Tarjeta from "./Tarjeta";
import * as React from "react";
import { Button } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Typography from "@mui/material/Typography";

const EstructuraPeliculasNuevasYPopulares = ({
  tituloSeccion,
  peliculas,
  clickBotonPagSiguiente,
  clickBotonPagAnterior,
  pagina,
}) => {
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
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          startIcon={<ArrowBackIosNewOutlinedIcon />}
          sx={{ m: 2 }}
          onClick={clickBotonPagAnterior}
        >
          Página Anterior
        </Button>
        <Typography variant="h5" gutterBottom component="div" sx={{ m: 2 }}>
          Pagina {pagina}
        </Typography>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIosOutlinedIcon />}
          sx={{ m: 2 }}
          onClick={clickBotonPagSiguiente}
        >
          Página Siguiente
        </Button>
      </Box>
    </Box>
  );
};

export default EstructuraPeliculasNuevasYPopulares;
