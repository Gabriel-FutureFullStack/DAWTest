const { actualizarTiempoVisto } = require('../services/actualizarTiempoVistoService');

async function actualizarTiempoVistoController(req, res) {
    try {
        const resultado = await actualizarTiempoVisto(req.body);
        res.json(resultado);
    } catch (error) {
        console.error('Error al actualizar tiempo visto: ', error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

module.exports = { actualizarTiempoVistoController };