/*
 * datos.js - Los datos de tu tema
 * Los datos viven aquí, separados de la interfaz. app.js los recorre
 * y construye las tarjetas: nunca se escriben tarjetas a mano en el HTML.
 *
 * TODO (issue #1):
 *
 * 1. Completa configuracion:
 *      titulo         nombre de tu proyecto
 *      campoOrden     nombre de la propiedad NUMÉRICA que se usa para ordenar
 *                     (precio, duracionMinutos, paginas...). Se elige en la guía.
 *      etiquetaValor  cómo se muestra ese número en la tarjeta ("Precio", "Duración")
 *
 * 2. Llena items con los 12 elementos de la página de Contenido de tu
 *    empresa en el Manual de marca (nombres, categorías y valores exactos).
 *    TODOS con las mismas propiedades:
 *      id           número, único
 *      nombre       texto
 *      categoria    texto (mínimo 3 categorías, cada una con 2 o más elementos)
 *      descripcion  texto corto
 *      imagen       ruta en img/ (que exista) o URL que empiece por https://
 *      la propiedad de campoOrden (número)
 *      y los 2 campos propios que indica tu tema en la guía
 *
 * La información es ficticia: la entrega la empresa en el manual.
 * Puedes usar img/placeholder.svg mientras consigues imágenes.
 */

const configuracion = {
  titulo: "Patitas a Casa",
  campoOrden: "edadMeses",
  etiquetaValor: "Edad (meses)",
};

const items = [
  // Ejemplo de la forma (tema Mercado campesino). Bórralo y escribe los tuyos.
  {
    id: 1,
    nombre: "Canela",
    categoria: "perros",
    descripcion: "Juguetona y muy cariñosa con los niños.",
    imagen: "img/placeholder.svg",
    edadMeses: 18,
    tamaño: "mediano",
    vacunado: "si",
  },
  {
    id: 2,
    nombre: "Rocky",
    categoria: "perros",
    descripcion: "Tranquilo, ideal para apartamento.",
    imagen: "img/placeholder.svg",
    edadMeses: 60,
    tamano: "pequeño",
    vacunado: "sí",
  },
  {
    id: 3,
    nombre: "Tango",
    categoria: "perros",
    descripcion: "Activo, necesita espacio para correr.",
    imagen: "img/placeholder.svg",
    edadMeses: 24,
    tamano: "grande",
    vacunado: "sí",
  },
  {
    id: 4,
    nombre: "Luna",
    categoria: "perros",
    descripcion: "Cachorra rescatada, aprende rápido.",
    imagen: "img/placeholder.svg",
    edadMeses: 4,
    tamano: "mediano",
    vacunado: "no",
  },
  {
    id: 5,
    nombre: "Max",
    categoria: "perros",
    descripcion: "Perro mayor, tranquilo y leal.",
    imagen: "img/placeholder.svg",
    edadMeses: 96,
    tamano: "grande",
    vacunado: "sí",
  },
  {
    id: 6,
    nombre: "Misha",
    categoria: "gatos",
    descripcion: "Gata independiente y silenciosa.",
    imagen: "img/placeholder.svg",
    edadMeses: 36,
    tamano: "pequeño",
    vacunado: "sí",
  },
  {
    id: 7,
    nombre: "Simón",
    categoria: "gatos",
    descripcion: "Gato naranja, le encanta dormir al sol.",
    imagen: "img/placeholder.svg",
    edadMeses: 14,
    tamano: "mediano",
    vacunado: "sí",
  },
  {
    id: 8,
    nombre: "Nieve",
    categoria: "gatos",
    descripcion: "Gatita blanca, algo tímida al principio.",
    imagen: "img/placeholder.svg",
    edadMeses: 5,
    tamano: "pequeño",
    vacunado: "no",
  },
  {
    id: 9,
    nombre: "Garfield",
    categoria: "gatos",
    descripcion: "Gato grande y muy sociable.",
    imagen: "img/placeholder.svg",
    edadMeses: 48,
    tamano: "grande",
    vacunado: "sí",
  },
  {
    id: 10,
    nombre: "Copito",
    categoria: "conejos",
    descripcion: "Conejo blanco, come zanahoria de tu mano.",
    imagen: "img/placeholder.svg",
    edadMeses: 10,
    tamano: "pequeño",
    vacunado: "sí",
  },
  {
    id: 11,
    nombre: "Pelusa",
    categoria: "conejos",
    descripcion: "Coneja de orejas caídas, muy mansa.",
    imagen: "img/placeholder.svg",
    edadMeses: 20,
    tamano: "pequeño",
    vacunado: "sí",
  },
  {
    id: 12,
    nombre: "Tambor",
    categoria: "conejos",
    descripcion: "Conejo joven y curioso.",
    imagen: "img/placeholder.svg",
    edadMeses: 6,
    tamano: "pequeño",
    vacunado: "no",
  },
];
