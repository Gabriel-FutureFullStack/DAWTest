import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


const ObtenerHistorial2 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = 'http://localhost:4000/obtenerHistorial2';
        axios.get(apiUrl)
            .then(response => {
                console.log('Datos recibidos:', response.data);
                setData(response.data || []);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

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
            {data.length > 0 ? (
                <TableContainer component={Paper} className="historial-table-container">
                    <Table className="historial-table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="historial-header">Historial ID</TableCell>
                                <TableCell className="historial-header">Nombre Perfil</TableCell>
                                <TableCell className="historial-header">Título Contenido</TableCell>
                                <TableCell className="historial-header">Fecha Visto</TableCell>
                                <TableCell className="historial-header">Tiempo Visto</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {data.map(item=> {
                            console.log('Item en la tabla:', item); // Añadir este log
                            return (
                                <TableRow key={item.historialID} className="historial-row">
                                    <TableCell className="historial-cell">{item.historialID || 'N/A'}</TableCell>
                                    <TableCell className="historial-cell">{item.nombrePerfil || 'N/A'}</TableCell>
                                    <TableCell className="historial-cell">{item.tituloContenido || 'N/A'}</TableCell>
                                    <TableCell className="historial-cell">{new Date(item.fechaVisto).toLocaleDateString() || 'N/A'}</TableCell>
                                    <TableCell className="historial-cell">{item.tiempoVisto || 'N/A'}</TableCell>
                                </TableRow>
                            );
                        })}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Typography>No hay datos disponibles</Typography>
            )}
        </Box>
    );
};

export default ObtenerHistorial2;
