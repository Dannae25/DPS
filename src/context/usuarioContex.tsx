"use client";

import {createContext,useContext,useState,useEffect,ReactNode,} from "react";
import { toast } from "sonner";
import { Usuario } from "@/types/productos";
import { usuarioPrueba } from "@/data/laptop";

const CLAVE_SESION = "ecommerce-laptop-sesion";
const CLAVE_USUARIOS = "ecommerce-laptop-usuarios";

//omit función de TypeScript para guardar la sesión por el usuario y no por la contraseña por seguridad del usuario
interface OpcionesAuth {
  usuario: Omit<Usuario, "password"> | null;
  login: (email: string, password: string) => boolean;
  registrar: (nombre: string, email: string, password: string) => boolean;
  cerrarSesion: () => void;
}

const AuthContext = createContext<OpcionesAuth | undefined>(undefined);

export function ProveedorAuth({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Omit<Usuario, "password"> | null>(null);

  useEffect(() => {
    const sesionGuardada = localStorage.getItem(CLAVE_SESION);
    if (sesionGuardada) setUsuario(JSON.parse(sesionGuardada));

    const usuariosGuardados = localStorage.getItem(CLAVE_USUARIOS);
    if (!usuariosGuardados) {
      localStorage.setItem(CLAVE_USUARIOS, JSON.stringify([usuarioPrueba]));
    }
  }, []);

  function obtenerUsuarios(): Usuario[] {
    return JSON.parse(localStorage.getItem(CLAVE_USUARIOS) || "[]");
  }

  function login(email: string, password: string): boolean {
    const usuarios = obtenerUsuarios();
    const buscarUsuario = usuarios.find(
      (usuario) => usuario.email === email && usuario.password === password
    );
    if (!buscarUsuario) {
      toast.error("Correo o contraseña incorrectos");
      return false;
    }
    const usuarioSeguro = {
      id: buscarUsuario.id,
      nombre: buscarUsuario.nombre,
      email: buscarUsuario.email,
    };
    setUsuario(usuarioSeguro);
    localStorage.setItem(CLAVE_SESION, JSON.stringify(usuarioSeguro));
    toast.success(`Bienvenida de nuevo, ${usuarioSeguro.nombre}`);
    return true;
  }

  function registrar(nombre: string, email: string, password: string): boolean {
    const usuarios = obtenerUsuarios();
    if (usuarios.some((usuario) => usuario.email === email)) {
      toast.error("Ya existe una cuenta con ese correo");
      return false;
    }
    const nuevoUsuario: Usuario = { id: Date.now(), nombre, email, password };
    const listaActualizada = [...usuarios, nuevoUsuario];
    localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(listaActualizada));

    const usuarioSeguro = {
      id: nuevoUsuario.id,
      nombre: nuevoUsuario.nombre,
      email: nuevoUsuario.email,
    };
    setUsuario(usuarioSeguro);
    localStorage.setItem(CLAVE_SESION, JSON.stringify(usuarioSeguro));
    toast.success("Cuenta creada correctamente");
    return true;
  }

  function cerrarSesion() {
    setUsuario(null);
    localStorage.removeItem(CLAVE_SESION);
    toast.info("Sesión cerrada");
  }

  return (
    <AuthContext.Provider
      value={{ usuario, login, registrar, cerrarSesion }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un ProveedorAuth");
  }
  return context;
}