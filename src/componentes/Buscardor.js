import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";


const Buscador = () =>{


const [searchParams, setSeacrhParams] = useSearchParams({
    busquedaUsuario: ""
  })

useEffect(() =>{
  //esta api se reemplaza con la de peliculas
  fetch(`https://rickandmortyapi.com/api/character/?name=${searchParams.get("busquedaUsuario")}`)
  .then(res => res.json())
  .then(data => console.log(data))
}, [searchParams])

const handleChange = (e) =>{
  setSeacrhParams({
    busquedaUsuario : e.target.value
  })
}

    return (

      <Box sx={{ marginTop: 10 }}>
       
           <TextField
              sx={{ width: 400 }}
              id="standard-basic"
              label="Buscar película"
              variant="standard"
              onChange={handleChange}
              value={searchParams.get("busquedaUsuario")}

        />


          <Button
            margin="normal"
            variant="outline"
            endIcon={<SearchIcon />}
            // onClick={clickBoton}
          >
            Buscar
          </Button>
         
      </Box>
     
    )
  }
  
  export default Buscador;