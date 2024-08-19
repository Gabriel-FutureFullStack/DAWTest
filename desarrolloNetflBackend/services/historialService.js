const { ObtenerConexion } = require('../database/conexion');

async function ObtenerHistorial() {
    let connection;
    try {
        connection = await ObtenerConexion();
        const consulta = 'CALL ObtenerHistorialCompleto();'; 

        return new Promise((resolve, reject) => {
            connection.query(consulta, (err, filas) => {
                if (err) {
                    console.error('Error al ejecutar el procedimiento almacenado', err);
                    reject(err);
                } else {
                    resolve(filas);
                }
            });
        });
    } catch (error) {
        console.error("Error en ObtenerHistorial:", error);
        throw error;
    } finally {
        if (connection) {
            connection.end(); 
        }
    }
}

module.exports = { ObtenerHistorial };
