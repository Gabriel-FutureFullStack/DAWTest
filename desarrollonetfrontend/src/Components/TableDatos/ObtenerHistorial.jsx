import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './ObtenerHistorial.css'; // Importa el archivo CSS personalizado

const ObtenerHistorial = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = 'http://localhost:4000/obtenerHistorial';
        axios.get(apiUrl)
            .then(response => {
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
                                <TableCell className="historial-header">Perfil ID</TableCell>
                                <TableCell className="historial-header">Pelicula ID</TableCell>
                                <TableCell className="historial-header">Serie ID</TableCell>
                                <TableCell className="historial-header">Capítulo ID</TableCell>
                                <TableCell className="historial-header">Fecha Visto</TableCell>
                                <TableCell className="historial-header">Tiempo Visto</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(item => (
                                <TableRow key={item.historialID} className="historial-row">
                                    <TableCell className="historial-cell">{item.historialID}</TableCell>
                                    <TableCell className="historial-cell">{item.perfilID}</TableCell>
                                    <TableCell className="historial-cell">{item.peliculaID}</TableCell>
                                    <TableCell className="historial-cell">{item.serieID || 'N/A'}</TableCell>
                                    <TableCell className="historial-cell">{item.episodioID || 'N/A'}</TableCell>
                                    <TableCell className="historial-cell">{new Date(item.fechaVisto).toLocaleDateString()}</TableCell>
                                    <TableCell className="historial-cell">{item.tiempoVisto || 'N/A'}</TableCell>
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
