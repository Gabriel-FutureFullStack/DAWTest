
const { ObtenerConexion } = require('../database/conexion');

async function actualizarTiempoVisto(datos) {
    try {
        const connection = await ObtenerConexion();
        const consulta = 'CALL UpdateTiempoVisto(?, ?)';

        return new Promise((resolve, reject) => {
            connection.query(consulta, [datos.uno, datos.dos], (err, filas) => {
                connection.end();

                if (err) {
                    console.error('Error al ejecutar la consulta', err);
                    reject(err);
                } else {
                    resolve(filas);
                }
            });
        });

    } catch (error) {
        console.error("Error en actualizarTiempoVisto:", error);
        throw error;
    }
}
module.exports = { actualizarTiempoVisto };