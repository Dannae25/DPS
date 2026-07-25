# LaptopFriend — Desafío Práctico E-commerce

Primer desafio  para la asignatura Diseño y Programación de Software Multiplataforma (DPS).
Hecho con React, TypeScript y Next.js.

## Instalación

1. Clona el repositorio:
   \`\`\`bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   \`\`\`

2. Instala las dependencias:
   \`\`\`bash
   npm install 
   \`\`\`

3. (IMPORTANTE) Si clonas el repositorio y quieres que el envío de correo funcione de verdad y no modo simulado, crea una cuenta gratuita en emailjs.com, configura un
   servicio y una plantilla, y crea un archivo `.env.local` en la raíz de tu proyecto con lo siguiente:
   \`\`\`
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
   \`\`\`

4. Corre el proyecto en modo desarrollo:
   \`\`\`bash
   npm run dev
   \`\`\`

5. Abre [http://localhost:3000](http://localhost:3000)

## Despliegue 

El proyecto está publicado en Netlify, con despliegue continuo conectado
al repositorio de GitHub — cada \`push\` a \`main\` genera un nuevo despliegue
automáticamente.

**Sitio publicado:** https://primer-desafiomultiplataformas.netlify.app/

## Video demo

**Enlace de video: ** 

## Cómo probar la funcionalidad de hacer una compra de un producto 

No hay usuario de prueba precargado. Debes registrarte con cualquier correo y contraseña para iniciar sesión y comprar.

## Tecnologías usadas

- Next.js (App Router)
- TypeScript
- Tailwind CSS + DaisyUI
- Context API para estado global (carrito y autenticación)
- jsPDF para generación de facturas
- EmailJS para envío de correo
- Sonner para las alertas 