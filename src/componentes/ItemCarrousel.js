import { Box } from "@mui/system";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

const ItemCarrousel = ({ tituloSlider, imagenSlider, descripcionSlider }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${imagenSlider})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "500px",
        backgroundSize: "cover",
        backgroundPosition: "50% 0%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "600px",
          bgcolor: "#cacaca",
          opacity: [0.9, 0.8, 0.7],
          borderRadius: "5px",
        }}
      >
        <Typography variant="h5" gutterBottom component="div" p={2}>
          {tituloSlider}
        </Typography>
        <Typography variant="body1" gutterBottom p={2}>
          {descripcionSlider}
        </Typography>
        <p></p>
        <Button>Ver más</Button>
      </Box>
    </Box>
  );
};

export default ItemCarrousel;
