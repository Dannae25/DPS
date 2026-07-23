"use client";

//HOOKS
import { useState } from "react";


//IMPORTACIONES
import { productos } from "@/data/laptop";
import { useCart } from "@/context/cartContex";

import ProductosFiltrados from "@/componentes/ProductosFiltrados";
import FiltroCategorias from "@/componentes/FiltroCategorias";



//CSS y librerias externas



export default function Home() {
  const {agregarCarrito} = useCart();

  const [seleccionarCategoria, setSeleccionarCategoria] = useState<string[]>([]);
  const [seleccionarMarca, setSeleccionarMarca] = useState<string[]>([])

  const categoria = Array.from(new Set(productos.map((productos) => productos.categoria)));
  const marca = Array.from(new Set(productos.map((productos) => productos.marca)));

  function alCambiarCategoria(categoria: string) {
    setSeleccionarCategoria((prev) =>
      prev.includes(categoria)
        ? prev.filter((categoria) => categoria !== categoria)
        : [...prev, categoria]
    );
  }

  function alCambiarMarca(marca: string) {
    setSeleccionarMarca((prev) =>
      prev.includes(marca) ? prev.filter((marca) => marca !== marca) : [...prev, marca]
    );
  }

  function limpiarFiltro() {
    setSeleccionarCategoria([]);
    setSeleccionarMarca([]);
  }

  // Un producto se muestra si:
  // (no hay categorías marcadas O su categoría está entre las marcadas)
  // Y
  // (no hay marcas marcadas O su marca está entre las marcadas)
  const filtrarProductos = productos.filter((productos) => {
    const esCategoria =
      seleccionarCategoria.length === 0 || seleccionarCategoria.includes(productos.categoria);
    const esMarca =
      seleccionarMarca.length === 0 || seleccionarMarca.includes(productos.marca);
    return esCategoria && esMarca;
  });


  return (
  <div className="max-w-12xl mx-auto px-4 py-6 bg-gray-300">
      <h1 className="text-2xl font-bold mb-1">Catálogo de LaptopFriend</h1>
      <p className="text-sm text-base-content/60 mb-6">
        Hay {filtrarProductos.length} producto(s)
      </p>

      {/* flex-col en móvil el sidebar se  mostrará arriba, y el grid abajo) y flex-row en
          desktop el sidebar se mostrara a la izquierda  
          Parte resposnive de móvil*/}
      <div className="flex flex-col lg:flex-row gap-6">
        <FiltroCategorias
          categoria={categoria}
          marca={marca}
          seleccionarCategoria={seleccionarCategoria}
          seleccionarMarca={seleccionarMarca}
          alCambiarCategoria={alCambiarCategoria}
          alCambiarMarca={alCambiarMarca}
          limpiarFiltro={limpiarFiltro}
        />
    <div className="flex-1">
          <ProductosFiltrados productos={filtrarProductos} agregar={agregarCarrito} />
        </div>
    </div>
  </div>
  );
}
