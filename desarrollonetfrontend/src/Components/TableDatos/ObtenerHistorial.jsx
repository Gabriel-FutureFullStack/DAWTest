import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './ObtenerHistorial.css'; // Importa el archivo CSS personalizado

const ObtenerHistorial = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchHistorial();
    }, []);

    const fetchHistorial = () => {
        const apiUrl = 'http://localhost:4000/ObtenerHistorial';
        axios.get(apiUrl)
            .then(response => {
                setData(response.data || []);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    };

    const handleDeleteAll = () => {
        const apiUrl = 'http://localhost:4000/eliminarHistorial';
        axios.delete(apiUrl)
            .then(() => {
                // Si se elimina correctamente, actualizar la UI
                fetchHistorial();
            })
            .catch(error => {
                console.error('Error al eliminar el historial:', error);
                setError(error);
            });
    };

    if (loading) {
        return (
            <Box className="loading-container">
                <CircularProgress color="inherit" />
                <Typography variant="h6">Cargando historial...</Typography>
            </Box>
        );
    }

    if (error) {
        return (
            <Box className="error-container">
                <Typography variant="h6">Error: {error.message}</Typography>
            </Box>
        );
    }

    return (
        <Box className="historial-container">
            <Typography variant="h4" gutterBottom className="historial-title">
                Historial de Usuario
            </Typography>
            <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                onClick={handleDeleteAll}
                sx={{
                    backgroundColor: '#e50914', // Fondo rojo característico de Netflix
                    color: '#fff', // Texto blanco
                    borderRadius: '4px', // Bordes ligeramente redondeados
                    fontWeight: 'bold', // Negrita en el texto
                    fontSize: '16px', // Tamaño del texto
                    padding: '10px 20px', // Espaciado interno
                    textTransform: 'none', // Evitar que el texto esté todo en mayúsculas
                    '&:hover': {
                        backgroundColor: '#f6121d', // Cambia el color del fondo al hacer hover
                    },
                }}
                style={{ marginBottom: '20px' }}
            >
                Borrar todo el historial
            </Button>
            {data.length > 0 ? (
                <TableContainer component={Paper} className="historial-table-container">
                    <Table className="historial-table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="historial-header">Historial ID</TableCell>
                                <TableCell className="historial-header">Perfil</TableCell>
                                <TableCell className="historial-header">Película</TableCell>
                                <TableCell className="historial-header">Serie</TableCell>
                                <TableCell className="historial-header">Capítulo</TableCell>
                                <TableCell className="historial-header">Fecha Visto</TableCell>
                                <TableCell className="historial-header">Tiempo Visto</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(item => (
                                <TableRow key={item.historialID} className="historial-row">
                                    <TableCell className="historial-cell">{item.historialID}</TableCell>
                                    <TableCell className="historial-cell">{item.perfilNombre}</TableCell>
                                    <TableCell className="historial-cell">{item.peliculaNombre || '-'}</TableCell>
                                    <TableCell className="historial-cell">{item.serieNombre || '-'}</TableCell>
                                    <TableCell className="historial-cell">{item.episodioNombre || '-'}</TableCell>
                                    <TableCell className="historial-cell">{new Date(item.fechaVisto).toLocaleDateString()}</TableCell>
                                    <TableCell className="historial-cell">{item.tiempoVisto || '-'}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Typography>No hay datos disponibles</Typography>
            )}
        </Box>
    );
};

export default ObtenerHistorial;
