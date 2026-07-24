"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/usuarioContex";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Guardamos errores de validación por campo, para mostrarlos justo
  // debajo de cada input 
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  function validar() {
    const errores: typeof errors = {};
    // Validación de formato de correo, sencilla pero suficiente.
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
    if (!validar()) return;

    const success = login(email, password);
    if (success) router.push("/");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 to-stone-200 px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-stone-200 bg-white p-6 shadow-xl shadow-stone-300/60">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-stone-900">
            Iniciar sesión
          </h1>
          <p className="mt-2 text-sm text-stone-500">
            Prueba con danae.g2507@gmail.com
          </p>
          <p className="text-sm text-stone-500">desafio1</p>
        </div>

        <form onSubmit={enviar} className="flex flex-col gap-4">
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
            Inciar Sesión
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-stone-600">
          ¿No tienes cuenta?{" "}
          <Link href="/register" className="font-medium text-stone-900 underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}


