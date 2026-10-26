import express from "express";

class LibrosRouter {

    constructor(librosControlador) {

        this.router = express.Router();

        this.librosControlador = librosControlador;

        this.configurarRutas();
    }

    configurarRutas() {

        this.router.get(
            "/",
            this.librosControlador.obtenerTodos
        );

        this.router.get(
            "/:id",
            this.librosControlador.obtenerPorId
        );

        this.router.post(
            "/",
            this.librosControlador.agregar
        );

        this.router.put(
            "/:id",
            this.librosControlador.actualizar
        );

        this.router.delete(
            "/:id",
            this.librosControlador.eliminar
        );
    }

    obtenerRouter() {
        return this.router;
    }

}

export default LibrosRouter;