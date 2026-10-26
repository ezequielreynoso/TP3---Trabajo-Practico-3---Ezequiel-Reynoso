class LibrosControlador {

    constructor(librosServicio) {
        this.librosServicio = librosServicio;
    }

    obtenerTodos = (req, res) => {

        const libros = this.librosServicio.obtenerTodos();

        res.json(libros);
    };

    obtenerPorId = (req, res) => {

        const id = Number(req.params.id);

        const libro = this.librosServicio.obtenerPorId(id);

        if (!libro) {
            return res.status(404).json({
                error: "Libro no encontrado"
            });
        }

        res.json(libro);
    };

    agregar = (req, res) => {

        const { titulo, autor, anio } = req.body;

        const libro = this.librosServicio.agregar(
            titulo,
            autor,
            anio
        );

        res.status(201).json(libro);
    };

    actualizar = (req, res) => {

        const id = Number(req.params.id);

        const libroActualizado =
            this.librosServicio.actualizar(id, req.body);

        if (!libroActualizado) {
            return res.status(404).json({
                error: "Libro no encontrado"
            });
        }

        res.json(libroActualizado);
    };

    eliminar = (req, res) => {

        const id = Number(req.params.id);

        const libroEliminado =
            this.librosServicio.eliminar(id);

        if (!libroEliminado) {
            return res.status(404).json({
                error: "Libro no encontrado"
            });
        }

        res.json({
            mensaje: "Libro eliminado correctamente",
            libro: libroEliminado
        });
    };

}

export default LibrosControlador;