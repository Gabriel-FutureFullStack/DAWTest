const { ObtenerHistorial2 } = require('../services/historialService2');

async function ObtenerHistorial2Controller(req, res) {
    try {
        const resultado = await ObtenerHistorial2();
        res.json(resultado);
    } catch (error) {
        console.error('Error al obtener Historial: ', error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

module.exports = { ObtenerHistorial2Controller };