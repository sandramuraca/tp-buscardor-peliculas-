import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import { colorPrimario, colorTipografiaPrimario  } from "../auxiliares/Auxiliares";
import imagenTicket from "../assets/ticket.svg"
const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: colorPrimario }}>
        <Toolbar sx={{display:"flex", justifyContent:"space-between", flexWrap:"wrap" }}>
          <Box sx={{display:"flex", flexWrap: "wrap"}}>
          <LocalActivityIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></LocalActivityIcon>
          {/* <img src={imagenTicket} /> */}

          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Buscador Películas
          </Typography>
          </Box>
          
          <Box sx={{display:"flex", flexWrap: "wrap"}}>
          <Button color="inherit">
            <Link to="/" style={{ textDecoration: "none", color: colorTipografiaPrimario }}>
              Home
            </Link>
          </Button>

          <Button>
            <Link
              to="/ultimos-lanzamientos"
              style={{ textDecoration: "none", color: colorTipografiaPrimario  }}>
              Ultimos Lanzamientos
            </Link>
          </Button>

          <Button>
            <Link
              to="/populares"
              style={{ textDecoration: "none", color: colorTipografiaPrimario  }}>
              Populares
            </Link>
          </Button>

          <Button>
            <Link
              to="/buscar"
              style={{ textDecoration: "none", color: colorTipografiaPrimario  }}>
              Buscar
            </Link>
          </Button>
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
