import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import {
  colorPrimario,
  colorTipografiaPrimario,
} from "../auxiliares/Auxiliares";
import MenuDesplagable from "./MenuDesplegable";
// import imagenTicket from "../assets/ticket.svg"
import { ReactComponent as ImagenTicket } from "../assets/ticket.svg";

const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: colorPrimario }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: 100, mr: 2 }}>
              <ImagenTicket />
            </Box>

            <Typography
              sx={{
                color: colorTipografiaPrimario,
                fontSize: {
                  xs: "20px",
                  sm: "24px",
                  md: "36px",
                },
                marginTop: {
                  xs: 4,
                  sm: 4,
                  md: 3,
                },
              }}
            >
              Buscador Películas
            </Typography>
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "inline",
              },
            }}
          >
            <Button color="inherit">
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: colorTipografiaPrimario,
                }}
              >
                Home
              </Link>
            </Button>

            <Button>
              <Link
                to="/ultimos-lanzamientos"
                style={{
                  textDecoration: "none",
                  color: colorTipografiaPrimario,
                }}
              >
                Ultimos Lanzamientos
              </Link>
            </Button>

            <Button>
              <Link
                to="/populares"
                style={{
                  textDecoration: "none",
                  color: colorTipografiaPrimario,
                }}
              >
                Populares
              </Link>
            </Button>

            <Button>
              <Link
                to="/buscar"
                style={{
                  textDecoration: "none",
                  color: colorTipografiaPrimario,
                }}
              >
                Buscar
              </Link>
            </Button>
          </Box>

          <Box
            sx={{
              display: {
                xs: "inline",
                sm: "inline",
                md: "none",
              },
            }}
          >
            <MenuDesplagable />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;

