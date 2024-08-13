import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Historial de Usuario</h1>
            {data.length > 0 ? (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Historial ID</th>
                            <th>Perfil ID</th>
                            <th>Pelicula ID</th>
                            <th>Serie ID</th>
                            <th>Capítulo ID</th>
                            <th>Fecha Visto</th>
                            <th>Tiempo Visto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.historialID}>
                                <td>{item.historialID}</td>
                                <td>{item.perfilID}</td>
                                <td>{item.peliculaID}</td>
                                <td>{item.serieID || 'N/A'}</td>
                                <td>{item.episodioID || 'N/A'}</td>
                                <td>{new Date(item.fechaVisto).toLocaleDateString()}</td>
                                <td>{item.tiempoVisto || 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
};

export default ObtenerHistorial;