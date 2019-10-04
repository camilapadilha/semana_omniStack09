import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './style.css';
export default function Dashboard() {
    const [spots, setSpots] = useState([]);
    //é basicamente uma função
    //recebe 2 parametros
    // o primeiro é uma função
    // o segundo é um array de dependencias onde dizemos quando queremos que o 1 param(que é a func) execute
    //array vazio executa apenas uma vez
    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });
            setSpots(response.data);
        }
        loadSpots();
    }, []);
    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
                    </li>
                ))}
            </ul>
            <Link to="/new">
               <button className="btn">Cadastrar novo spot</button>
            </Link>
        </>

    )
}