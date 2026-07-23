"use client";

//HOOKS
import { useState } from "react";


//IMPORTACIONES
import { productos } from "@/data/laptop";
import { useCart } from "@/context/cartContex";

import ProductosFiltrados from "@/componentes/productosFiltrados";



//CSS y librerias externas

import { Productos } from "@/types/productos";

export default function Home() {
  const {agregarCarrito} = useCart();
 

  return (
    <div className="max-w- mx-auto px-4 py-10 bg-gray-300 ">
       <div className="flex-1">
          <ProductosFiltrados productos={productos} agregar={agregarCarrito}   />
        </div>
    </div>
  );
}
