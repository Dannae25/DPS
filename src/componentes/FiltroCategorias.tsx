//Guardar los tipos de datos en un arreglo 
//Lógica para mostrar la funcionalidad de filtrar por categoria y marca
interface Props {
    categoria: string[];
    marca: string[];
    seleccionarCategoria: string[];
    seleccionarMarca: string[];
    alCambiarCategoria: (categoria: string) => void; //realiza la tarea de activar y desactivar 
    alCambiarMarca: (marca: string) => void;
    limpiarFiltro: () => void;


}

export default function FiltroCategorias({categoria, marca, seleccionarCategoria,seleccionarMarca, alCambiarCategoria, alCambiarMarca, limpiarFiltro} : Props){
  const hayFiltros = seleccionarCategoria.length > 0 || seleccionarMarca.length > 0;
  return(

    <aside className="w-full lg:w-56 shrink-0">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-sm ">
          FILTRAR POR
        </h2>
        {hayFiltros && (
          <button onClick={limpiarFiltro} className="text-xs link">
            Limpiar
          </button>
        )}
      </div>

      <div className="mb-6">
        <h3 className="text-xs font-semibold text-base-content/60 mb-2y ">
          CATEGORIAS
        </h3>
        <div className="flex flex-col gap-2">
          {categoria.map((categoria) => (
            <label key={categoria} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-sm"
                checked={seleccionarCategoria.includes(categoria)}
                onChange={() => alCambiarCategoria(categoria)}
              />
              <span className="text-sm">{categoria}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-base-content/60  mb-2">
          MARCA
        </h3>
        <div className="flex flex-col gap-2">
          {marca.map((marca) => (
            <label key={marca} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-sm"
                checked={seleccionarMarca.includes(marca)}
                onChange={() => alCambiarMarca(marca)}
              />
              <span className="text-sm">{marca}</span>
            </label>
          ))}
        </div>
      </div>

    </aside>

  );
}
