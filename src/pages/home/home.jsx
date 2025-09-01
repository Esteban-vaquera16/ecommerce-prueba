import Titulo from "../../componentes/titulo/titulo"
import ContenedorProductos from "../../contenedor-productos/contenedorProductos"

const Home = () =>{
    return(
        <>
            <Titulo texto="Bienvenidos al super Monteros"/>
            <ContenedorProductos/>
        </>
    )
}
export default Home