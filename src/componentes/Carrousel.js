import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { useEffect, useState } from "react";
import {  baseUrl, apiKey } from "../auxiliares/Auxiliares";
import ItemCarrousel from "./ItemCarrousel";

const Carrousel = () => {
  
  const [peliculas, setPeliculas] = useState([])
  useEffect (() => {
    fetch(`${baseUrl}now_playing?api_key=${apiKey}&language=es-AR&page=1`)
    .then(res => res.json())
    .then(data => setPeliculas(data.results))
  }, [])

  return (
    <Carousel
    animation="slide"
    duration="800"
    >
      {peliculas.map((pelicula) => (
        <ItemCarrousel
        key={pelicula.id}
        tituloSlider={pelicula.title}
        imagenSlider={`url(https://image.tmdb.org/t/p/original/${pelicula.poster_path}
        `}
        descripcionSlider={pelicula.overview}
        />
      ))}
    </Carousel>
  );
};


export default Carrousel;