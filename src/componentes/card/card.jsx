import Boton from "../boton/boton";
import { useNavigate } from "react-router-dom";

const Card = ({ id, titulo, imagen }) => {
  const navigate = useNavigate();
  const src = imagen || "/placeholder.png"; // opcional: imagen por defecto

  return (
    <div className="card-producto">
      <img src={src} alt={titulo || "Producto"} />
      <h3>{titulo}</h3>
      <Boton
        className="btn-card"
        text="Mostrar información"
        onClick={() => navigate(`/producto/${id}`)}
      />
    </div>
  );
};

export default Card;

