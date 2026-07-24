"use client"

//prueba
import { useRouter } from "next/navigation";
import { useState } from "react";

import Link from "next/link";
import DetallesCarrito from "@/componentes/DetallesCarrito";
import { useCart } from "@/context/cartContex";
import { useAuth } from "@/context/usuarioContex";
import { GenerarFactura } from "@/lib/GenerarFactura";
import { EnviarCorreo } from "@/lib/EnviarCorreo";
import { toast } from "sonner";

export default function PaginaCarrito() {
  const { cartas, sumarCantidad, restarCantidad, eliminarProducto, limpiarCarrito, totalPrecio } = useCart();
  const { usuario } = useAuth();
  //prueba 
  const router = useRouter();
  const [procesando, setProcesando] = useState(false);


  //CONECTAR EL BOTON DE COMPRAR CON EL PDF
  async function ConfirmarCompra() {
    if (!usuario) {
      router.replace("/login?redirect=/cart");
      return;
    }

    if(cartas.length === 0)return;

    setProcesando(true);

    const generarId = `${Date.now()}`;
    //const correoDePrueba = "danae.g2507@gmail.com"
    //GENERAR EL PDF EN EL NAVEGADOR
    const pdf = await GenerarFactura({
      generarId,
      nombreCliente: usuario.nombre,
      emailCliente: usuario.email,
      elemento: cartas,
      totalPrecio,
    });

    //Guardo en el LocalStore para mostrar luego en el archivo donde irá la simulación 
    const mostrarFcatura = {
      generarId,
      nombreCliente: usuario.nombre,
      emailCliente: usuario.email,
      elemento: cartas,
      totalPrecio,
      date: new Date().toISOString(),
    };
    localStorage.setItem(
      `invoice-${generarId}`,
      JSON.stringify(mostrarFcatura)
    );

    // Descargamos el PDF localmente.
    pdf.save(`factura-${generarId}.pdf`);

    //ENVIAR FACTURA POR CORREO
    
    const enviar = await EnviarCorreo({
      email: usuario.email,
      nombre:usuario.nombre,
      generarId,
      totalPrecio,
    });

    if(enviar){
    toast.success("¡Compra confirmada! Revisa tu correo eléctronico y tus descargas.");
    }else{
      toast.error("La factura generada pero no se pudo enviar al correo.")
    }
    limpiarCarrito();
    setProcesando(false);
    router.push(`/`)
    

  
  }

  if (cartas.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="text-stone-600">Tu carrito está vacío.</p>
        <Link href="/" className="mt-3 inline-block text-sm font-medium text-stone-800 underline">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-10">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500">Carrito</p>
          <h1 className="text-2xl font-semibold text-stone-800">Tus productos</h1>
        </div>
        <button
          onClick={limpiarCarrito}
          className="text-sm font-medium text-red-600 underline"
        >
          Vaciar carrito
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
          {cartas.map((elemento) => (
            <DetallesCarrito
              key={elemento.id}
              elemento={elemento}
              alIncrementar={sumarCantidad}
              alDecrementar={restarCantidad}
              alEliminar={eliminarProducto}
            />
          ))}
        </section>

        <aside className="rounded-2xl border border-stone-200 bg-stone-50 p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-stone-800">Resumen</h2>
          <div className="mt-4 flex items-center justify-between text-sm text-stone-600">
            <span>Subtotal</span>
            <span>${totalPrecio.toFixed(2)}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm text-stone-600">
            <span>Envío</span>
            <span>Gratis</span>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-stone-200 pt-4 font-semibold text-stone-800">
            <span>Total</span>
            <span>${totalPrecio.toFixed(2)}</span>
          </div>
          {!usuario && (
            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-700">
              Debes iniciar sesión para finalizar tu compra.
            </div>
          )}
          <Link href="/" className="mt-6 inline-flex w-full justify-center rounded-lg bg-stone-900 px-4 py-2 text-sm font-semibold text-white">
            Seguir comprando
          </Link>
          <button 
          onClick={ConfirmarCompra}
          disabled={procesando}
          className="mt-6 inline-flex w-full justify-center rounded-lg bg-stone-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">
      {procesando ? "Generando..." : usuario ? "Comprar ahora" : "Comprar ahora" }
    </button>
        </aside>
      </div>
    </main>
  );
}