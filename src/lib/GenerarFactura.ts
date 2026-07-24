//importar libreria de pdf
import jsPDF from "jspdf";  
import autoTable from "jspdf-autotable";
import { carritoItem } from "@/types/productos";

//


//mi caja de datos que voy a utlizar
interface datosFactura {
  generarId: string;
  nombreCliente: string;
  emailCliente: string;
  elemento: carritoItem[];
  totalPrecio: number;

}

//Función con JS para que me carga la imagen usando next.js
function cargarImagen(ruta: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const imagen = new window.Image();
    imagen.src = ruta;
    imagen.onload = () => resolve(imagen)
    
  });
}

export async function GenerarFactura({generarId, nombreCliente, emailCliente, elemento, totalPrecio, }: datosFactura){
  const pdf = new jsPDF();

  const logo = await cargarImagen("/recursos/icono-lap.png") //espera que la imagen cargue le paso la función

  pdf.addImage(logo, "PDF" , 14 ,10 , 25, 25); //agrego la función que me proporciona la libreria de imagen
  pdf.setFontSize(20);
  pdf.setTextColor(0,0,0);
  pdf.text("Laptop Friend", 45, 20);

  pdf.setFontSize(11);
  pdf.setTextColor(100,100,100)
  pdf.text(`Factura #${generarId}`, 45, 27);
  pdf.text(`Fecha: ${new Date().toLocaleDateString("es-SV")}`, 45, 32);

  pdf.setTextColor(0,0,0)
  pdf.text(`Cliente: ${nombreCliente}`, 14, 45);
  pdf.text(`Correo: ${emailCliente}`, 14, 51);
  
  

  //GENERANDO LA TABLA DONDE SE MOSTRARAN LOS PRODUCTOS

  autoTable(pdf, {
    startY: 58,
    head: [["Producto", "Cantidad", "Precio", "Subtotal"]],
    body: elemento.map((elemento) => [
      elemento.titulo,
      String(elemento.cantidad),
      `$${elemento.precio.toFixed(2)}`,
      `$${(elemento.precio * elemento.cantidad).toFixed(2)}`,
    ]),
    headStyles: {
      fillColor: [219, 39, 119], 
      textColor: [255, 255, 255],
    },
    alternateRowStyles: {
      fillColor: [250, 245, 248], 
      textColor: [0,0,0]
    },


  });

  // finalY nos dice en qué "y" terminó la tabla, para escribir el
  // total justo debajo sin que se encime con las filas. jspdf-autotable
  const pdfConTabla = pdf as jsPDF & { lastAutoTable?: { finalY: number } };
  const finalY = pdfConTabla.lastAutoTable?.finalY || 70;
  pdf.setFontSize(14);
  pdf.setTextColor(219, 39, 119); 
  pdf.text(`Total: $${totalPrecio.toFixed(2)}`, 14, finalY + 12);

  return pdf;



}