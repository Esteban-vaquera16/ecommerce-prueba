import { useEffect, useState } from "react";
import Card from "../componentes/card/card";
import "./style.css";

const ContenedorProductos = ({ categoria = "", limite = 20 }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchProductos = async () => {
      try {
        setCargando(true);
        setError("");

        // 👇 elige UNA API, dejo ejemplo DummyJSON
        const base = "https://dummyjson.com/products";
        const url = categoria
          ? `${base}/category/${encodeURIComponent(categoria)}?limit=${limite}`
          : `${base}?limit=${limite}`;

        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        const lista = Array.isArray(data.products) ? data.products : [];

        const productosFormateados = lista.map((p) => ({
          id: p.id,
          titulo: p.title,
          // 👇 imágenes: usa la primera si existe, sino thumbnail
          imagen: (Array.isArray(p.images) && p.images[0]) ? p.images[0] : p.thumbnail,
        }));

        setProductos(productosFormateados);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error al cargar productos:", err);
          setError("No pudimos cargar los productos. Probá más tarde.");
        }
      } finally {
        setCargando(false);
      }
    };

    fetchProductos();
    return () => controller.abort();
  }, [categoria, limite]);

  return (
    <div className="contenedor-productos">
      {cargando && <p>Cargando productos...</p>}
      {!cargando && error && <p>{error}</p>}
      {!cargando && !error && productos.length === 0 && <p>No hay productos disponibles.</p>}
      {!cargando && !error && productos.map((prod) => (
        <Card key={prod.id} id={prod.id} titulo={prod.titulo} imagen={prod.imagen} />
      ))}
    </div>
  );
};

export default ContenedorProductos;


