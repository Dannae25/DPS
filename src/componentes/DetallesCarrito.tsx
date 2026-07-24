import Image from "next/image";
import { carritoItem } from "@/types/productos";


// mi caja de props que recibe datos y funciones para usarlas
interface Props {
    elemento: carritoItem;
    alIncrementar: (id: number) => void;
    alDecrementar: (id: number) => void;
    alEliminar : (id: number) => void;

}

export default function DetallesCarrito ({elemento, alIncrementar, alDecrementar, alEliminar} : Props){
    return(
    <div className="flex items-center gap-3 border-b border-stone-200 py-3">
    <Image
        src={elemento.urlImage}
        alt={elemento.titulo}
        width={56}
        height={78}
        className="rounded object-cover flex-shrink-0"
    />
    <div className="flex-1 min-w-0">
        <p className="font-medium truncate">{elemento.titulo}</p>
        <p className="text-sm text-stone-500">${elemento.precio.toFixed(2)}</p>
    </div>

    <div className="flex items-center gap-2">
        <button
        onClick={() => alDecrementar(elemento.id)}
        className="w-10 h-7 rounded-full border border-stone-300 font-bold"
        aria-label="Disminuir cantidad"
        >
        -
        </button>
        <span className="w-5 text-center">{elemento.cantidad}</span>
        <button
        onClick={() => alIncrementar(elemento.id)}
        className="w-10 h-7 rounded-full border border-stone-300 font-bold"
        aria-label="Aumentar cantidad"
        >
        +
        </button>
    </div>

    <button
        onClick={() => alEliminar(elemento.id)}
        className="text-xs text-red-600 underline ml-2"
    >
        Eliminar
    </button>
    </div>
    );
}

    
