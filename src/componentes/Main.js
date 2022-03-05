import { Box } from '@mui/material';
import Carrousel from './Carrousel';
import Listados from './Listados';

const Main = () =>{
    return (
      
        <Box sx={{ marginTop: 10 }}>
          <h3>Este el el main</h3>
          <Carrousel/>
          <Listados titulo="Películas Populares" url="popular" />
          <Listados titulo="Películas Mejor Puntuadas" url="top_rated"/>
        </Box>
        
    )
  }
  
  export default Main;