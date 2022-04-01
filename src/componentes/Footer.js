import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";
import {
  colorPrimario,
  colorTipografiaPrimario,
} from "../auxiliares/Auxiliares";

const Footer = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        flexDirection: "column",
        textAlign: "center",
        bgcolor: colorPrimario,
        height: 90,
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        sx={{ color: colorTipografiaPrimario }}
      >
        Hecho con Amor por Sandra - 2022
      </Typography>

      <IconButton
        target="_blank"
        href="https://www.linkedin.com/in/sandra-muraca-13a76146/"
        sx={{ color: colorTipografiaPrimario }}
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>

      <IconButton
        target="_blank"
        href="mailto:sandramuraca@gmail.com"
        sx={{ color: colorTipografiaPrimario }}
      >
        <MailIcon fontSize="large" />
      </IconButton>

      <IconButton
        target="_blank"
        href="https://github.com/sandramuraca"
        sx={{ color: colorTipografiaPrimario }}
      >
        <GitHubIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default Footer;
