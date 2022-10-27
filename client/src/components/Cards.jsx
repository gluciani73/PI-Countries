import React from 'react';
import s from './Cards.module.css';
import Card from './Card.jsx';

export default function Cards({ countries }) {
    // if (!countries.length) {
    //     return (
    //         <div>No countries to show</div>
    //     )
    // } else {
    return (
        <div className={s.cards}>
            {countries && countries.map(country =>
                <Card
                    key={country.id}
                    id={country.id}
                    flag={country.flag}
                    name={country.name}
                    continent={country.continent}
                />)}
        </div>
    );
    // }
}
