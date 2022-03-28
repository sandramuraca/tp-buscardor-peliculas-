import React from "react";
import Carousel from "react-material-ui-carousel";
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
    indicators="true"
    >
      {peliculas.map((pelicula) => (
        <ItemCarrousel
        key={pelicula.id}
        tituloSlider={pelicula.title}
        imagenSlider={`https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}
        `}
        descripcionSlider={pelicula.overview}
        linkCarrousel={`/detalle-pelicula/${pelicula.id}`}
        />
      ))}
    </Carousel>
  );
};


export default Carrousel;