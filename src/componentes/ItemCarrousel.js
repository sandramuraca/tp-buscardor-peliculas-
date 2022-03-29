import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { colorPrimario } from "../auxiliares/Auxiliares";

const ItemCarrousel = ({
  tituloSlider,
  imagenSlider,
  descripcionSlider,
  linkCarrousel,
}) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${imagenSlider})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "500px",
        backgroundSize: "cover",
        backgroundPosition: "50% 30%",
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
        <Link to={linkCarrousel}>
          <IconButton style={{ color: colorPrimario }}>
            <RemoveRedEyeIcon />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default ItemCarrousel;
