"use client"

import Image from "next/image"
import Link from "next/link";
import {useCart} from "@/context/cartContex"

export default function Navbar (){

  //logica de sumar cantidades en el carrito
  //utilito totalCarrito para reutilizar el dódigo del CartContext
const {totalCarrito, totalPrecio} = useCart();

    return(
        <div className="navbar bg-black shadow-sm sticky top-0 z-50">
          <div className="flex-1">
            <Link href="/" className="ml-2 md:ml-4 flex items-center gap-1 md:gap-4 text-white hover:opacity-80">
              <Image
                src="/recursos/icono-lap.png"
                alt="Icono de perfil"
                width={50}
                height={50}
                className="h-8 md:h-10 w-8 md:w-10 object-contain"
              />
              <span className="text-base md:text-xl font-semibold">LaptopFriend</span>
            </Link>
          </div>
          <div className="flex-none gap-4 md:gap-4 ">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-white btn-circle btn-sm md:btn-md ">
                <div className="indicator">
                  {/* el icono del carrito utilizando plantilla*/}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 md:h-5 w-4 md:w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                  <span className="badge badge-xs md:badge-sm indicator-item">  {/*burbaja del carrito */}
                    {totalCarrito}
                    </span> 
                </div>
              </div>
              <div
                tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-50 mt-3 w-40 md:w-50 shadow ">
                <div className="card-body">
                  <span className="text-sm md:text-lg font-bold">{totalCarrito}</span> 
                  <span className="text-xs md:text-info">Subtotal : ${totalPrecio.toFixed(2)}</span>
                  <div className="card-actions ">
                  <Link href="/cart" className="btn btn-primary btn-block btn-sm">
                  Ver Carrito
                </Link>
                </div>
              </div>
            </div>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm md:btn-md avatar ">
                <div className="w-8 md:w-10 rounded-full " >
                  <Image
                    alt="Sesion de cuenta"
                    src="/recursos/icono.png"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <ul
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-40 md:w-52 p-2 shadow">
                <li><a>Cerrar Sesión</a></li>
              </ul>
            </div>
          </div>
        </div>
    );
    
};
