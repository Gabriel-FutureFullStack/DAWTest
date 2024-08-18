const { ObtenerConexion } = require('../database/conexion'); // Exportar ObtenerConxion  '../database/conexion'

async function ObtenerUsuarios() {
    try {
        const connection = await ObtenerConexion(); // Obtener conexion a la base de datos
        
        const consulta = 'SELECT * FROM usuario';
        
        // Return a new Promise to handle the asynchronous query execution
        return new Promise((resolve, reject) => {
            connection.query(consulta, (err, filas) => {
                connection.end(); // Cerrar conexion a la base de datos

                if (err) {
                    console.error('Error al ejecutar la consulta', err);
                    reject(err); // Rechazar la promesa con akgun error.
                } else {
                    resolve(filas); // Resuelva la promesa con las filas extraídas de la base de datos.
                }
                
            });
        });
        
    } catch (error) {
        console.error("Error en ObtenerUsuarios:", error);
        throw error; // Lanza el error para que lo maneje la persona que llama.
    }
}


module.exports = {ObtenerUsuarios}