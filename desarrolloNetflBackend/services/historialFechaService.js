const { ObtenerConexion } = require('../database/conexion');

async function ObtenerHistorialFecha(datos) {
    try {
        const connection = await ObtenerConexion();
        const consulta = 'CALL GetPeliculasVistasPorFecha(?)';

        return new Promise((resolve, reject) => {
            connection.query(consulta,[datos.uno], (err, filas) => {
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
        console.error("Error en ObtenerHistorialFecha:", error);
        throw error;
    }
}

module.exports = { ObtenerHistorialFecha };