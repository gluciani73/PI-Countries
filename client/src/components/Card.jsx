import React from 'react';
import s from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({ flag, name, continent, id }) {
    return (
        <div className={s.card} >
            <div className="flag">
                <img className="imagenBandera" src={flag} width="120" height="60" alt="flag not fount" />
            </div>
            <div className={s.countryTitle} >
                <Link to={`/country/${id}`}>
                    <h3 className={s.countryTitle}>{name}</h3>
                </Link>
                <div >
                    <h4> {continent}</h4>
                </div>
            </div>
        </div>
    );
};
