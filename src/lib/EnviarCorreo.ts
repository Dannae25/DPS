import emailjs from "@emailjs/browser"

interface EnviarDatos{
    email: string;
    nombre: string;
    generarId: string;
    totalPrecio: number;
}

export async function EnviarCorreo({
    email,
    nombre,
    generarId,
    totalPrecio,
}: EnviarDatos): Promise<boolean> {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
    // Modo simulado: no hay credenciales configuradas todavía.
    console.log(
        `[Modo simulado] Factura #${generarId} "enviada" a ${email} (total: $${totalPrecio.toFixed(
        2
        )})`
    );
    return true;
    }

    try {
    await emailjs.send(
        serviceId,
        templateId,
        {
        email: email,
        nombre: nombre,
        generarId: generarId,
        totalPrecio: totalPrecio.toFixed(2),
        },
        { publicKey }
    );
    return true;
    } catch (error) {
    console.error("Error enviando correo:", error);
    return false;
    }
}
