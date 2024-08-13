const { eliminarHistorial } = require('../services/eliminarHistorialService');

async function eliminarHistorialController(req, res) {
    try {
        const resultado = await eliminarHistorial(req.body);
        res.json(resultado);
    } catch (error) {
        console.error('Error al eliminar Historial: ', error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

module.exports = { eliminarHistorialController };