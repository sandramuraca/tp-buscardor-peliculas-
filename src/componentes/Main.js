import { Box } from '@mui/material';
import Carrousel from './Carrousel';
import Listados from './Listados';

const Main = () => {
    return (
      
      <Box sx={{marginTop: 10}}>
        <h3>Este el el main</h3>
        <Carrousel/>
           <Box sx={{display: "flex",
                    justifyContent: "space-between",
                    padding: 20 }}>
          <Listados titulo="Películas Populares" 
                    urlListado="popular" />
          <Listados titulo="Películas Mejor Puntuadas" 
                    urlListado="top_rated"/>
        </Box>
      </Box>
        
    )
  }
  
  export default Main;