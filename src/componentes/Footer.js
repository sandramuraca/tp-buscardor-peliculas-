import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";
import {
  colorPrimario,
  colorTipografiaPrimario,
  tipografiaPrincipal,
} from "../auxiliares/Auxiliares";

const Footer = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        flexDirection: "column",
        textAlign: "center",
        bgcolor: colorPrimario,
        width: "100%",
        height: "100px",
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        sx={{
          color: colorTipografiaPrimario,
          fontFamily: tipografiaPrincipal,
          mt: 1,
        }}
      >
        Hecho por Sandra - 2022
      </Typography>

      <IconButton
        target="_blank"
        href="https://www.linkedin.com/in/sandra-muraca-13a76146/"
        sx={{ color: colorTipografiaPrimario }}
      >
        <LinkedInIcon fontSize="medium" />
      </IconButton>

      <IconButton
        target="_blank"
        href="mailto:sandramuraca@gmail.com"
        sx={{ color: colorTipografiaPrimario }}
      >
        <MailIcon fontSize="medium" />
      </IconButton>

      <IconButton
        target="_blank"
        href="https://github.com/sandramuraca"
        sx={{ color: colorTipografiaPrimario }}
      >
        <GitHubIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
};

export default Footer;
