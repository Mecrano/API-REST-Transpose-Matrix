// Requieres
const express = require("express");
const router = express.Router();

const matrixController = require("../controller/MatrixController");
const matrix = new matrixController();

router.post("/getTransposeMatrix", async (req, res) => {
    if (matrix.isValid(req.body.matrix)) {
        const transposedMatrix = matrix.getTransposeMatrix(req.body.matrix);
        res.json({ status: true, matrix: transposedMatrix });
    } else {
        res.send({ status: false, msj: "Tu matrix no es cuadrada, intentalo de nuevo" });
    }
});

router.get("*", (req, res) => {
    res.send("Hello");
});

module.exports = router;
