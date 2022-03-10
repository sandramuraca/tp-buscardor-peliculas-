const Tarjeta = ( {tituloTarjeta, imagenTarjeta, linkTarjeta} ) =>{
    return (
      <div>
        <h3>{tituloTarjeta}</h3>
        <img src={imagenTarjeta}/>
        <a href={linkTarjeta}>{">"}</a>
       
      </div>
  
    )
  }
  
  export default Tarjeta;