import { Paper, Button } from "@mui/material";

const ItemCarrousel = ({tituloSlider, imagenSlider, descripcionSlider})=>{
    return (
        <Paper
         
        >
          <h2>{tituloSlider}</h2>
          <p>{descripcionSlider}</p>
          <img src={imagenSlider}/>
          
          <Button>Ver más</Button>
        </Paper>
      );
}

export default ItemCarrousel