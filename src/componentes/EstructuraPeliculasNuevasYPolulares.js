import { Box } from "@mui/material";
import Tarjeta from "./Tarjeta";
import * as React from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Typography from "@mui/material/Typography";
import {
  colorPrimario,
  colorTipografiaPrimario,
  tipografiaPrincipal,
} from "../auxiliares/Auxiliares";
import IconButton from "@mui/material/IconButton";

//esta estructura se reutiliza en los componentes "Populares" y "Ultimos Lanzamientos" ya que son iguales
//se define la estructura de las tarjetas y el paginado

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
        color: colorTipografiaPrimario,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
          fontFamily: tipografiaPrincipal,
          fontWeight: "600",
        }}
      >
        {tituloSeccion}
      </Typography>
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
            linkTarjeta={`/detalle-pelicula/${pelicula.id}`}
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
        <IconButton
          sx={{ m: 2, bgcolor: colorPrimario }}
          onClick={clickBotonPagAnterior}
          disabled={pagina === 1}
        >
          <ArrowBackIosNewOutlinedIcon />
        </IconButton>

        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ m: 2, fontFamily: tipografiaPrincipal }}
        >
          Pagina {pagina}
        </Typography>

        <IconButton
          sx={{ m: 2, bgcolor: colorPrimario }}
          onClick={clickBotonPagSiguiente}
        >
          <ArrowForwardIosOutlinedIcon
            sx={{ color: colorTipografiaPrimario }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default EstructuraPeliculasNuevasYPopulares;
