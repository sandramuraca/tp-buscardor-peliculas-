import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from "react-router-dom";


const Buscador = () =>{
  
  const [serchParams, setSeacrhParams] = useSearchParams()

    return (

      <Box sx={{ marginTop: 10 }}>
       
           <TextField
              sx={{ width: 400 }}
              id="standard-basic"
              label="Buscar película"
              variant="standard"
              // onChange={escritoInput}
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