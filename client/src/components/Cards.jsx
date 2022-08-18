import React from 'react';
import './Cards.module.css';
import Card from './Card.jsx';

export default function Cards({ countries, onClose }) {
    if (countries) {
        return (
            <div className='cards'>
                {countries.map(c => <Card
                    flag={c.flag}
                    name={c.name}
                    continent={c.continent}
                    onClose={() => onClose(c.id)}
                    id={c.id}
                />)}
            </div>
        );
    } else {
        return (
            <div>No countries selected</div>
        )
    }
}
