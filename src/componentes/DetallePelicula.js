import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseUrl, apiKey } from "../auxiliares/Auxiliares";
import { colorTipografiaPrimario } from "../auxiliares/Auxiliares";

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
      }}
    >
      <Box>
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
          m: 2,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          sx={{ m: 2, color: colorTipografiaPrimario }}
        >
          {contenidoDetalle.title}
        </Typography>

        <Typography
                variant="h4"
                sx={{ color: "white", m:2}}
              >
                {contenidoDetalle.release_date &&
                  contenidoDetalle.release_date.slice(0, 4)}
              </Typography>

        <Typography variant="h5" component="div" sx={{ m: 2, color: "white" }}>
          General:
        </Typography>

        <Typography variant="body1" gutterBottom sx={{ m: 2, color: "white" }}>
          {contenidoDetalle.overview}
        </Typography>

        <Typography variant="h5" component="div" sx={{ m: 2, color: "white" }}>
          Generos:
        </Typography>

        {contenidoDetalle.genres && 
        contenidoDetalle.genres.map((genero) => (
          <Typography variant="body1" sx={{ m: 2, color: "white" }}>
          {genero.name}
        </Typography>
        ))}
  
      </Box>
    </Box>
  );
};

export default DetallePelicula;
