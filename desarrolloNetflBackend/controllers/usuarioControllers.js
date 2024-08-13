const {ObtenerUsuarios} = require('../services/usuarioService');

async function ObtenerUsuariosController(req, res){
    try{
        const resultado = await ObtenerUsuarios();
        res.json(resultado);
    }
    catch(error){
        console.error('Error al obtener usuarios: ', error);
        res.status(500).json({error:"Error interno del servidor"});
    }
}

module.exports= {ObtenerUsuariosController}