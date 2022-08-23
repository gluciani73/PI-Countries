import React from 'react';
import s from './Cards.module.css';
import Card from './Card.jsx';

export default function Cards({ countries, onClose }) {
    if (countries.length) {
        return (
            <div className={s.cards}>
                {countries.length && countries.map(country =>
                    <Card
                        key={country.id}
                        id={country.id}
                        flag={country.flag}
                        name={country.name}
                        continent={country.continent}
                    // onClose={() => onClose(country.id)}
                    />)}
            </div>
        );
    } else {
        return (
            <div>No countries to show</div>
        )
    }
}
