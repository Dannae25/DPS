export interface Productos {
  id: number;
  titulo: string;
  precio: number;
  urlImage: string;
  categoria: string;
  descripcion: string;
}

//Guarda los productos y la cantidad de cada uno
export interface carritoItem extends Productos {
  cantidad: number;
}

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  password: string;
}