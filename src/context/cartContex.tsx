//Declaro el lado del cliente
"use client"
 //importo los hooks para que me almacenen
 //estado global para manejar el carrito de compras 
import { createContext, useContext, useState, useEffect,ReactNode, } from "react";

//importo las alertas
import {toast} from "sonner";
import { Productos, carritoItem } from "../types/productos";

const CartStorageKey = "ecommerce-laptop";

//Menu de opciones para poder agregar, sumar, restar o quitar un producto
interface menuOpciones {
    cartas: carritoItem[];
    agregarCarrito: (producto: Productos) => void;
    sumarCantidad: (id: number) => void;
    restarCantidad: (id: number) => void;
    eliminarProducto: (id: number) => void;
    limpiarCarrito: () => void;
    totalPrecio: number;
    totalCarrito: number;
}

//Creamos un contexto globla para que el carrito inicialmente este vacio
//creatContext es  Función de React que crea un contexto para compartir datos entre componentes sin necesidad de pasar props manualmente.
const menuVacio = createContext<menuOpciones | undefined>(undefined);

//La selección de productos cuando hay un proveedor para poder usarlos en el Navbar
//y compartir los datos del carrito
export function  ProveedorCarrito ({children}: {children: ReactNode}){
 const [cartas, setCartas] = useState<carritoItem[]>([]);
 const [actualizar, setActualizar] = useState(false);
 //usar LocalStorage para mantener el carrito al refrescar la pagina 
 useEffect(() => {
    const conservarCambios = localStorage.getItem(CartStorageKey);
    if(conservarCambios){
        setCartas(JSON.parse(conservarCambios)); //lo que mantiene que el carrito siga intacto al momento de refrescar

    }
    setActualizar(true);
 }, []);

 //guardar en el localStorage automaticamente
 useEffect(() => {
    if(actualizar){
        localStorage.setItem(CartStorageKey, JSON.stringify(cartas));
    }
 }, [cartas, actualizar]);

//----------------FUNCIÓN AGREGAR PRODUCTOS-----------------//
function agregarCarrito (producto: Productos){
    setCartas((prev) => {
        const existente = prev.find((elemento) => elemento.id === producto.id);
        if(existente){
            return prev.map((elemento) =>
                elemento.id === producto.id 
                    ? { ...elemento, cantidad: elemento.cantidad + 1 }
                    : elemento
            );
        }
        return [...prev, { ...producto, cantidad: 1 }];
    });
    toast.success(`"${producto.titulo}" Agregado al carrito ✅`);

}

//------------INCREMENTAR PRODUCTOS AL CARRITO-------------------//
function sumarCantidad(id: number){
    setCartas((prev) => 
        prev.map((elemento) => 
            elemento.id === id ? {...elemento, cantidad: elemento.cantidad + 1} : elemento
        )
    );
}

//-----------------FUNCIÓN RESTAR PRODUCTOS DEL CARRITO COMO REDUCIR LOS PRODUCTOS DEL CARRITO------------------//
function restarCantidad(id: number){
    setCartas((prev) => 
    prev
    .map((elemento) => 
        elemento.id === id ?{...elemento, cantidad: elemento.cantidad -1} : elemento
    )

    //agregar un filtro para buscar cuando llegue a 0 quitamos los elementos del carrito
    .filter((elemento) => elemento.cantidad > 0)
);
}

//-----------FUNCIÓN ELIMINAR TODO LO QUE SE AGREGO AL CARRITO--------------//
    function eliminarProducto(id: number){
        const elemento = cartas.find((i) => i.id === id);
        setCartas((prev) => prev.filter((elemento) => elemento.id !== id));
        if(elemento) toast.info(`"${elemento.titulo}" Eliminando producto del carrito`)

    }

    //------------FUNCION LIMPIAR TODO EL CARRITO------------------//
    function limpiarCarrito(){
        setCartas([]);
    }

    //VALORES MATEMÁTICOS CALCULADOS A PARTIR DEL CARRITO
    const totalPrecio = cartas.reduce((suma, elemento) => suma + elemento.precio * elemento.cantidad, 0);
    const totalCarrito = cartas.reduce((suma, elemento) => suma + elemento.cantidad, 0 );

    return (
     <menuVacio.Provider
      value={{
          cartas,
          agregarCarrito,
          sumarCantidad,
          restarCantidad,
          eliminarProducto,
          limpiarCarrito,
          totalPrecio,
          totalCarrito,
    }}
    >
      {children}
    </menuVacio.Provider>
    );
}  

export function useCart(){
  const context = useContext(menuVacio);
  if(!context) {
    throw new Error ("UseCart debe usarse dentro de un CartProvider")

  }
  return context;
}


