import Logo from "../componentes/logo/logo";
import logo from "../componentes/assets/logo-local.png";
import carrito from "../componentes/assets/carrito.png";
import Boton from "../componentes/boton/boton";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () =>{
    const navigate = useNavigate();

    return(
        <nav className="barra-navegacion">
            <div className="div-logo">
                <Logo imagen={logo} />
                <h2>Ecomerce Monteros</h2>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/smartphones">Telefonos</Link></li>
                <li><Link to="/home-decoration">Decoraciones</Link></li>
                <li><Link to="/fragrances">Perfumes</Link></li>
                <li><Link to="/groceries">Alimentos</Link></li>
            </ul>
            <Link to="/carrito">
                <Boton
                 className="btn-carrito"
                 text="Carrito"  
                 img={carrito}
                 onClick={() => navigate('/carrito')} />
            </Link>
        </nav>
    )
}
export default NavBar