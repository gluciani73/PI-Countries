import React from 'react';
import s from './Cards.module.css';
import Card from './Card.jsx';
// import { useSelector } from 'react-redux';

export default function Cards({ countries }) {
    // console.log(countries);
    // const selectedCountries = useSelector(state => state.selectedCountries)


    if (countries) {
        return (
            <div className={s.cards}>
                {countries && countries.map(country =>
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
