import React from 'react';
import s from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({ flag, name, continent, onClose, id }) {
    return (
        <div className={s.card} >
            {/* <div id="closeIcon" className="row">
                <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
            </div> */}
            <div className="flag">
                <img className="imagenBandera" src={flag} width="120" height="60" alt="flag not fount" />
            </div>
            <div className={s.countryTitle} >
                {/* <h5 > </h5> */}
                <Link to={`/country/${id}`}>
                    <h3 className={s.countryTitle}>{name}</h3>
                </Link>
                <div >
                    <p> {continent}</p>
                </div>
            </div>
        </div>
    );
};
