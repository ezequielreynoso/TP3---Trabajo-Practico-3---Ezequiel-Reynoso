import Libro from "../modelos/Libro.js";

class LibrosServicio {

    constructor(librosDAO) {
        this.librosDAO = librosDAO;
    }

    obtenerTodos() {
        return this.librosDAO.obtenerTodos();
    }

    obtenerPorId(id) {
        return this.librosDAO.obtenerPorId(id);
    }

    agregar(titulo, autor, anio) {

        const libros = this.librosDAO.obtenerTodos();

        const nuevoId =
            libros.length === 0
                ? 1
                : Math.max(...libros.map(libro => libro.id)) + 1;

        const libro = new Libro(
            nuevoId,
            titulo,
            autor,
            Number(anio)
        );

        return this.librosDAO.agregar(libro);
    }

    actualizar(id, datos) {

        const datosActualizados = {};

        if (datos.titulo !== undefined) {
            datosActualizados.titulo = datos.titulo;
        }

        if (datos.autor !== undefined) {
            datosActualizados.autor = datos.autor;
        }

        if (datos.anio !== undefined) {
            datosActualizados.anio = Number(datos.anio);
        }

        return this.librosDAO.actualizar(
            id,
            datosActualizados
        );
    }

    eliminar(id) {
        return this.librosDAO.eliminar(id);
    }

}

export default LibrosServicio;