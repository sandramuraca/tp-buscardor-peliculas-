import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";
import { colorPrimario } from "../auxiliares/Auxiliares";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        flexDirection: "column",
        textAlign: "center",
        bgcolor: colorPrimario,
        height: 90,
      }}
    >
      <Typography variant="h6" sx={{ color: "white" }}>
        Hecho con Amor por Sandra - 2022
      </Typography>

      <IconButton target="_blank" href="https://www.linkedin.com/in/sandra-muraca-13a76146/" sx={{ color: "white" }}>
        <LinkedInIcon fontSize="large" />
      </IconButton>
      <IconButton target="_blank" href="mailto:sandramuraca@gmail.com" sx={{ color: "white" }}>
        <MailIcon fontSize="large" />
      </IconButton>
      

    <IconButton  target="_blank" href="https://github.com/sandramuraca" sx={{ color: "white" }}>
        <GitHubIcon fontSize="large" />
      </IconButton>

    </Box>
  );
};

export default Footer;
