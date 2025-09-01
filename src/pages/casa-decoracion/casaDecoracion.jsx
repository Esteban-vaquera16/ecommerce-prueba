import Titulo from "../../componentes/titulo/titulo"
import ContenedorProductos from "../../contenedor-productos/contenedorProductos"

const DecoracionCasa = () =>{
    return(
        <>
            <Titulo texto="Decoraciones para tu casa"/>
            <ContenedorProductos categoria="home-decoration"/>
        </>
    )
}
export default DecoracionCasa