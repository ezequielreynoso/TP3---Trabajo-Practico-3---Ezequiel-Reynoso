import express from "express";

import LibrosMem from "./modelos/DAOs/librosMem.js";
import LibrosServicio from "./servicios/librosServicio.js";
import LibrosControlador from "./controladores/librosControlador.js";
import LibrosRouter from "./rutas/librosRouter.js";

const app = express();
app.set("json spaces", 2);

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));


// Crear las distintas capas

const librosMem = new LibrosMem();

const librosServicio =
    new LibrosServicio(librosMem);

const librosControlador =
    new LibrosControlador(librosServicio);

const librosRouter =
    new LibrosRouter(librosControlador);


// Asociar las rutas

app.use(
    "/libros",
    librosRouter.obtenerRouter()
);


app.listen(PORT, () => {
    console.log(
        `Servidor escuchando en http://localhost:${PORT}`
    );
});