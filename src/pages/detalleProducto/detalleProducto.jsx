import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./detalle-producto.css";

const DetalleProducto = ({ agregarAlCarrito }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducto = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Error al traer producto");
        const data = await res.json();
        setProducto({
          id: data.id,
          nombre: data.title,
          precio: data.price,
          descripcion: data.description,
          img: Array.isArray(data.images) ? data.images[0] : data.thumbnail,
          categoria: data.category,
        });
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error al cargar producto:", err);
        }
      }
    };

    fetchProducto();
    return () => controller.abort();
  }, [id]);

  if (!producto) return <p>Cargando detalle...</p>;

  return (
    <div className="detalle-producto">
      <div className="div-img">
        <img src={producto.img} alt={producto.nombre} />
      </div>
      <div className="div-info-prod">
        <h3>{producto.nombre}</h3>
        <p>
          <b>Precio:</b> ${producto.precio}
        </p>
        <p>
          <b>Categoría:</b> {producto.categoria}
        </p>
        <p>
          <b>Descripción:</b> {producto.descripcion}
        </p>
        <button
          onClick={() =>
            agregarAlCarrito
              ? agregarAlCarrito(producto)
              : alert("Se agregó tu producto al carrito")
          }
        >
          🛒 Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default DetalleProducto;
