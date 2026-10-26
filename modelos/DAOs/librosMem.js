class LibrosMem {

    constructor() {
        this.libros = [];
    }

    obtenerTodos() {
        return this.libros;
    }

    obtenerPorId(id) {
        return this.libros.find(libro => libro.id === id);
    }

    agregar(libro) {
        this.libros.push(libro);
        return libro;
    }

    actualizar(id, datos) {
        const indice = this.libros.findIndex(libro => libro.id === id);

        if (indice === -1) {
            return null;
        }

        this.libros[indice] = {
            ...this.libros[indice],
            ...datos,
            id
        };

        return this.libros[indice];
    }

    eliminar(id) {
        const indice = this.libros.findIndex(libro => libro.id === id);

        if (indice === -1) {
            return null;
        }

        return this.libros.splice(indice, 1)[0];
    }

}

export default LibrosMem;