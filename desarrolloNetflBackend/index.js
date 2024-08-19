const express = require('express');
const cors = require('cors');

// Importar los controladores
const { ObtenerUsuariosController } = require('./controllers/usuarioControllers');
const { ObtenerHistorialController } = require('./controllers/historialController');
const { ObtenerHistorialFechaController } = require('./controllers/historialFechaController');
const { eliminarHistorialController } = require('./controllers/eliminarHistorialController');
const { historialActualizarController } = require('./controllers/historialActualizarController');
const { actualizarTiempoVistoController } = require('./controllers/actualizarTiempoVistoController');


// Inicio de app
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

// Definir las rutas
app.get('/ObtenerUsuarios', ObtenerUsuariosController);
app.get('/ObtenerHistorial', ObtenerHistorialController);
app.get('/ObtenerHistorialFecha', ObtenerHistorialFechaController);
app.delete('/eliminarHistorial', eliminarHistorialController); // Ruta para eliminar todo el historial
app.post('/actualizarHistorial', historialActualizarController);
app.put('/actualizarTiempoVisto', actualizarTiempoVistoController);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
