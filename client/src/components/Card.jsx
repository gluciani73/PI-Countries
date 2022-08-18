import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card({ flag, name, continent, onClose, id }) {
    return (
        <div className="card">
            <div id="closeIcon" className="row">
                <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
            </div>
            <div className="flag">
                <img className="imagenBandera" src={flag} width="240" height="80" alt="flag image not fount" />
            </div>
            <div className="countryTitle">
                <Link to={`/countries/${id}`}>
                    <h5 className="card-title"> Country: {name}</h5>
                </Link>
                <div className="continent">
                    <p>Continent:  {continent}</p>
                </div>
            </div>
        </div>
    );
};
