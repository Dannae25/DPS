import { Productos } from "../types/productos"
import Image from "next/image"

export const productos: Productos[] = [
  {
    id: 1,
    titulo: "Laptop HP 15.6 TOUCH",
    precio: 800,
    urlImage: "https://www.rafenlinea.com/16678-large_default/laptop-hp-156-touch-intel-core-ultra-5-225u-8gb-ram-512gb-ssd-w11.jpg",
    categoria: "Oficina",
    marca: "HP",
    descripcion: "La Laptop Touch ofrece el nuevo procesador Intel Core Ultra 5-225U para un rendimiento ágil en trabajo,estudio y entretenimiento. Incorpora pantalla táctil Full HD de '15.6', memoria RAM de 8GB y almacenamiento SSD de 512GB para mayor velocidad. Incluye Windows 11 original para una experiencia moderna y segura." 
    

  },
  {
    id: 2,
    titulo: "Laptop ASUS",
    precio: 1089.90,
    urlImage: "https://www.rafenlinea.com/14165-large_default/laptop-gaming-asus-tuf-f16-intel-core-i5-210h-16-gb-512gb-ssd-w11-rtx-3050.jpg",
    categoria: "Gaming",
    marca: "ASUS",
    descripcion: "La ASUS TUF F16 Gaming está diseñada para gamers y creadores que buscan potencia y durabilidad. Equipada con Intel Core i5, tarjeta gráfica NVIDIA RTX 3050, 16GB de RAM y SSD de 512GB, ofrece un rendimiento sólido para juegos modernos y tareas gráficas exigentes.",
  },
  {
    id: 3,
    titulo: "Laptop HP PROBOOK 450",
    precio: 1100,
    urlImage: "https://www.rafenlinea.com/12780-large_default/laptop-hp-probook-450-g10-7z7h8lt-intel-core-i5-1335u-16gb-ram-512gb-ssd-windows-11-pro.jpg",
    categoria: "Oficina",
    marca: "HP",
    descripcion: "Su diseño resistente y seguro la convierte en una herramienta ideal para trabajo, estudios y empresas. Incluye memoria rápida y batería eficiente para productividad continua, y un Intel i5-1335U",
    

  },
  {
    id: 4,
    titulo: "Laptop HP Victus Gaming",
    precio: 1200,
    urlImage: "https://www.rafenlinea.com/16810-large_default/laptop-hp-victus-gaming-15-fb3020la-156-amd-ryzen-7-7445h-16gb-512gb-ssd-w11h-nvidia-geforce-rtx-3050.jpg",
    categoria: "Gaming",
    marca: "HP",
    descripcion: "La HP Victus 15-FB3020LA ofrece un excelente equilibrio entre potencia y rendimiento para gaming, estudio y trabajo. Equipada con un procesador AMD Ryzen™ 7 7445H, tarjeta gráfica NVIDIA® GeForce RTX™ 3050, 16GB de memoria DDR5 y SSD de 512GB, proporciona rapidez en todas tus tareas.",
    

  },
  {
    id: 5,
    titulo: "Laptop HP 15-FC0146DX Touch",
    precio: 710,
    urlImage: "https://www.rafenlinea.com/16743-large_default/laptop-hp-15-fc0146dx-touch-156-amd-ryzen-5-7520u-8gb-512-gb-ssd-w11.jpg",
    categoria: "Oficina",
    marca: "HP",
    descripcion: "es una laptop ideal para estudiantes, profesionales y usuarios que buscan un equipo confiable para el uso diario. Su procesador AMD Ryzen™ 5 7520U, 8GB de memoria RAM y almacenamiento SSD de 512GB ofrecen un desempeño rápido y eficiente para trabajo, estudio y entretenimiento.",
    

  },
  {
    id: 6,
    titulo: "Acer Nitro",
    precio: 1099.99,
    urlImage: "https://www.officedepot.com.sv/medias/1200ftw-1301000204.jpg?context=bWFzdGVyfHJvb3R8MjAxODM0fGltYWdlL2pwZWd8YUdFNEwyZzBPQzh4TWpNek1qUTFNVGc0T1RFNE1pOHhNakF3Wm5SM1h6RXpNREV3TURBeU1EUXVhbkJufDczZjhhZmJjYjlhODU3YmYzYzMyZTUyNjg2MWY1MTI5NWE3YmQ3NWMyYWIzNTAwZjViMDQ2ZDJjYjY5NzQxOTM",
    categoria: "Gaming",
    marca: "Acer",
    descripcion: "Laptop Nitro con un procesador i5 y una targeta gráfica RTX3050 ideal para jugar o programar con una alta calidad de pantalla de 15 pulgadas FHD y un disco duro de 512GB y RAM de 8GB",
    

  },
  {
    id: 7,
    titulo: "MacBook Pro",
    precio: 2500,
    urlImage: "https://rossellimac.es/cdn/shop/files/IMG-19256841_m_jpeg_1.jpg?v=1772572385&width=1445",
    categoria: "MacBook",
     marca: "Apple",
    descripcion: "MacBook Pro con una pantalla  liquid retina de 16 pulgadas XDR on una capacidad de almacenamiento de 1TB y con una memoria RAM de 16GB cuenta con una TouchID y una bateria duradera de hasta 22horas además cuenta con 16 núcleos de GPU",
    

  },
  {
    id: 8,
    titulo: "Laptop VivoBook",
    precio: 1000,
    urlImage: "https://tiendaintelmax.net/images/productos/laptop-asus-vivobook-e1504f-r57520u-8gb-ddr5-ssd-512gb-156-fhd-mixed-black---90nb0zr2m03xr0lap0682.jpg",
    categoria: "Diseño",
     marca: "ASUS",
    descripcion: "Laptop de 15.6 pulgadas FHD con un eficiente rendimiento para diseño y multitareas, color negro con un sistema operativo windows 11 Home, una memoria RAM de 8Gb DDR5 de última generación yy un almacenamiento SSD de 512GB, un diseño elegante para los diseñadores gráficos. ",
    

  },
  {
    id: 9,
    titulo: "Laptop Dell Touch",
    precio: 1000,
    urlImage: "https://www.rafenlinea.com/16970-large_default/laptop-dell-touch-156-full-hd-intel-core-i7-1355u-16gb-ram-512gb-ssd-w11-home.jpg",
    categoria: "Diseño",
     marca: "DELL",
    descripcion: "La Laptop Dell  combina potencia y versatilidad con su procesador Intel Core i7-1355U, 16GB de memoria RAM y unidad SSD de 512GB para un desempeño rápido y eficiente. Su pantalla táctil UHD de 15.6 pulgadas mejora la experiencia de uso tanto para trabajo como entretenimiento inclute Widows 11 Home ara una experiencia moderna y fluida. "

  },
  {
     id: 10,
    titulo: "Laptop Dell Inspiron 15",
    precio: 700,
    urlImage: "https://www.rafenlinea.com/16602-large_default/laptop-dell-inspiron-15-touch-156-fhd-intel-core-i5-1334u-8gb-ram-512gb-ssd-windows-11.jpg",
    categoria: "Oficina",
    marca: "Dell",
    descripcion: "La Laptop Dell Inspiron 15 ofrece un excelente equilibrio entre rendimiento y productividad gracias a su procesador Intel Core i5-1334U de 13.ª generación, 8 GB de memoria RAM y unidad SSD de 512 GB para un inicio rápido y mayor velocidad. Inclye Windows 11 original",
    

  },
  {
    id: 11,
    titulo: "Laptop HP OmniBook",
    precio: 1000,
    urlImage: "https://tiendaintelmax.net/images/productos/laptop-lenovo-ideapad-1-153-ryzen-5-7520u-8gb-ram-256gb-ssd-windows-11-home-82vg00wxuslap0663.jpg",
    categoria: "Diseño",
     marca: "HP",
    descripcion: "La HP OmniBook es la nueva línea de portátiles de alto rendimiento de HP, diseñada para profesionales, estudiantes de diseño gráfico y arquitectura, con integración avanzada de inteligencia artificial, pantallas OLED de hasta 3K, opciones de memoria de hasta 64 GB y almacenamiento SSD de hasta 2 TB, todo en un diseño elegante y duradero con certificación militar",
    

  },
  {
    id: 12,
    titulo: "MacBook Neo",
    precio: 800,
    urlImage: "https://rossellimac.es/cdn/shop/files/IMG-18250584_m_jpeg_1_533x.jpg?v=1760537392",
    categoria: "MacBook",
     marca: "Apple",
    descripcion: "Su batería alcanza hasta 22 horas de autonomía, lo que la convierte en una opción ideal para quienes buscan movilidad y rendimiento sin preocuparse por la carga. Además, incluye una cámara FaceTime HD 1080p, micrófonos con cancelación de ruido y altavoces con audio espacial, perfectos para videollamadas y entretenimiento. ",
   

  },
  {
    id: 13,
    titulo: "LAPTOP ASUS ROG",
    precio: 1050,
    urlImage: "https://tiendaintelmax.net/images/productos/laptop-gaming-gigabyte-aorus-core-i5-12500h-16gb-ram-1tb-ssd-geforce-rtx-4070-8gb-vram-windows-11-homelap0660.jpg",
    categoria: "Gaming",
     marca: "ASUS",
    descripcion: "La ASUS ROG es la línea de laptops gaming de alto rendimiento de ASUS, destacando por sus procesadores Intel Core Ultra o AMD Ryzen AI de última generación, gráficas NVIDIA GeForce RTX serie 50, pantallas rápidas de hasta 300 Hz y un diseño agresivo con iluminación RGB y chasis optimizado para refrigeración.",
   

  },
  {
    id: 14,
    titulo: "MacBook Air 15",
    precio: 1000,
    urlImage: "https://rossellimac.es/cdn/shop/files/IMG-19263658_m_jpeg_1_550x.jpg?v=1772572370",
    categoria: "MacBook",
     marca: "Apple",
    descripcion: "La MacBook Air de 15 pulgadas es un portátil ultraligero que combina potencia y diseño en un formato más amplio. Viene equipada con 16 GB de RAM (ampliables hasta 32 GB) y opciones de almacenamiento SSD desde 512 GBlo que garantiza rapidez y espacio suficiente para trabajo y entretenimiento.",
    

  },
  {
   id: 15,
    titulo: "Laptop HP 15-FC0146DX Touch",
    precio: 710,
    urlImage: "https://www.rafenlinea.com/16743-large_default/laptop-hp-15-fc0146dx-touch-156-amd-ryzen-5-7520u-8gb-512-gb-ssd-w11.jpg",
    categoria: "Oficina",
    marca: "HP",
    descripcion: "es una laptop ideal para estudiantes, profesionales y usuarios que buscan un equipo confiable para el uso diario. Su procesador AMD Ryzen™ 5 7520U, 8GB de memoria RAM y almacenamiento SSD de 512GB ofrecen un desempeño rápido y eficiente para trabajo, estudio y entretenimiento.",
    
   

  },
  {
    id: 16,
    titulo: "Laptop Asus Gaming",
    precio: 2899,
    urlImage: "https://tiendaintelmax.net/images/productos/laptop-gaming-asus-16-fa608pprv032-ryzen-9-8940hx-32gb-ram-1tb-ssd-rtx-5070-8gb-vram-90nr0md1m003n0-sin-oslap0671.jpg",
    categoria: "Gaming",
     marca: "ASUS",
    descripcion: "Lpatop Gaming con 32GB de RAM ideal para tener amplia de ventanas abiertas, si quieres jugar y ver un video con una amplia pantalla de 16 pulgadas FHD con un procesador Ryzen 9, y un almacenamiento SSD de 1TB ideal para nunca quedarte sin espacio.",
   

  },
  {
   id: 17,
    titulo: "Laptop HP 15-FC0146DX Touch",
    precio: 710,
    urlImage: "https://www.rafenlinea.com/16743-large_default/laptop-hp-15-fc0146dx-touch-156-amd-ryzen-5-7520u-8gb-512-gb-ssd-w11.jpg",
    categoria: "Oficina",
    marca: "HP",
    descripcion: "Es una laptop ideal para estudiantes, profesionales y usuarios que buscan un equipo confiable para el uso diario. Su procesador AMD Ryzen™ 5 7520U, 8GB de memoria RAM y almacenamiento SSD de 512GB ofrecen un desempeño rápido y eficiente para trabajo, estudio y entretenimiento.",
    
    

  },
  {
    id: 18,
    titulo: "Laptop HP VICTUS",
    precio: 900,
    urlImage: "https://tiendaintelmax.net/images/productos/laptop-gaming-hp-victus--15fa2013dx-i513420h-8gb-ram-512gb-ssd-156-fhd-144hz--rtx-3050-6gb--b95whuaabalap0604.jpg",
    categoria: "Diseño",
     marca: "HP",
    descripcion: "Estilo moderno y elegante con un sistema de refrigeración ideal para usar programas de diseño, con una memoria RAM de 8G para multitareas, y un almacenamiento SSD de 512GB con tarjeta gráfica NVIDIA GeForce RTX 3050 de 6GB ideal para un excelente rendimiento.",
    

  },
  {
    id: 19,
    titulo: "Laptop Acer Nitro V15 ",
    precio: 1139,
    urlImage: "https://www.officedepot.com.sv/medias/515ftw-1301000712.png?context=bWFzdGVyfHJvb3R8MTI3NjQ2fGltYWdlL3BuZ3xhRGN5TDJnNU5TOHhNekUwT0RFME16WXhOakF6TUM4MU1UVm1kSGRmTVRNd01UQXdNRGN4TWk1d2JtY3w3Y2QyYTU1MDY0MzQ5NTJkZjdkMjViMDE2NmM2Yjg4NmYyYzY5OGE3YzNhMzA0MzZmZjRiNjA0YThlYTgwNGJh",
    categoria: "Gaming",
     marca: "Acer",
    descripcion: "La laptop ideal para video juegos FHD con una targeta gráfica NVIDIA RTX 6GB con licencia de W11 y una RAM de 16GB con un almacenamiento de 512GB",
    

  },
   {
    id: 20,
    titulo: "Laptop Asus VVIVOBOOK GO",
    precio: 700,
    urlImage: "https://www.rafenlinea.com/16694-large_default/laptop-asus-vivobook-go-156-amd-ryzen-5-7520u-8gb-512gb-ssd-w11.jpg",
    categoria: "Oficina",
    marca: "ASUS",
    descripcion: "Pantalla de 15.6, con un procesador AMD RYZEN 5, cuenta con 8GB de RAM y 512 de almacenamiento ideal para oficina y incluye windows 11 original.",
    
    

  },
  {
    id: 21,
    titulo: "Laptop HP 14",
    precio: 699,
    urlImage: "https://tiendaintelmax.net/images/productos/laptop-hp-14--14fq1025cl-ryzen-7-5700u-16gb-ram-512gb-ssd-pantalla-tactil-windows-11-88b18uaabalap0669.jpg",
    categoria: "Oficina",
    marca: "HP",
    descripcion: "Está equipada con un procesador AMD Ryzen 7 5700U de 8 núcleos y 16 hilos, que ofrece potencia suficiente para multitarea, ofimática avanzada y aplicaciones exigentes. Acompañan 16 GB de RAM DDR4, ideales para mantener fluidez incluso con varias aplicaciones abiertas, y un SSD de 512 GB que asegura arranques rápidos y almacenamiento veloz para documentos, programas y multimedia."
    

  },

];

