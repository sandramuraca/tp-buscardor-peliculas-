import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiKey } from "../auxiliares/Auxiliares";

const Buscador = () => {
 const [searchParams, setSearchParams] = useSearchParams({ busquedaUsuario: ""})

 const [peliculas, setPeliculas] = useState([])

 const handleChange = (e) => {
  setSearchParams({busquedaUsuario:e.target.value})
 }

 useEffect(() => {
   fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es&query=${searchParams.get("busquedaUsuario")}`)
   .then(res => res.json())
   .then(data => setPeliculas(data.results))
 }, [searchParams])

  return (
       <Box sx={{ marginTop: 10 }}>
      <TextField
        sx={{ width: 400 }}
        id="standard-basic"
        label="Buscar película"
        variant="standard"
        onChange={handleChange}
        value={searchParams.get("busquedaUsuario")}
       
      />
      <Button
        margin="normal"
        variant="outline"
        endIcon={<SearchIcon />}
        //onClick={clickBoton}
      >
        Buscar
      </Button>
      
      {peliculas.map(pelicula => <h1>{pelicula.title}</h1>)}
    </Box>
  )
};

export default Buscador;
//const [searchParams, setSeacrhParams] = useSearchParams({
  //   busquedaUsuario: "",
  // });
  // const [peliculas, setPeliculas] = useState([]);

  // useEffect(() => {
    
  //   fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=c7e318bc4679faa16a6f940e1435e019&languaje=en-EN&query=${searchParams.get(
  //       "busquedaUsuario"
  //     )}&page=1`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setPeliculas(data.results));
  // }, [searchParams]);

  // const handleChange = (e) => {
  //   setSeacrhParams({
  //     busquedaUsuario: e.target.value,
  //   });
  // };

 
  // return (
  //   <Box sx={{ marginTop: 10 }}>
  //     <TextField
  //       sx={{ width: 400 }}
  //       id="standard-basic"
  //       label="Buscar película"
  //       variant="standard"
  //       onChange={handleChange}
  //       value={searchParams.get("busquedaUsuario")}
  //     />
  //     <Button
  //       margin="normal"
  //       variant="outline"
  //       endIcon={<SearchIcon />}
  //       onClick={clickBoton}
  //     >
  //       Buscar
  //     </Button>
  //   </Box>