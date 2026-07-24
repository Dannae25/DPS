"use client";

import { useState } from "react";
import Image from "next/image";
import { Productos } from "../types/productos";

interface Props {
  producto: Productos;
  agregar: (producto: Productos) => void;
}

export default function CartaProductos({ producto, agregar }: Props) {
  const [mostrarCompleta, setMostrarCompleta] = useState(false);

  //Agrego la variable para la funcionalidad de leer más
  const descripcionCorta =
    producto.descripcion.length > 100
      ? `${producto.descripcion.slice(0, 100)}...`
      : producto.descripcion;

  return (
    <article className="card card-side flex flex-col md:flex-row bg-base-300 shadow-sm border border-base-300 overflow-hidden">
    <figure className="relative w-full aspect-[4/3] md:aspect-auto md:basis-1/2 md:shrink-0 bg-white">
  <Image
    src={producto.urlImage}
    alt={producto.titulo}
    fill
    className="object-contain "
    sizes="(max-width: 768px) 100vw, 40vw"
  />
</figure>

      <div className="card-body p-4 flex flex-col justify-between overflow-hidden">
        <div>
          <span className="badge badge-outline badge-sm w-fit m-2">
            {producto.categoria}
          </span>

          <h2 className="card-title text-base">{producto.titulo}</h2>
          <p className="text-xs text-base-content/100">{producto.marca}</p>

          {/* Diseño y logica para que funcione la acción*/}
          <div className="text-sm text-base-content/75 mt-2">
            <div
              className={
                mostrarCompleta
                  ? "max-h-28 overflow-y-auto"
                  : "max-h-16 overflow-hidden"
              }
            >
              <p className="whitespace-normal break-words">
                {mostrarCompleta ? producto.descripcion : descripcionCorta}
              </p>
            </div>

            {producto.descripcion.length > 100 && (
              <button
                type="button"
                onClick={() => setMostrarCompleta((v) => !v)}
                className="mt-1 text-sm font-medium text-black hover:text-red-600"
              >
                {mostrarCompleta ? "Ver menos" : "Leer más"}
              </button>
            )}
          </div>
          {/*Fin de diseño y logica de la acción leer mas y menos */}
        </div>

        <div className="card-actions items-center justify-between mt-3">
          <span className="font-semibold">${producto.precio.toFixed(2)}</span>

          <button
            type="button"
            onClick={() => agregar(producto)}
            className="btn btn-error btn-md text-white"
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}