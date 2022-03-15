import { Box } from '@mui/material';
import Carrousel from './Carrousel';
import Listados from './Listados';

const Main = () => {
    return (
      
      <Box sx={{marginTop: 10}}>
    
        <Carrousel/>
           <Box sx={{display: "flex",
                    justifyContent: "space-around",
                    padding: 20 }}>
          <Listados tituloListado="Películas Populares" 
                    urlListado="popular" />
          <Listados tituloListado="Películas Mejor Puntuadas" 
                    urlListado="top_rated"/>
        </Box>
      </Box>
        
    )
  }
  
  export default Main;