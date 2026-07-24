"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/usuarioContex";
import { toast } from "sonner";

export default function RegistroPage() {
  const { registrar } = useAuth();
  const router = useRouter();

  const [nombre,setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    nombre?: string;
    email?: string;
    password?: string;
  }>({});

 //trim() me quita los espacios en planco " desafio " trim me devuelve "desafio" --unido
  function validate() {
    const errores: typeof errors = {};
    if (nombre.trim().length < 2) {
      errores.nombre = "Ingresa tu nombre completo";
      toast.error("Llenar todos los campos")
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
    errores.email = "Ingresa un correo válido";
    }
    if (password.length < 4) {
    errores.password = "La contraseña debe tener al menos 4 caracteres";
    }
    setErrors(errores);
    return Object.keys(errores).length === 0;
    }

    function enviar(enviar: React.FormEvent) {
    enviar.preventDefault();
    if (!validate()) return;

    const success = registrar(nombre, email, password);
    if (success) router.push("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-stone-500 via-white to-stone-200 px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl shadow-stone-300/60">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="hidden bg-stone-900 px-8 py-10 text-white lg:flex lg:flex-col lg:justify-center">
            <p className="text-sm uppercase tracking-[0.35em] text-stone-400">
              LaptopFriend
            </p>
            <h2 className="mt-4 text-3xl font-semibold">
              Crea tu cuenta y descubre lo mejor de la tecnología
            </h2>
            <p className="mt-3 text-sm text-stone-300">
              Regístrate para comprar la última tecnológia que se adapta a tus gustos.
            </p>
          </div>

          <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
            <div className="mb-6 text-center lg:text-left">
              <h1 className="text-2xl font-semibold text-stone-900">
                ¡Crear una cuenta!
              </h1>
              <p className="mt-2 text-sm text-stone-500">
                Regístrate ahora en Laptop Friend y descubre productos tecnológicos de última calidad.
              </p>
            </div>

            <form onSubmit={enviar} className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium text-stone-700">Nombre</label>
                <input
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  type="text"
                  className="mt-1 w-full rounded-lg border border-stone-300 bg-stone-50 px-3 py-2 text-sm outline-none transition focus:border-stone-500 focus:bg-white"
                  placeholder="Tu nombre"
                />
                {errors.nombre && (
                  <p className="mt-1 text-xs text-red-600">{errors.nombre}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-stone-700">Correo</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-stone-300 bg-stone-50 px-3 py-2 text-sm outline-none transition focus:border-stone-500 focus:bg-white"
                  placeholder="usuario@ejemplo.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-stone-700">Contraseña</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-stone-300 bg-stone-50 px-3 py-2 text-sm outline-none transition focus:border-stone-500 focus:bg-white"
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="mt-1 text-xs text-red-600">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                className="mt-2 rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500"
              >
                Registrarme
              </button>

              <p className="text-center text-sm text-stone-600 lg:text-left">
                ¿Ya tienes cuenta?{" "}
                <Link href="/login" className="font-medium text-stone-900 hover:underline hover:text-red-500">
                  Inicia sesión
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
