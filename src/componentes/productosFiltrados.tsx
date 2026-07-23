import { Productos } from "../types/productos";
import  CartaProductos from "./CartaProductos";


interface Props {
    productos: Productos[];
    agregar: (producto: Productos) => void;
}

export default function ProductosFiltrados ({productos, agregar}: Props) {
  if (productos.length === 0){
    return (
      <p className="text-center text-base-content/60 py-10">
        No hay ninguna laptop que coincida.
      </p>
        );
    }

    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {productos.map((producto) => (
        <CartaProductos key={producto.id} producto={producto} agregar={agregar} />
      ))}
    </div>
  );
}