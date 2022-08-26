import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetail, resetCountryDetail } from "../redux/actions";
import s from './Country.module.css';

export default function Country() {

    const dispatch = useDispatch();
    const { id } = useParams();
    // console.log('id de params: ', id)

    useEffect(() => {
        dispatch(getCountryDetail(id));
    }, [dispatch, id]);
    // console.log()
    const country = useSelector((state) => state.countryDetail)
    // console.log('Country: ', country);
    return (
        <div className={s.country} >
            <div className={s.detail}>
                <h2>{country.name}</h2>
                <img className={s.flag}
                    src={country.flag}
                    alt="country flag not found" />
                <div className={s.info}>
                    <div>Country code: {country.id}</div>
                    <div>Capital: {country.capital}</div>
                    <div>Subregion: {country.subregion}</div>
                    <div>Area: {country.area} km2</div>
                    <div>Population: {country.population} inhabitants</div>
                    <div>Turism Activities: {
                        country.activities && country.activities.map(
                            (a) => (<div>
                                <p><strong>{a.name}</strong> Difficulty: {a.difficulty}, Duration: {a.duration}, Season:  {a.season}</p>
                            </div>)
                        )
                    }</div>
                </div>
            </div>
        </div>
    )
};