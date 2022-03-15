import { Box } from "@mui/system";
import { Button } from "@mui/material";

const ItemCarrousel = ({tituloSlider, imagenSlider, descripcionSlider})=>{
    return (
      
          <Box
            sx={{backgroundImage:`url(${imagenSlider})`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "500px",
            backgroundSize: "cover",
            backgroundPosition: "50% 0%",
            zIndex: "-20"            
            }}>
              <Box
              sx={{
                display:"flex", 
                flexDirection:"column",
                alignItems:"center",
              }}>
                <h2>{tituloSlider}</h2>
                <p>{descripcionSlider}</p>
                <Button>Ver más</Button>
              </Box>
             </Box>
          
           
  );
}

export default ItemCarrousel