const express = require('express');
const cors = require('cors');

const { ObtenerUsuariosController } = require('./controllers/usuarioControllers');
const { ObtenerHistorialController } = require('./controllers/historialController');
const { ObtenerHistorialFechaController } = require('./controllers/historialFechaController');
const { eliminarHistorialController } = require('./controllers/eliminarHistorialController');
const { historialActualizarController } = require('./controllers/historialActualizarController');
const { actualizarTiempoVistoController } = require('./controllers/actualizarTiempoVistoController');
const { ObtenerHistorial2Controller } = require('./controllers/historial2Controller');

// Inicio de app
const app = express();

// Permite convertir consultas en formato json
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.get('/ObtenerUsuarios', ObtenerUsuariosController);
app.get('/ObtenerHistorial', ObtenerHistorialController);
app.get('/ObtenerHistorial2', ObtenerHistorial2Controller)
app.get('/ObtenerHistorialFecha', ObtenerHistorialFechaController);
app.delete('/eliminarHistorial', eliminarHistorialController);
app.post('/actualizarHistorial', historialActualizarController);
app.put('/actualizarTiempoVisto', actualizarTiempoVistoController);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
