import Titulo from "../../componentes/titulo/titulo"
import ContenedorProductos from "../../contenedor-productos/contenedorProductos"

const Alimentos = () =>{
    return(
        <>
            <Titulo texto="Maquillaje"/>
            <ContenedorProductos categoria="groceries"/>
        </>
    )
}
export default Alimentos