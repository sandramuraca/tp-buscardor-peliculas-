import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  baseUrl,
  apiKey,
  colorPrimario,
  colorTipografiaPrimario,
  tipografiaPrincipal,
} from "../auxiliares/Auxiliares";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import { Chip } from "@mui/material";

//useParams recibe el valor "variable" declarado en el ruteo de map para el componente "Detalle pelicula"
//con el id de cada pelicula trae de la api la informacion a mostrar en cada link

const DetallePelicula = () => {
  const [contenidoDetalle, setContenidoDetalle] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`${baseUrl}${params.idPelicula}?api_key=${apiKey}&language=es-ES`)
      .then((res) => res.json())
      .then((data) => setContenidoDetalle(data));
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${contenidoDetalle.backdrop_path})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundBlendMode: "darken",
        mt: 8,
      }}
    >
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "inline",
          },
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w300/${contenidoDetalle.poster_path}`}
        />
      </Box>

      <Box
        sx={{
          width: "450px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "5px",
          ml: 2,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          sx={{
            mb: 1,
            color: colorTipografiaPrimario,
            fontFamily: tipografiaPrincipal,
            fontWeight: "600",
          }}
        >
          {contenidoDetalle.title}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            color: colorTipografiaPrimario,
            mb: 1,
            fontFamily: tipografiaPrincipal,
            fontWeight: "600",
          }}
        >
          {contenidoDetalle.release_date &&
            contenidoDetalle.release_date.slice(0, 4)}
        </Typography>

        <Typography
          variant="h5"
          component="div"
          sx={{
            m: 1,
            color: colorTipografiaPrimario,
            fontFamily: tipografiaPrincipal,
            fontWeight: "600",
          }}
        >
          General:
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 1,
            color: colorTipografiaPrimario,
            fontFamily: tipografiaPrincipal,
            fontWeight: "600"
          }}
        >
          {contenidoDetalle.overview}
        </Typography>

        <Typography
          variant="subtitle1"
          component="div"
          sx={{
            color: colorTipografiaPrimario,
            fontFamily: tipografiaPrincipal,
            fontWeight: "600",
          }}
        >
          Generos:
        </Typography>
        <Box>
          {contenidoDetalle.genres &&
            contenidoDetalle.genres.map((genero) => (
              <Chip
                key={genero.id}
                icon={<MovieCreationIcon />}
                label={genero.name}
                sx={{
                  m: 2,
                  color: colorTipografiaPrimario,
                  bgcolor: colorPrimario,
                }}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DetallePelicula;
