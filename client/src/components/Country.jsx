import React from "react";
import s from './Country.module.css';

let country =
{
    id: "ITA",
    name: "Italy",
    flag: "https://flagcdn.com/w320/it.png",
    continent: "Europe",
    capital: "Rome",
    subregion: "Southern Europe",
    area: 301336,
    population: 59554023,
    activities: []
}

export default function Country({ Country }) {
    return (
        <div className={s.country} >
            <div className={s.detail}>
                <h2>{country.name}</h2>
                <img src={country.flag} alt="country flag not found" />
                <div className="info">
                    <div>Country code: {country.id}</div>
                    <div>Capital: {country.capital}</div>
                    <div>Subregion: {country.subregion}</div>
                    <div>Area: {country.area}</div>
                    <div>Population: {country.population}</div>
                    <div>Turism Activities: {country.activities}</div>
                </div>
            </div>
        </div>
    )
}