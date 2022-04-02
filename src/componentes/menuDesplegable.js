import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import {
  colorPrimario,
  colorTipografiaPrimario,
} from "../auxiliares/Auxiliares";

const MenuDesplegable = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to="/ultimos-lanzamientos" style={{ textDecoration: "none" }}>
            Ultimos Lanzamientos
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to="/populares" style={{ textDecoration: "none" }}>
            Populares
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to="/buscar" style={{ textDecoration: "none" }}>
            Buscar
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuDesplegable;
