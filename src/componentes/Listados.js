import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import ItemListadoPelicula from "./ItemListadoPelicula";
import Typography from "@mui/material/Typography";
import { colorPrimario, baseUrl, apiKey } from "../auxiliares/Auxiliares";

//Aca estoy haciendo el fetch a la api, en la prop `urlListado` le estoy pasando el endpoint al que quiero que vaya a buscar la información, por que los listados son 2 uno de "Peliculas Populares" que apunta al end point `popular` y otro "Mejor Puntuadas" que apunta a `top_rated`, tambien le estoy pasando como prop `tituloListado` que define el texto del div que esta sobre el listado de los item de cada pelicula, los valores de estas props los estoy pasando en el componente Main. donde estoy llamando estos componentes.

const Listados = ({ tituloListado, urlListado }) => {
  const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}${urlListado}?api_key=${apiKey}&language=es-AR&page=1`)
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, []);
  return (
    <Box>
      <Box
        sx={{
          bgcolor: colorPrimario,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
          width: {
            xs: "80%",
            md: "100%"
          }
         
        }}
      >
        <Typography
          sx={{ bgcolor: colorPrimario, color: "white" }}
          variant="h5"
          gutterBottom
          component="div"
        >
          {tituloListado}
        </Typography>
      </Box>

      <Box
        sx={{
          height: "400px",
          overflowY: "scroll",
          borderBottom: `1px ${colorPrimario} solid`,
          width: {
            xs: "80%",
            md: "100%"
          }
      }}
      >        
        {peliculas.map((pelicula) => (
          <ItemListadoPelicula
            key={pelicula.id}
            tituloItem={pelicula.title}
            imagenItem={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
            linkIcono={`/detalle-pelicula/${pelicula.id}`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Listados;
