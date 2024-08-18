    const { ObtenerConexion } = require('../database/conexion');

    async function ObtenerHistorial2() {
        try {
            const connection = await ObtenerConexion();
            const consulta = 'CALL ObtenerHistorialCompleto();';
            
            return new Promise((resolve, reject) => {
                connection.query(consulta, (err, filas) => {
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
            console.error("Error en ObtenerHistorial:", error);
            throw error;
        }
    }

    module.exports = { ObtenerHistorial2 };