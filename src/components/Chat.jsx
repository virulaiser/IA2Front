import React, { useState } from 'react';
import axios from 'axios';

function Chat() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(
              `${import.meta.env.VITE_API}/api/chat/ask`,
              { prompt }
            );
            setResponse(res.data.response);
        } catch (error) {
            console.error('Error:', error);
            setResponse('Error al obtener la respuesta.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Pregunta sobre alimentacion animal"
                    />
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Cargando...' : 'Preguntar'}
                </button>
            </form>
            {response && (
                <div className="mt-3 alert alert-info">
                    <p style={{ whiteSpace: 'pre-wrap' }}>{response}</p>
                </div>
            )}
        </div>
    );
}

export default Chat;