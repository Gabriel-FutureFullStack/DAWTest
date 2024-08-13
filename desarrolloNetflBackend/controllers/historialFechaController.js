const { ObtenerHistorialFecha } = require('../services/historialFechaService');

async function ObtenerHistorialFechaController(req, res) {
    try {
        const resultado = await ObtenerHistorialFecha(req.body);
        res.json(resultado);
    } catch (error) {
        console.error('Error al obtener Historial: ', error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

module.exports = { ObtenerHistorialFechaController };